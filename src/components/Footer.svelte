<script lang="ts">
  import Button from './Button.svelte'
  import { mdiNoteEditOutline, mdiGithub, mdiContentCopy } from '@mdi/js'
  import { bookmarkletLink, editMode } from '../stores/store'
</script>

<div
  class="fixed z-20 bottom-0 py-2 justify-center flex items-center w-full left-0 right-0 gap-3 bg-white shadow"
>
  <Button
    text="Edit"
    icon={mdiNoteEditOutline}
    on:click={() => ($editMode = true)}
  />
  <Button
    text="Copy Link"
    icon={mdiContentCopy}
    on:click={() => navigator.clipboard.writeText(window.location.href)}
  />
  <Button
    text="GitHub"
    icon={mdiGithub}
    on:click={() =>
      window.open(
        'https://github.com/AlexRuppert/bookmarklet-generator',
        '_blank',
        'noopener'
      )}
  />
</div>

<style>
  .shadow {
    box-shadow: 0 -2px 12px -3px rgba(var(--tw-shadow-color), 0.1);
  }
</style>
