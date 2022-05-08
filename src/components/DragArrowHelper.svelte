<script lang="ts">
  export let dragState

  let startPoint = { x: 50, y: 50 }
  let endPoint = { x: 100, y: 10 }
  let arrowWidth = 1
  let arrowHeight = 1
  let svgWidth = 1
  let svgHeight = 1

  $: {
    if (dragState.clientX > 0 && dragState.clientY > 50) {
      startPoint = {
        x: dragState.clientX + endPoint.x,
        y: Math.max(dragState.clientY + endPoint.y - dragState.yOffset, 50),
      }
      dragState.dragging = true
    } else {
      dragState.dragging = false
    }
  }
  $: {
    endPoint = {
      x: svgWidth/2-200,
      y: 15,
    }
  }
  $: {
    arrowWidth = startPoint.x - endPoint.x
    arrowHeight = startPoint.y - endPoint.y
  }
</script>

<div
  class="inset-0 transition-opacity duration-300 fixed"
  bind:clientWidth={svgWidth}
  bind:clientHeight={svgHeight}
  class:opacity-0={!dragState.dragging}
  class:duration-0={!dragState.dragging}
>
  <svg
    class="pointer-events-none"
    fill="none"
    stroke="#777"
    stroke-width={1.5 * window.devicePixelRatio}
    stroke-linecap="round"
    stroke-linejoin="round"
    viewBox={`0 0 ${svgWidth} ${svgHeight}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <marker
        id="pointer"
        markerWidth="14"
        markerHeight="14"
        refX="2"
        refY="7"
        orient="auto"
        stroke-width={1 * window.devicePixelRatio}
        markerUnits="userSpaceOnUse"
      >
        <path d="M 2 2 Q 6 5 12 7 M 2 12 Q 6 9 12 7" />
      </marker>
    </defs>
    <path
      d={`m${arrowWidth} ${arrowHeight}Q ${endPoint.x} ${arrowHeight * 0.7}, ${
        endPoint.x
      } ${endPoint.y}`}
      marker-end="url(#pointer)"
    />
  </svg>
</div>

