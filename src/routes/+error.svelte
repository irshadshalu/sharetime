<script lang="ts">
	import type { PageData } from './$types';
    import { page } from '$app/stores'; 
	import PickerPage from '../components/PickerPage.svelte';
    import { getModeForUrl } from '../helpers/utils';

	let data: PageData = getModeForUrl($page.url);
</script>

<PickerPage bind:data={data} />
