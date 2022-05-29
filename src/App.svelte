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
  import { isMac } from './logic/utils'

  let activeEditorTab

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

  function onBookmarked(e) {}
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
      on:bookmarked={onBookmarked}
    />
  </div>
  {#if !$editMode}
    <div
      class="-mt-24 flex flex-col justify-center text-center gap-3 cursive"
    >
      <div class="text-xl font-semibold mb-16">
        <div>
          to your Bookmarks bar to create a <abbr
            title="Bookmarklets are bookmarks with commands that can be run by clicking on them."
            ><a href="https://en.wikipedia.org/wiki/Bookmarklet">Bookmarklet</a
            ></abbr
          >
        </div>
      </div>
      <div class="space-y-2">
        <div class="">
          <div>
            <abbr
              title="A bookmarks bar, sometimes called favorites bar, allows quick access to your bookmarks and supports drag & drop."
            >
              <a
                href="https://duckduckgo.com/?q=what+is+a+bookmarks+bar&t=h_&ia=web"
                target="_blank"
                rel="noopener noreferrer">Bookmarks bar</a
              >
            </abbr> not visible?
          </div>
          <div>Try</div>
        </div>
        <div>
          <kbd>{isMac ? '⇧' : 'shift'}</kbd> + <kbd>{isMac ? '⌘' : 'ctrl'}</kbd>
          +
          <kbd>B</kbd>
        </div>
      </div>
    </div>
  {/if}
</div>
{#if $editMode}
  <div class="-mt-32 relative px-10 z-10 space-y-5 justify-center flex flex-col">
    <div class="absolute right-10 top-0">
      <Button icon={mdiClose} on:click={() => ($editMode = false)} />
    </div>

    <div class="self-center flex flex-col justify-center">
      <label
        class="block select-none text-center font-normal mb-1"
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
  :global(kbd) {
    @apply font-sans border border-opacity-20 bg-gray-100 px-2 py-1 rounded shadow-sm;
  }
  :global(abbr) {
    @apply underline-offset-1 relative mr-2 !cursor-help;
  }
  :global(abbr > a) {
    @apply cursor-help;
  }
  :global(abbr::after) {
    content: '?';
    @apply text-xs -bottom-1 absolute cursor-help;
  }
  .cursive {
    font-family: 'ink free', 'Bradley Hand itc', 'Marker Felt',
      'Marker Felt Thin', sans-serif;
  }
</style>
