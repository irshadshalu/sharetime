<script lang="ts">
	import { getDate, getTime, getTimezoneList } from "../routes/utils";
	import Select from "svelte-select";
    const timezonesList = getTimezoneList();

    export let timestamp: number;
    export let timezone: { value: string } | undefined;


    let time: string = getTime(timestamp, timezone?.value);
    let date: string = getDate(timestamp, timezone?.value);
    $: time = getTime(timestamp, timezone?.value); 
    $: date = getDate(timestamp, timezone?.value);
</script>
<div class="root flex roboto">
    <span class="flex shadow size-xlarge">{ time }</span>
    <span class="flex shadow size-medium">{ date }</span>
    <div class="flex flex-row m-5 size-normal">
        <Select items={timezonesList} bind:value={timezone} containerClasses="input-class timezone-input-class" containerStyles="background-color: #0f0f0f08;"></Select>
    </div>
</div>
