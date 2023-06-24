<script lang="ts">
	import type { PageData } from '../routes/$types';
	import SveltyPicker from 'svelty-picker';
	import DateTimeDisplay from './DateTimeDisplay.svelte';
	import HomeIcon from './icons/HomeIcon.svelte';
	import { getTodayDate, bottomPosition, getTimezoneList } from '../helpers/utils';
	import CopyInput from './CopyInput.svelte';
	import Select from "svelte-select";
  
	export let data: PageData;

	let inputDate: string = getTodayDate();
	let inputTime: string;

	const timezonesList = getTimezoneList();

	const calculateTimestamp = () => {
		const date = new Date(inputDate);
		if (!inputTime) {
			return;
		}
		const time = inputTime.split(':');
		const hours = parseInt(time[0]);
		const minutes = parseInt(time[1].slice(0, 2));
		const amPm = time[1].slice(3);
		if (amPm === 'PM') {
			date.setHours(hours + 12);
		} else {
			date.setHours(hours);
		}
		date.setMinutes(minutes);
		data.timestamp = date.getTime() / 1000;
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
		<label class="mt-5" for="timezone-select">Time Zone (detected)</label>

		<div class="flex flex-row">
			<Select
				id="timezone-select"
				required
				clearable={false}
				items={timezonesList}
				bind:value={data.timezone}
				class="input-class timezone-input-class mb-10"
				containerStyles="background-color: #0f0f0f08;"
			/>
		</div>

		{#if data.timestamp}
			<CopyInput data={data} />
		{/if}
	{/if}
	<div class="footer">
		&copy;&nbsp;<a href="https://irshadpi.me" rel="noreferrer" target="_blank">Irshad</a>
	</div>
</div>
