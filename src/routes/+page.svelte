<script lang="ts">
	import type { PageData } from './$types';
	import PickerPage from '../components/PickerPage.svelte';

	export let data: PageData;
</script>

<PickerPage bind:data={data} />
