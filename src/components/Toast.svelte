<script lang="ts">
  import { fly } from 'svelte/transition'
  let opened = false
  export let timeout = 2000

  export function show() {
    opened = true
    setTimeout(() => {
      opened = false
    }, timeout)
  }
</script>

<div class="flex top-5 right-0 left-0 fixed justify-center pointer-events-none">
  {#if opened}
    <div
      transition:fly={{ y: -100 }}
      class="rounded bg-green-600 shadow-md text-white py-2 px-5 shadow-green-800"
    >
      <slot />
    </div>
  {/if}
</div>

<style>
</style>
