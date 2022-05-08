<script context="module">
  import hljs from 'highlight.js/lib/core'
  import javascript from 'highlight.js/lib/languages/javascript'
  import css from 'highlight.js/lib/languages/css'
  import 'highlight.js/styles/github.css'
  import beautify from 'simply-beautiful'
  hljs.registerLanguage('javascript', javascript)
  hljs.registerLanguage('css', css)

  export function formatScript(code) {
    return beautify.js(code, {
      indent_size: 2,
    })
  }

  export function formatCss(code) {
    return beautify.css(code, {
      indent_size: 2,
    })
  }
</script>

<script lang="ts">
  import { CodeJar } from 'codejar'
  import { onMount } from 'svelte'
  import Button from './Button.svelte'
  import { mdiFormatIndentIncrease, mdiRedo, mdiUndo } from '@mdi/js'
  export let code
  export let lang = 'javascript'
  let jar
  let editorElement
  const highlight = (editor: HTMLElement) => {
    const code = editor.textContent
    editorElement.innerHTML = hljs.highlight(code, { language: lang }).value
  }
  onMount(() => {
    jar = CodeJar(editorElement, highlight)
    jar.onUpdate((c) => {
      code = c
    })
  })
  function format() {
    if (lang === 'javascript') {
      jar.updateCode(formatScript(code))
    } else {
      jar.updateCode(formatCss(code))
    }
  }
</script>

<div class="flex justify-end bg-cool-gray-100">
  <Button text="Format" icon={mdiFormatIndentIncrease} on:click={format} />
</div>
<div class="code-editor p-3 min-h-48" bind:this={editorElement}>{code}</div>

<style>
  .code-editor {
    font-family: 'Consolas', monospace;
    tab-size: 2;
  }
</style>
