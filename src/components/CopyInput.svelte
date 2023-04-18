<script lang="ts">
	import type { PageData } from '../routes/$types';
	import CopyIcon from './icons/CopyIcon.svelte';
	import TickIcon from './icons/TickIcon.svelte';
    import { convertTimestampToString } from '../helpers/utils';
    
	export let data: PageData;
	let showClickedMessage = false;
    let outputDateString;

    $: outputDateString = convertTimestampToString(data.timestamp * 1000);

    function copyLinkToClipboard(event: MouseEvent & { currentTarget: HTMLElement }) {
        navigator.clipboard.writeText(`${window.location.origin}/${outputDateString}`);
        showClickedMessage = true;
        setTimeout(() => {
            showClickedMessage = false;
        }, 2000);
    }
</script>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click={copyLinkToClipboard} class="copy-text">
    <input
        readonly
        type="text"
        class="text"
        value="{window.location.origin}/{outputDateString}"
    />
    <button>
        {#if showClickedMessage}
            <TickIcon color="#0f0" />
        {:else}
            <CopyIcon />
        {/if}
    </button>
</div>