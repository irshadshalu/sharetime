import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { getTimezone, getValidatedMs } from './utils';
export const ssr = false;

export const load: PageLoad = ({ url }) => {
    const timezone = getTimezone();
    const urlTimestamp = url.searchParams.get('t');
    if (!urlTimestamp) {
        throw error(404, 'Invalid timestamp');
    }
    const timestamp = getValidatedMs(urlTimestamp);
    return { timezone:  { value: timezone }, timestamp };
}