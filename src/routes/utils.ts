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