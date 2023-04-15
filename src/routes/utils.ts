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
    return dayjs.tz.guess();
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
            return { value: utcCode, label: `${utcCode} (${t.display}) - ${t.abbr}` }
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
