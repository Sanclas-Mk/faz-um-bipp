  <template>
  <div>
    <section
      v-if="editor"
      class="flex items-center flex-wrap gap-x-1 p-4 top-[65px]"
    >
      <button
        class="px-3 py-1 hover:bg-gray-200 rounded flex justify-between items-center space-x-3 w-[130px] border-2"
        type="button"
        @click="toggle"
        :class="{
          'bg-gray-200 rounded': editor.isActive('heading'),
        }"
      >
        <p>{{ selectedTitle }}</p>
        <i class="fa-solid fa-angle-down text-gray-400"></i>
      </button>
      <div
        v-if="isActive"
        class="flex flex-col z-[99] bg-gray-100 border-2 absolute translate-y-20 w-[130px]"
      >
        <button
          type="button"
          class="px-3 py-1 border-b border-gray-300 hover:bg-gray-200"
          @click="paragrafo"
          :class="{ 'bg-gray-200': editor.isActive('paragraph') }"
        >
          Texto
        </button>
        <button
          type="button"
          class="px-3 py-1 border-b border-gray-300 hover:bg-gray-200"
          @click="tituloUm"
          :class="{
            'bg-gray-200 ': editor.isActive('heading', { level: 1 }),
          }"
        >
          <span>Heading 1</span>
        </button>
        <button
          type="button"
          class="px-3 py-1 border-b border-gray-300 hover:bg-gray-200"
          @click="tituloDois"
          :class="{
            'bg-gray-200': editor.isActive('heading', { level: 2 }),
          }"
        >
          <span>Heading 2</span>
        </button>
        <button
          type="button"
          class="px-3 py-1 border-b border-gray-300 hover:bg-gray-200"
          @click="tituloTres"
          :class="{
            'bg-gray-200': editor.isActive('heading', { level: 3 }),
          }"
        >
          <span>Heading 3</span>
        </button>
      </div>
      <button
        type="button"
        class="px-3 py-1 hover:bg-gray-200 rounded"
        @click="editor.chain().focus().toggleBold().run()"
        :class="{ 'bg-gray-200 rounded': editor.isActive('bold') }"
      >
        <abbr title="Bold"><i class="fa-solid fa-bold"></i></abbr>
      </button>
      <button
        type="button"
        class="px-3 py-1 hover:bg-gray-200 rounded"
        @click="editor.chain().focus().toggleItalic().run()"
        :class="{ 'bg-gray-200 rounded': editor.isActive('italic') }"
      >
        <abbr title="Itálico"><i class="fa-solid fa-italic"></i></abbr>
      </button>
      <button
        type="button"
        class="px-3 py-1 hover:bg-gray-200 rounded"
        @click="editor.chain().focus().toggleUnderline().run()"
        :class="{ 'bg-gray-200 rounded': editor.isActive('underline') }"
      >
        <abbr title="Underline"><i class="fa-solid fa-underline"></i></abbr>
      </button>

      <div class="text-[24px]">|</div>

      <button
        type="button"
        class="px-3 py-1 hover:bg-gray-200 rounded"
        :class="{ 'bg-gray-200 rounded': editor.isActive('link') }"
      >
        <i class="fa-solid fa-link"></i>
      </button>

      <button
        class="px-3 py-1 hover:bg-gray-200 rounded"
        type="button"
        @click="addImage"
      >
        <i class="fa-solid fa-image"></i>
      </button>
      <input
        type="file"
        ref="fileInput"
        style="display: none"
        accept="image/*"
      />

      <div class="text-[24px]">|</div>

      <div>
        <button
          @click="editor.chain().focus().setTextAlign('left').run()"
          class="px-3 py-1 hover:bg-gray-200 rounded"
          :class="{ 'is-active': editor.isActive({ textAlign: 'left' }) }"
        >
          <i class="fa-solid fa-align-left"></i>
        </button>
        <button
          @click="editor.chain().focus().setTextAlign('center').run()"
          class="px-3 py-1 hover:bg-gray-200 rounded"
          :class="{ 'is-active': editor.isActive({ textAlign: 'center' }) }"
        >
          <i class="fa-solid fa-align-center"></i>
        </button>
        <button
          @click="editor.chain().focus().setTextAlign('right').run()"
          class="px-3 py-1 hover:bg-gray-200 rounded"
          :class="{ 'is-active': editor.isActive({ textAlign: 'right' }) }"
        >
          <i class="fa-solid fa-align-right"></i>
        </button>
        <button
          @click="editor.chain().focus().setTextAlign('justify').run()"
          class="px-3 py-1 hover:bg-gray-200 rounded"
          :class="{ 'is-active': editor.isActive({ textAlign: 'justify' }) }"
        >
          <i class="fa-solid fa-align-justify"></i>
        </button>
      </div>

      <button
        type="button"
        class="px-3 py-1 hover:bg-gray-200 rounded"
        @click="editor.chain().focus().toggleBulletList().run()"
        :class="{ 'bg-gray-200 rounded': editor.isActive('bulletList') }"
      >
        <abbr title="Lista com marcadores"
          ><i class="fa-solid fa-list-ul"></i
        ></abbr>
      </button>
      <button
        type="button"
        class="px-3 py-1 hover:bg-gray-200 rounded"
        @click="editor.chain().focus().toggleOrderedList().run()"
        :class="{ 'bg-gray-200 rounded': editor.isActive('orderedList') }"
      >
        <abbr title="Lista numérica "><i class="fa-solid fa-list-ol"></i></abbr>
      </button>
      <button
        type="button"
        class="px-3 py-1 hover:bg-gray-200 rounded"
        @click="editor.chain().focus().toggleBlockquote().run()"
        :class="{ 'bg-gray-200 rounded': editor.isActive('blockquote') }"
      >
        <abbr title="Bloco de citação"
          ><i class="fa-solid fa-quote-left"></i
        ></abbr>
      </button>
      <button
        type="button"
        class="p-1 disabled:text-gray-400"
        @click="editor.chain().focus().undo().run()"
        :disabled="!editor.can().chain().focus().undo().run()"
      >
        <abbr title="Desfazer"
          ><i class="fa-solid fa-arrow-rotate-left"></i
        ></abbr>
      </button>
      <button
        type="button"
        class="p-1 disabled:text-gray-400"
        @click="editor.chain().focus().redo().run()"
        :disabled="!editor.can().chain().focus().redo().run()"
      >
        <abbr title="Refazer"
          ><i class="fa-solid fa-arrow-rotate-right"></i
        ></abbr>
      </button>
    </section>

    <editor-content :editor="editor" />
  </div>
</template>
<script setup>
import { useEditor, EditorContent } from "@tiptap/vue-3";
import TextAlign from "@tiptap/extension-text-align";
import Link from "@tiptap/extension-link";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Highlight from "@tiptap/extension-highlight";
import Placeholder from "@tiptap/extension-placeholder";
import Image from "@tiptap/extension-image";
import { ref, onMounted, toRef } from "vue";
import axios from "axios";

const props = defineProps({
  modelValue: String,
});

const isActive = ref(false);
const fileInputRef = ref(null);
const fileInput = toRef(fileInputRef, "value");

const emit = defineEmits(["update:modelValue"]);

function toggle() {
  isActive.value = !isActive.value;
}
const selectedTitle = ref("Texto");
function tituloUm() {
  editor.value.chain().focus().toggleHeading({ level: 1 }).run();
  isActive.value = false;
  selectedTitle.value = "Heading 1";
}
function tituloDois() {
  editor.value.chain().focus().toggleHeading({ level: 2 }).run();
  isActive.value = false;
  selectedTitle.value = "Heading 2";
}
function tituloTres() {
  editor.value.chain().focus().toggleHeading({ level: 3 }).run();
  isActive.value = false;
  selectedTitle.value = "Heading 3";
}
function paragrafo() {
  editor.value.chain().focus().setParagraph().run();
  isActive.value = false;
  selectedTitle.value = "Texto";
}

async function openFileInput() {
  if (fileInputRef.value) {
    fileInputRef.value.click();
    await new Promise((resolve) => {
      fileInputRef.value.addEventListener(
        "change",
        () => {
          resolve();
        },
        { once: true }
      );
    });
    const file = fileInputRef.value.files[0];
    return file;
  }
}

onMounted(() => {
  openFileInput();
});

async function addImage() {
  const file = await openFileInput();

  if (file) {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post("/upload-image", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const imageUrl = response.data.url;
      editor.value.chain().focus().setImage({ src: imageUrl }).run();
    } catch (error) {
      console.error("Erro ao enviar imagem:", error);
    }
  } else {
    console.log("Nenhum arquivo selecionado");
  }
}

const editor = useEditor({
  content: props.modelValue,
  onUpdate: ({ editor }) => {
    emit("update:modelValue", editor.getHTML());
  },
  editorProps: {
    attributes: {
      class:
        "text-[18px] p-4 min-h-[24rem] max-h-[100rem] overflow-y-auto outline-none prose w-[700px]",
    },
  },

  extensions: [
    StarterKit,
    Underline,
    Highlight.configure({ multicolor: true }),
    Image,
    Placeholder.configure({
      placeholder: "Digite o conteúdo aqui...",
    }),
    Link.configure({
      openOnClick: false,
    }),
    TextAlign.configure({
      types: ["heading", "paragraph"],
    }),
  ],
});
</script>

<style >
.tiptap p.is-editor-empty:first-child::before {
  content: attr(data-placeholder);
  float: left;
  color: #adb5bd;
  pointer-events: none;
  height: 0;
}
</style>


