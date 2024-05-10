<script setup>
import { ref } from "vue";
import VueTailwindDatepicker from "vue-tailwind-datepicker";
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'

import BoldIcon from 'vue-material-design-icons/FormatBold.vue'
import ItalicIcon from 'vue-material-design-icons/FormatItalic.vue'
import UnderlineIcon from 'vue-material-design-icons/FormatUnderline.vue'
import H1Icon from 'vue-material-design-icons/FormatHeader1.vue'
import H2Icon from 'vue-material-design-icons/FormatHeader2.vue'
import ListIcon from 'vue-material-design-icons/FormatListBulleted.vue'
import OrderedListIcon from 'vue-material-design-icons/FormatListNumbered.vue'
import BlockquoteIcon from 'vue-material-design-icons/FormatQuoteClose.vue'
import CodeIcon from 'vue-material-design-icons/CodeTags.vue'
import HorizontalRuleIcon from 'vue-material-design-icons/Minus.vue'
import UndoIcon from 'vue-material-design-icons/Undo.vue'
import RedoIcon from 'vue-material-design-icons/Redo.vue'

const props = defineProps({
  modelValue: String,
})

const emit = defineEmits(['update:modelValue'])

const dateValueExpedition = ref([]);
const dateValueLimite = ref([]);

const editor = useEditor({
  content: props.modelValue,
  onUpdate: ({ editor }) => {

    emit('update:modelValue', editor.getHTML())
  },
  extensions: [StarterKit, Underline],
  editorProps: {
    attributes: {
      class:
        'border border-gray-400 p-4 min-h-[12rem] max-h-[12rem] overflow-y-auto outline-none prose max-w-none',
    },
  },
})

const fileInput = ref(null);

function handleButtonClick() {
  fileInput.value.click();
}

const showCCI = ref(false);


function toggleCCI() {
  showCCI.value = !showCCI.value;
}

</script>

<template>

    <header class="mb-6">
        <h1 class="text-3xl font-bold"> Créer des Emails</h1>
    </header>
<div class="container">
     <form>
        <div class="grid gap-6 mb-6 md:grid-cols-2">
            <div>
                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900"> Nom de l'expéditeur</label>
                <input type="text" id="first_name" class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
            </div>
            <div>
                <label for="Organisation" class="block mb-2 text-sm font-medium text-gray-900">Organisation de l'expéditeur</label>
                <input type="text" id="last_name" class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  required />
            </div>
            <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Adresse e-mail</label>
                <input type="text" id="company" class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  required />
            </div>



  <div>
    <label for="Date-expédition" class="block mb-2 text-sm font-medium text-gray-900">Date d'expédition</label>
      <vue-tailwind-datepicker  class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg"   v-model="dateValueExpedition" as-single />
</div>


            <div>
                <label for="Type-destinataire" class="block mb-2 text-sm font-medium text-gray-900">Type de destinataire</label>
                <input type="text" id="first_name" class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  required />
            </div>

            <div>
                <label for="Date-limite" class="block mb-2 text-sm font-medium text-gray-900">Date limite</label>
                <vue-tailwind-datepicker  class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg"   v-model="dateValueLimite" as-single />
            </div>




      </div>
    </form>


    <div class="w-full bg-white shadow-xl rounded-lg flex overflow-x-auto custom-scrollbar">

        <div class="flex-1 px-2">
            <div class="h-16 flex items-center">
                <h4 class="text-lg font-bold">New mail</h4>
            </div>

            <div class="cont">


                <div class="mb-2">

                    <button @click="toggleCCI" class="buttons-container text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" id="cciButton">CCI</button>
                  </div>
                </div>
                  <div class="input-container">
                    <input type="text" name="cc" id="cc" class="w-full py-2 px-3 border-b border-gray-300 focus:outline-none focus:ring-0 focus:border-transparent focus:border-b-gray-300 placeholder-gray-400 mt-2" placeholder="CC">
                    <input v-if="showCCI" type="text" name="cci" id="cci" class="w-full py-2 px-3 border-b border-gray-300 focus:outline-none focus:ring-0 focus:border-transparent focus:border-b-gray-300 placeholder-gray-400 mt-2" placeholder="CCI">
                  </div>
                    <div>
                        <input type="text" name="cc" id="cc" class="w-full py-2 px-3 border-b border-gray-300 focus:outline-none focus:ring-0 focus:border-transparent focus:border-b-gray-300 placeholder-gray-400 mt-2" placeholder="Sujet">
                    </div>





                <div class="mb-6 pt-4">
                <div class="mt-4">
                    <section
                    v-if="editor"
                    class="buttons text-gray-700 flex items-center flex-wrap gap-x-4 border-t border-l border-r border-gray-400 p-4"
                  >
                    <button
                      type="button"
                      @click="editor.chain().focus().toggleBold().run()"
                      :class="{ 'bg-gray-200 rounded': editor.isActive('bold') }"
                      class="p-1"
                    >
                      <BoldIcon title="Bold" />
                    </button>
                    <button
                      type="button"
                      @click="editor.chain().focus().toggleItalic().run()"
                      :class="{ 'bg-gray-200 rounded': editor.isActive('italic') }"
                      class="p-1"
                    >
                      <ItalicIcon title="Italic" />
                    </button>
                    <button
                      type="button"
                      @click="editor.chain().focus().toggleUnderline().run()"
                      :class="{ 'bg-gray-200 rounded': editor.isActive('underline') }"
                      class="p-1"
                    >
                      <UnderlineIcon title="Underline" />
                    </button>
                    <button
                      type="button"
                      @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
                      :class="{
                        'bg-gray-200 rounded': editor.isActive('heading', { level: 1 }),
                      }"
                      class="p-1"
                    >
                      <H1Icon title="H1" />
                    </button>
                    <button
                      type="button"
                      @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
                      :class="{
                        'bg-gray-200 rounded': editor.isActive('heading', { level: 2 }),
                      }"
                      class="p-1"
                    >
                      <H2Icon title="H2" />
                    </button>
                    <button
                      type="button"
                      @click="editor.chain().focus().toggleBulletList().run()"
                      :class="{ 'bg-gray-200 rounded': editor.isActive('bulletList') }"
                      class="p-1"
                    >
                      <ListIcon title="Bullet List" />
                    </button>
                    <button
                      type="button"
                      @click="editor.chain().focus().toggleOrderedList().run()"
                      :class="{ 'bg-gray-200 rounded': editor.isActive('orderedList') }"
                      class="p-1"
                    >
                      <OrderedListIcon title="Ordered List" />
                    </button>
                    <button
                      type="button"
                      @click="editor.chain().focus().toggleBlockquote().run()"
                      :class="{ 'bg-gray-200 rounded': editor.isActive('blockquote') }"
                      class="p-1"
                    >
                      <BlockquoteIcon title="Blockquote" />
                    </button>
                    <button
                      type="button"
                      @click="editor.chain().focus().toggleCode().run()"
                      :class="{ 'bg-gray-200 rounded': editor.isActive('code') }"
                      class="p-1"
                    >
                      <CodeIcon title="Code" />
                    </button>
                    <button
                      type="button"
                      @click="editor.chain().focus().setHorizontalRule().run()"
                      class="p-1"
                    >
                      <HorizontalRuleIcon title="Horizontal Rule" />
                    </button>
                    <button
                      type="button"
                      class="p-1 disabled:text-gray-400"
                      @click="editor.chain().focus().undo().run()"
                      :disabled="!editor.can().chain().focus().undo().run()"
                    >
                      <UndoIcon title="Undo" />
                    </button>
                    <button
                      type="button"
                      @click="editor.chain().focus().redo().run()"
                      :disabled="!editor.can().chain().focus().redo().run()"
                      class="p-1 disabled:text-gray-400"
                    >
                      <RedoIcon title="Redo" />
                    </button>
                  </section>
                    <editor-content :editor="editor" />
                </div>






                <div class="flex items-center justify-between mt-4">
                    <div class="flex items-center space-x-2">
                        <button class="bg-blue-500 hover:bg-blue-700 rounded-lg px-12 py-1.5 text-gray-100 hover:shadow-xl transition duration-150">Send</button>
                        <button title="Attach Files" @click="handleButtonClick">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 hover:text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path>
                            </svg>
                            <input type="file" id="fileInput" style="display: none;" ref="fileInput">
                          </button>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>

<div>


  </div>







</template>

<style scoped>
.container {
  margin-left: auto;
  margin-right: auto;
  width: 70%;
}

.input-field {
    width: 100%;
    padding: 0.5rem 1rem;
    border: none;
    border-bottom: 1px solid #ccc;
    outline: none;
  }

  .input-field:focus {
    border-color: #ccc;

  }
  .cont {
    display: flex;
    justify-content: flex-end;
}

.buttons-container {
    margin-left: auto;
}

</style>


