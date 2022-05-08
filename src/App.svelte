<script lang="ts">
  import DragButton from './components/DragButton.svelte'
  import { throttle } from 'throttle-debounce'
  import DragArrowHelper from './components/DragArrowHelper.svelte'
  import Editor from './components/CodeEditor.svelte'
  import {
    cssRaw,
    scriptRaw,
    name,
    bookmarkletLink,
    editMode,
  } from './stores/store'
  import Footer from './components/Footer.svelte'
  import Tabs from './components/Tabs.svelte'
  import { mdiClose } from '@mdi/js'
  import Button from './components/Button.svelte'
  $name = '🎥 Video Speed'
  let activeEditorTab
  $scriptRaw = `function onDrag(e) {
  let test = 1 + 1;
}`
  $cssRaw = `a .b {
  border: 1px solid red;
}`

  let dragState = {
    dragging: false,
    clientX: 0,
    clientY: 0,
    yOffset: 0,
  }

  function onDrag(e) {
    dragState.clientX = e.detail.e.clientX
    dragState.clientY = e.detail.e.clientY
    dragState.yOffset = e.detail.yOffset
  }
  function onDragEnd(e) {
    dragState.dragging = false
  }

  const throttledOnDrag = throttle(3, onDrag)
</script>

<div class="mr-auto ml-auto max-w-sm py-4">
  <DragArrowHelper {dragState} />
  <div class="flex h-80 justify-center items-center">
    <DragButton
      title={$name}
      href={$bookmarkletLink}
      on:drag={throttledOnDrag}
      on:dragEnd={onDragEnd}
    />
  </div>
  <div class="justify-center font-light transform text-center" />
</div>
{#if $editMode}
  <div class="relative px-10 z-10 space-y-5">
    <div class="absolute right-10 top-0">
      <Button icon={mdiClose} on:click={() => ($editMode = false)} />
    </div>

    <div class="flex flex-col justify-start">
      <label
        class="block select-none text-left font-normal mb-1 pl-3"
        for="name">Name</label
      >
      <input
        type="text"
        class="px-3 py-2 border rounded-md max-w-96"
        spellcheck="false"
        autocomplete="none"
        bind:value={$name}
      />
    </div>

    <div>
      <Tabs bind:activeTab={activeEditorTab} tabs={['Script', 'Style']} />
      <div class="shadow-md bg-light-150 rounded-b-md">
        {#if activeEditorTab === 'Script'}
          <Editor bind:code={$scriptRaw} lang="javascript" />
        {:else}
          <Editor bind:code={$cssRaw} lang="css" />
        {/if}
      </div>
    </div>
  </div>
{/if}
<Footer />

<style windi:preflights:global windi:safelist:global>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
</style>
