<script lang="ts">
	import '$lib/app.css';
	import { formatTable } from '$lib/functions/formatTable';
	import { version } from '$app/environment';
	import { toasts, ToastContainer, FlatToast, BootstrapToast } from 'svelte-toasts';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	import { base } from '$app/paths';
	let tableText = '';
	let formattedTable: string | undefined = '';

	function handleSubmit() {
		formattedTable = formatTable({ tableText });
		dispatch('formattedTable', formattedTable);
	}
</script>

<svelte:head>
	<title>AT4RE MD Table Formatter {version}</title>
	<meta
		name="description"
		content="AT4RE MD Table Formatter is a versatile tool designed to streamline Markdown table formatting..."
	/>
	<meta name="author" content="R333T" />
</svelte:head>

<main class="container mx-auto max-w-5xl">
	<div class="md:flex md:items-center md:justify-between px-4 pt-5">
		<div class="min-w-0 flex-1">
			<h2
				class="text-2xl font-bold leading-7 text-white sm:truncate sm:text-3xl sm:tracking-tight flex items-center"
			>
				<img src="{base}/favicon.png" alt="Logo" class="inline w-8 h-8 mr-2" />
				AT4RE MD Table Formatter
				<span
					class="inline-block bg-gray-600 text-white text-sm font-semibold px-2 rounded-full ml-2"
					>v0.0.1</span
				>
			</h2>
		</div>
		<div class="mt-4 flex md:ml-4 md:mt-0">
			<a
				href="https://www.at4re.net/f/thread-1167.html"
				target="_blank"
				rel="noopener noreferrer"
				type="button"
				class="inline-flex items-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white/20"
				>Donate to AT4RE</a
			>
			<a
				href="https://www.at4re.net/f/"
				target="_blank"
				rel="noopener noreferrer"
				type="button"
				class="ml-3 inline-flex items-center rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
				>Visit</a
			>
		</div>
	</div>

	<form class="m-4" on:submit|preventDefault={handleSubmit}>
		<div class="mt-2">
			<div
				id="tabs-1-panel-1"
				class="-m-0.5 rounded-lg p-0.5"
				aria-labelledby="tabs-1-tab-1"
				role="tabpanel"
				tabindex="0"
			>
				<label for="table" class="sr-only">Table</label>
				<div>
					<textarea
						bind:value={tableText}
						rows="10"
						name="table"
						id="table"
						class="block w-full bg-transparent rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-300 sm:text-sm sm:leading-6"
						placeholder="Add your table..."
					></textarea>
				</div>
			</div>
			<div
				id="tabs-1-panel-2"
				class="-m-0.5 rounded-lg p-0.5"
				aria-labelledby="tabs-1-tab-2"
				role="tabpanel"
				tabindex="0"
			>
				<div class="border-b">
					<div class="mx-px mt-px px-3 pb-12 pt-2 text-sm leading-5 text-gray-800">
						Preview content will render here.
					</div>
				</div>
			</div>
		</div>
		<div class="mt-2 flex justify-end">
			<button
				type="submit"
				class="inline-flex items-center rounded-md bg-blue-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
				>Format Table</button
			>
		</div>
	</form>

	{#if formattedTable}
		<pre id="tableOutput">{formattedTable}</pre>
		<div class="mt-2 flex justify-end">
			<button
				on:click={() => {
					if (formattedTable) {
						navigator.clipboard.writeText(formattedTable);

						toasts.add({
							title: 'Table copied',
							description: 'The table has been copied to your clipboard.',
							duration: 3000, // 0 or negative to avoid auto-remove
							placement: 'bottom-right',
							theme: 'dark',
							type: 'success',
							onClick: () => {},
							onRemove: () => {}
						});
					}
				}}
				type="submit"
				class="inline-flex items-center rounded-md bg-blue-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
				>Copy Table</button
			>
		</div>
	{/if}

	<ToastContainer placement="bottom-right" let:data>
		<FlatToast {data} />
		<!-- Provider template for your toasts -->
	</ToastContainer>
</main>
