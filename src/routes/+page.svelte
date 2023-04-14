<script lang="ts">
	import type { PageData } from '.svelte-kit/types/src/routes/$types';
	import SveltyPicker from 'svelty-picker';
	import DateTimeDisplay from '../components/DateTimeDisplay.svelte';
	import Select from 'svelte-select';
	import { getTimezoneList } from './utils';
    import CopyIcon from '../components/CopyIcon.svelte';
	import TickIcon from '../components/TickIcon.svelte';
	import HomeIcon from '../components/HomeIcon.svelte';

	export let data: PageData;
	const timezonesList = getTimezoneList();

	let timezone: { value: string } | undefined = data.timezone;
	let inputDate: string = new Date().toISOString().slice(0, 10);
	let inputTime: string;
	// Calculate timestamp based on inputDate and inputTime. time is in hh:ii P format
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

	function bottomPosition(
		el: HTMLElement,
		{ inputEl, visible, inputRect }: { inputEl: HTMLElement; visible: boolean; inputRect: DOMRect }
	) {
		if (!visible) {
			const calRect = el.getBoundingClientRect();
			const style = ['position: absolute', 'z-index: 12250'];
			style.push(
				inputRect.x + calRect.width > window.innerWidth
					? `right: 1rem`
					: `left: ${inputRect.left}px`
			);
			// Position el above inputEl
			style.push(`top: ${inputRect.top + window.scrollY - calRect.height - 1}px`);
			el.setAttribute('style', style.join(';'));
			el.hidden = false;
			document.body.appendChild(el);
		}
		el.hidden = false;

		function destroy() {
			if (el.parentNode) {
				el.parentNode.removeChild(el);
			}
		}

		return {
			destroy
		};
	}

    let showClickedMessage = false;

	function copyLinkToClipboard(event: MouseEvent & { currentTarget: HTMLElement}) {
        navigator.clipboard.writeText(window.location.origin + '/?t=' + data.timestamp);
        showClickedMessage = true;
        setTimeout(() => {
            showClickedMessage = false;
        }, 2000);
    }

</script>

<div>
    <!-- Add a small home icon on the top left corner of the page -->
    <a href="/" class="home-icon">
        <HomeIcon/>
    </a>
</div>
<div class="root flex roboto">
	{#if data.mode === 'view'}
		<DateTimeDisplay bind:timestamp={data.timestamp} bind:timezone={data.timezone} />
	{:else}
		<span class="font-thin flex shadow mb-10 size-large">Share Time.</span>
		<span class="font-thin flex shadow">Select date and time in your timezone</span>
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
            
        <!-- Add an input element and a small button with copy icon in a row which appears like a single element-->

        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div on:click={copyLinkToClipboard} class="copy-text">
            <input type="text" class="text" value="{window.location.origin}/?t={data.timestamp}" />
            <button >
                {#if showClickedMessage}
                    <TickIcon color="#0f0"/>
                {:else}
                    <CopyIcon/>
                {/if}
            </button>
        </div>
		{/if}
		<!-- <div  class="flex flex-row mt-10">
            <Select items={timezonesList} bind:value={timezone} containerClasses="input-class timezone-input-class" containerStyles="background-color: #0f0f0f08;" ></Select> 
        </div> -->
	{/if}
</div>
<!-- Create a footer -->
<div class="footer" >
    A hobby project by&nbsp;<a href="https://irshadpi.me" target="_blank">Irshad</a> 
</div>