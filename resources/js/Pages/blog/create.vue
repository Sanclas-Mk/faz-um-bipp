<template>
  <AppLayout>
    <Head title="Criando Artigo"></Head>
    <div class="flex lg:justify-center">
      <form @submit.prevent="submit" class="flex space-x-10">
        <div>
          <div class="mt-6">
            <label class="text-[18px] py-2 flex" for="title"></label>
            <textarea
              class="w-full py-6 text-[40px] placeholder:text-slate-400 border-none rounded-t-md focus:outline-none focus:ring-transparent resize-none ls-textarea-autoresize overflow-y-hidden leading-none"
              v-model="article.title"
              name="title"
              id="titleId"
              placeholder="Insira o título do post aqui..."
              @input="adjustTextareaHeight"
              rows="1"
              :style="{ height: textareaHeight }"
              ref="textarea"
              maxlength="100"
              required
            ></textarea>
          </div>
          <div>
            <label
              for="image"
              class="bg-violet-200 text-violet-700 p-2 ml-3 rounded"
              >Escolher Imagem Principal</label
            >
            <input
              type="file"
              name="image"
              id="image"
              class="hidden"
              @change="handleImageChange"
            />
          </div>
          <div class="mt-2" v-if="article.imagePreview">
            <img
              class="h-[300px] w-[670px] object-cover ml-3"
              :src="article.imagePreview"
              alt="Preview da imagem"
            />
          </div>
          <EditorText class="pb-10 text-justify" v-model="article.content" />
        </div>
        <div class="mt-28">
          <div class="mb-4">
            <button
              class="bg-blue-400 py-1 px-3 mr-3 text-[18px] text-white rounded-sm hover:bg-blue-500"
              type="submit"
            >
              Publicar
            </button>
          </div>
          <!-- Seletor de categorias -->
          <div>
            <label
              for="category"
              class="text-[18px] py-2 flex text-azul font-semibold"
              >Categoria:</label
            >
            <select
              v-model="article.category_id"
              id="category"
              class="w-[220px] border-blue-400"
              required
            >
              <option
                v-for="category in categories"
                :key="category.id"
                :value="category.id"
                class=""
              >
                {{ category.name }}
              </option>
            </select>
          </div>
          <!-- Seletor de tags -->
          <div>
            <label
              for="tags"
              class="text-[18px] py-2 flex text-azul font-semibold"
              >Tags:</label
            >
            <div v-for="tag in tags" :key="tag.id">
              <input
                type="checkbox"
                :id="'tag_' + tag.id"
                :value="tag.id"
                v-model="article.selectedTags"
              />
              <label class="pl-3" :for="'tag_' + tag.id">{{ tag.name }}</label>
            </div>
          </div>
        </div>
      </form>
    </div>
  </AppLayout>
</template>

<script setup>
import { reactive, ref, nextTick } from "vue";
import { router, Link, usePage, Head } from "@inertiajs/vue3";
import AppLayout from "@/Layouts/AppLayout.vue";
import EditorText from "@/Components/EditorText.vue";

const article = reactive({
  image: null,
  title: null,
  content: "",
  imagePreview: null,
  category_id: null,
  selectedTags: [],
});

const { tags, categories } = usePage().props;

const textareaHeight = ref("auto");
const textarea = ref(null);

const adjustTextareaHeight = () => {
  textareaHeight.value = "auto";
  textareaHeight.value = `${textarea.value.scrollHeight}px`;
};

const handleImageChange = (event) => {
  const file = event.target.files[0];
  article.image = file;
  // Exibir a visualização da imagem
  showImagePreview(file);
};

const showImagePreview = (file) => {
  const reader = new FileReader();
  reader.onload = (e) => {
    // Atualize o estado para armazenar o URL da prévia da imagem
    article.imagePreview = e.target.result;
  };
  reader.readAsDataURL(file);
};

function submit() {
  if (!article.title || !article.content || !article.category_id) {
    return;
  }

  const formData = new FormData();
  formData.append("title", article.title);
  formData.append("content", article.content);
  formData.append("image", article.image);
  formData.append("category_id", article.category_id);
  article.selectedTags.forEach((tag) => {
    formData.append("tags[]", tag);
  });

  router.post("/articles", formData);
}
</script>
