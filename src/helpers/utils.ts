import { error } from "@sveltejs/kit";
import dayjs from "dayjs";
import TimeZone from "dayjs/plugin/timezone";
import Utc from "dayjs/plugin/utc";
import LocalizedFormat from "dayjs/plugin/localizedFormat";
import AdvancedFormat from "dayjs/plugin/advancedFormat";
import { TIMEZONES } from "./timezones";
dayjs.extend(Utc);
dayjs.extend(TimeZone);
dayjs.extend(LocalizedFormat);
dayjs.extend(AdvancedFormat);

export function getValidatedMs(slug: string) {
    const timeSeconds = Number(slug);
    if (!timeSeconds || isNaN(timeSeconds)) {
        throw error(400, 'Invalid timestamp');
    }

    if (timeSeconds > 1e11) {
        // TODO: Update this logic in a million years.
        return timeSeconds;
    }

    return timeSeconds * 1000;
}

export function getTimezone() {
    return dayjs.tz.guess() || "Etc/GMT";
}

export function getTime(timestamp: number, timezone: string = dayjs.tz.guess()) {
    return dayjs.tz(timestamp, timezone).format('h:mm A');
}

export function getDate(timestamp: number, timezone: string = dayjs.tz.guess() ) {
    return dayjs.tz(timestamp, timezone).format('dddd, Do MMMM YYYY');
}

export function getTimezoneList() {
    return TIMEZONES.flatMap((t) => { 
        return t.utc.map((utcCode) => {
            return { value: utcCode, label: `${utcCode} (${t.display}) - ${t.abbr}`, offset: t.display }
        });
    });
}

export function getTodayDate() {
    return dayjs().format('YYYY-MM-DD');
}


export function bottomPosition(
    el: HTMLElement,
    { visible, inputRect }: { visible: boolean; inputRect: DOMRect }
) {
    if (!visible) {
        const calRect = el.getBoundingClientRect();
        const style = ['position: absolute', 'z-index: 12250'];
        style.push(
            inputRect.x + calRect.width > window.innerWidth
                ? `right: 1rem`
                : `left: ${inputRect.left}px`
        );
        // Position el above inputEl
        style.push(`top: ${inputRect.top + window.scrollY - calRect.height - 1}px`);
        el.setAttribute('style', style.join(';'));
        el.hidden = false;
        document.body.appendChild(el);
    }
    el.hidden = false;

    function destroy() {
        if (el.parentNode) {
            el.parentNode.removeChild(el);
        }
    }

    return {
        destroy
    };
}

function normalizeTimezoneOffset(offset: string): string {
    const displayParts = offset.split(':');
    if (displayParts.length !== 2) {
        throw error(400, 'Invalid timezone');
    }
    const sign = displayParts[0].substring(0, 1);
    const hours = displayParts[0].substring(1);
    const hoursNumber = Number(hours);
    const minutes = displayParts[1];
    return `${sign}${hoursNumber}:${minutes}`;
    
}

function getTimezoneFromDisplay(display: string): string {
    const normalizedDisplay = normalizeTimezoneOffset(display);
    const tz = TIMEZONES.find((t) => t.display === normalizedDisplay);
    if (!tz) {
        throw error(400, 'Invalid timezone');
    }
    return tz.utc[0];
}

export function parsePathToTime(path: string) {
    const parts = path.split('/').filter((p) => p.length > 0);
    if (parts.length < 2 || parts.length > 3) {
        throw error(400, 'Invalid date URL');
    }

    const date = parts[0];
    const time = parts[1];
    const timezone = getTimezoneFromDisplay(parts[2]);

    if(!dayjs(date, 'YYYY-MM-DD', true).isValid()) {
        throw error(400, 'Invalid date format');
    }

    if(!/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(time)) {
        throw error(400, 'Invalid time format');
    }


    const parsedDate = dayjs.tz(`${date} ${time}`, timezone);
    if (!parsedDate.isValid()) {
        throw error(400, 'Invalid date or time');
    }

    return parsedDate.valueOf();
}

export function getModeForUrl(url: URL) {
    const timezone = getTimezone();
    const offset = getTimezoneList().find((t) => t.value === timezone)!.offset;

    const urlTimestamp = url.searchParams.get('t');

    if (urlTimestamp) {
        return { mode: 'view', timezone:  { value: timezone, offset: offset }, timestamp: getValidatedMs(urlTimestamp) };
    }

    if (url.pathname === '/') {
        return { mode: 'edit', timezone:  { value: timezone, offset: offset }, timestamp: 0 };
    }

    const timestamp = parsePathToTime(url.pathname);
    return { mode: 'view', timezone:  { value: timezone, offset: offset }, timestamp };
}

// Used dayjs to convert timestamp to YYYY-MM-DD HH:mm Z format
export function convertTimestampToString(timestamp: number, timezoneOffset: string) {
    const dateString = dayjs(timestamp).format('YYYY-MM-DD/H:mm');

    return `${dateString}/${timezoneOffset}`;
}
