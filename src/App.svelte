<script lang="ts">
  import DragButton from './components/DragButton.svelte'
  import { throttle } from 'throttle-debounce'
  import DragArrowHelper from './components/DragArrowHelper.svelte'

  import {
    cssRaw,
    css,
    scriptRaw,
    script,
    name,
    bookmarkletLink,
    editMode,
  } from './stores/store'
  import Footer from './components/Footer.svelte'
  import Tabs from './components/Tabs.svelte'
  import { mdiClose } from '@mdi/js'
  import Button from './components/Button.svelte'
  import { isMac } from './logic/utils'

  let activeEditorTab: string
  let Editor

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

  async function loadEditor() {
    const { formatScript, formatCss } = await import('./logic/formatting')
    scriptRaw.set(formatScript($script))
    cssRaw.set(formatCss($css))
    Editor = Editor || (await import('./components/CodeEditor.svelte')).default
  }

  editMode.subscribe(value => {
    if (value) {
      loadEditor()
    }
  })
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
    <div class="flex flex-col -mt-24 text-center gap-3 justify-center cursive">
      <div class="font-semibold text-xl mb-16">
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
{#if $editMode && Editor}
  <div
    class="flex flex-col space-y-5 -mt-32 px-10 z-10 relative justify-center"
  >
    <div class="top-0 right-10 absolute">
      <Button icon={mdiClose} on:click={() => ($editMode = false)} />
    </div>

    <div class="flex flex-col self-center justify-center">
      <label class="font-normal text-center mb-1 block select-none" for="name"
        >Name</label
      >
      <input
        type="text"
        class="border rounded-md max-w-96 py-2 px-3"
        spellcheck="false"
        autocomplete="none"
        bind:value={$name}
      />
    </div>

    <div>
      <Tabs bind:activeTab={activeEditorTab} tabs={['Script', 'Style']} />
      <div class="rounded-b-md bg-light-150 shadow-md">
        {#if activeEditorTab === 'Script'}
          <svelte:component
            this={Editor}
            bind:code={$scriptRaw}
            lang="javascript"
          />
        {:else}
          <svelte:component this={Editor} bind:code={$cssRaw} lang="css" />
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
    @apply border rounded font-sans bg-gray-100 border-opacity-20 shadow-sm py-1 px-2;
  }
  :global(abbr) {
    @apply mr-2 relative underline-offset-1 !cursor-help;
  }
  :global(abbr > a) {
    @apply cursor-help;
  }
  :global(abbr::after) {
    content: '?';
    @apply cursor-help text-xs -bottom-1 absolute;
  }
  .cursive {
    font-family: 'ink free', 'Bradley Hand itc', 'Marker Felt',
      'Marker Felt Thin', sans-serif;
  }
</style>
