<template>
  <AppLayout>
    <Head title="Editando Artigo"></Head>
    <div class="flex lg:justify-center">
      <form @submit.prevent="submit" class="flex space-x-10">
        <div>
          <div class="mt-6">
            <label class="text-[18px] py-2 flex" for="title"></label>
            <textarea
              class="w-full py-6 text-[40px] placeholder:text-slate-400 border-none rounded-t-md focus:outline-none focus:ring-transparent resize-none ls-textarea-autoresize overflow-y-hidden leading-none"
              v-model="form.title"
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
          <div class="mt-2" v-if="imagePreview">
            <img
              class="h-[300px] ml-3"
              :src="imagePreview"
              alt="Preview da imagem"
            />
          </div>
          <EditorText class="pb-10 text-justify" v-model="form.content" />
        </div>
        <div class="mt-28">
          <div class="mb-4">
            <button
              class="bg-blue-400 py-1 px-3 mr-3 text-[18px] text-white rounded-sm hover:bg-blue-500"
              type="submit"
            >
              Atualizar
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
              v-model="form.category_id"
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
                v-model="form.selectedTags"
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
import { ref } from "vue";
import { usePage, useForm, Head } from "@inertiajs/vue3";
import AppLayout from "@/Layouts/AppLayout.vue";
import EditorText from "@/Components/EditorText.vue";

const { article, categories, tags } = usePage().props;

const imagePreview = ref(article.image ? `/images/${article.image}` : null);

const form = useForm({
  title: article.title,
  content: article.content,

  category_id: article.category_id,
  selectedTags: article.selectedTags,
});

const handleImageChange = (event) => {
  const file = event.target.files[0];
  form.image = file; // Atualiza a imagem no formulário
  // Exibe a visualização da nova imagem
  showImagePreview(file);
};

const showImagePreview = (file) => {
  const reader = new FileReader();
  reader.onload = (e) => {
    // Atualiza o estado para armazenar o URL da pré-visualização da imagem
    imagePreview.value = e.target.result;
  };
  reader.readAsDataURL(file);
};

const textareaHeight = ref("auto");
const textarea = ref(null);

const adjustTextareaHeight = () => {
  textareaHeight.value = "auto";
  textareaHeight.value = `${textarea.value.scrollHeight}px`;
};

function submit() {
  form.put(`/articles/${article.id}`);
}
</script>
