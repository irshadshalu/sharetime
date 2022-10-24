<script lang="ts">
	import type { PageData } from '.svelte-kit/types/src/routes/$types';
    import Select from 'svelte-select';
	import { getDate, getTime, getTimezoneList } from './utils';

    export let data: PageData;
    const items = getTimezoneList();

    let time: string = getTime(data.timestamp, data.timezone?.value);
    let date: string = getDate(data.timestamp, data.timezone?.value);
    $: time = getTime(data.timestamp, data.timezone?.value); 
    $: date = getDate(data.timestamp, data.timezone?.value);
</script>

<div class="root flex roboto">
    <span class="flex shadow size-xlarge">{ time }</span>
    <span class="flex shadow size-medium">{ date }</span>
    <div class="flex flex-row m-5 size-normal">
        <span class="flex align-items-center mr-5 color-grey">Time in:</span>
        <Select {items} bind:value={data.timezone} containerStyles="width: 25vh"></Select>
    </div>
</div>