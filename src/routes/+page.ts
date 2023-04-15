import type { PageLoad } from './$types';
import { getTimezone, getValidatedMs } from './utils';
export const ssr = false;
export const prerender = true

export const load: PageLoad = ({ url }) => {
    const timezone = getTimezone();
    const urlTimestamp = url.searchParams.get('t');
    if (!urlTimestamp) {
        return { mode: 'edit', timezone:  { value: timezone }, timestamp: 0 };
    }
    const timestamp = getValidatedMs(urlTimestamp);
    return { mode: 'view', timezone:  { value: timezone }, timestamp };
}