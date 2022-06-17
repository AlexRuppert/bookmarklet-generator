<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import { mdiHandBackRight } from '@mdi/js'
  import SvgIcon from './SvgIcon.svelte'

  export let title
  export let href
  let dragging = false
  let yOffsetDrag = 0

  function dragStart(e) {
    const targetBox = e.target.getBoundingClientRect()
    yOffsetDrag = e.clientY - targetBox.y
    e.dataTransfer.setDragImage(
      e.target,
      (e.clientX - targetBox.x) * window.devicePixelRatio,
      (e.clientY - targetBox.y) * window.devicePixelRatio
    )
    setTimeout(() => {
      dragging = true
    }, 1)

    e.dataTransfer.setData('text/plain', e.target.href)
  }
  function dragEnd(e) {
    dragging = false
    dispatch('dragEnd', {
      e,
    })

    if (e.dataTransfer.dropEffect === 'copy' && e.clientY < 5) {
      dispatch('bookmarked', {
        e,
      })
    }
    console.log(e)
  }
  const dispatch = createEventDispatcher()

  function drag(e) {
    dispatch('drag', {
      e,
      yOffset: yOffsetDrag,
    })
  }
</script>

<div class="relative block">
  <a
    draggable="true"
    class="rounded-xl flex flex-col font-semibold h-min bg-blue-700 text-white text-lg tracking-wider min-w-5 min-h-7 transition-all  duration-200 items-center inline-block overflow-y-hidden hover:bg-blue-600"
    class:hidden={dragging}
    {href}
    on:dragstart={dragStart}
    on:dragend={dragEnd}
    on:drag={drag}
  >
    <div class="px-5 pt-3 grabber">
      <span class="h-4 mr-2 w-4 inline-block "
        ><SvgIcon d={mdiHandBackRight} /></span
      >
    </div>
    <div
      class="bg-white font-normal h-full mt-2  text-black text-sm text-center w-full min-h-8 max-w-56 px-5 pt-2 pb-3 whitespace-nowrap overflow-hidden overflow-ellipsis"
    >
      {title}
    </div>
  </a>
</div>

<style>
  a {
    cursor: grab;
    user-select: none;
    --tw-shadow-color: 30, 58, 138;
    box-shadow: 0 4px 6px -1px rgba(var(--tw-shadow-color), 0.4),
      0 2px 4px -1px rgba(var(--tw-shadow-color), 0.2);
  }
  a:hover {
    cursor: grab;
    user-select: none;
    --tw-shadow-color: 30, 58, 138;
    box-shadow: 0 7px 6.5px -2px rgba(var(--tw-shadow-color), 0.3),
      0 3px 5px -1px rgba(var(--tw-shadow-color), 0.1);
    
  }
  a:active {
    cursor: grabbing;
  }
  .grabber:after {
    content: 'DRAG ME';
    @apply text-center;
  }
</style>
