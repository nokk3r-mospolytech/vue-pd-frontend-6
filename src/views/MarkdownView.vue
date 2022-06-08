<template>
   <div ref="ref" class="editor"></div>
</template>

<script>
import Editor from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css';

export default {
   name: "MarkdownView",
   mounted() {
      try {
         const editor = new Editor({
            el: this.$refs.ref,
            height: '500px',
            initialEditType: 'markdown',
            previewStyle: 'vertical'
         })
         editor.getMarkdown()
      } catch (e) {
         console.log(e)
      }
   },
}
</script>

<style lang="scss">
.editor {
   padding: 0 40px;
}
</style>