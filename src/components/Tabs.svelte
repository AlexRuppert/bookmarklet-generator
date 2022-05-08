<script lang="ts">
  export let tabs: string[] = []
  export let activeTab: string = ''

  $: {
    if (tabs.length > 0) {
      if (!activeTab || !tabs.find((t) => t === activeTab)) {
        activeTab = tabs[0]
      }
    }
  }
</script>

<ul class="flex">
  {#each tabs as tab}
    <li
      class="px-3 py-1 border-b-3 transition-colors tracking-wide cursor-pointer select-none"
      on:click={() => (activeTab = tab)}
      class:active={activeTab === tab}
    >
      {tab}
    </li>
  {/each}
</ul>

<style>
  .active {
    @apply border-blue-500;
  }
</style>
