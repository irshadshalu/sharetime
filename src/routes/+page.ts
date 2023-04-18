import type { PageLoad } from './$types';
import { getModeForUrl } from '../helpers/utils';
export const ssr = false;
export const prerender = true;

export const load: PageLoad = ({ url }) => {
    return getModeForUrl(url);
}