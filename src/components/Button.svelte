<script lang="ts">
  import SvgIcon from './SvgIcon.svelte'

  export let icon = ''
  export let text = ''
</script>

<button
  on:click
  class="text-gray-900 py-1 flex rounded-lg items-center px-2 space-x-1 focus:(outline-none) relative"
>
  {#if icon}
    <span class="w-4 h-4 inline-block "><SvgIcon d={icon} /></span>
  {/if}<span>{text}</span></button
>

<style>
  button::after {
    content: '';
    height: 2px;

    bottom: 1px;
    @apply bg-blue-500 left-0 absolute w-full scale-x-1 transform transition opacity-0;
    transition: all 0.2s ease-in-out;
  }
  button:hover::after {
    @apply opacity-100 scale-x-100;
  }
  button:active::after {
    @apply scale-y-150;
  }
</style>
