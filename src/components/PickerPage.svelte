<script lang="ts">
	import type { PageData } from '../routes/$types';
	import SveltyPicker from 'svelty-picker';
	import DateTimeDisplay from './DateTimeDisplay.svelte';
	import HomeIcon from './icons/HomeIcon.svelte';
	import { getTodayDate, bottomPosition, getTimestampFromDateTime } from '../helpers/utils';
	import CopyInput from './CopyInput.svelte';

	export let data: PageData;

	let inputDate: string = getTodayDate();
	let inputTime: string;

	const calculateTimestamp = () => {
		const date = new Date(inputDate);
		if (!inputTime) {
			return;
		}
		const time = inputTime.split(' ')[0];
		data.timestamp = getTimestampFromDateTime(inputDate, time) / 1000;
	};


</script>

<div>
	<a href="/" class="home-icon">
		<HomeIcon />
	</a>
</div>
<div class="root flex roboto">
	{#if data.mode === 'view'}
		<DateTimeDisplay bind:timestamp={data.timestamp} bind:timezone={data.timezone} />
	{:else}
		<span class="font-thin flex shadow mb-10 size-large">ShareTi.me</span>
		<span class="font-thin flex shadow">Share time across timezones.</span>
		<div class="flex flex-row mt-5">
			<SveltyPicker
				pickerOnly={true}
				inputClasses="input-class time-input-class"
				on:input={calculateTimestamp}
				theme="sdt-dark-colors"
				minuteIncrement={5}
				clearToggle={false}
				format="hh:ii P"
				placeholder="Select time"
				bind:value={inputTime}
			/>
		</div>
		<div class="flex flex-row mt-5 mb-10">
			<SveltyPicker
				positionFn={bottomPosition}
				inputClasses="input-class date-input-class"
				on:input={calculateTimestamp}
				theme="sdt-dark-colors-calendar"
				clearToggle={false}
				todayBtn={true}
				format="yyyy-mm-dd"
				placeholder=""
				bind:value={inputDate}
			/>
		</div>

		{#if data.timestamp}
			<CopyInput data={data} />
		{/if}
	{/if}
</div>
<div class="footer">
	&copy;&nbsp;<a href="https://irshadpi.me" rel="noreferrer" target="_blank">Irshad</a>
</div>
