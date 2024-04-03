<script lang="ts">
	import { invalidate } from "$app/navigation";
	import { onMount } from "svelte";

  /** @type {import('./$types').PageData} */
	export let data: { current?: string };
  $: console.log("DATA", data);

  onMount(() => {
    setInterval(() => {
      invalidate('app:notification');
    }, 1000);
  });
</script>

<div class="tech-container bg-gray-300">
  <h1 class="text-3xl text-center">Nursery Code</h1>
  <p class="text-6xl text-center text-red-500">{data.current ?? '-------'}</p>
</div>

<style lang="scss">
  .tech-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    height: 100vh;
    width: 100%;
    // background-color: #414d5c;
  }
</style>