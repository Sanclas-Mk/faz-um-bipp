<template>
  <AppLayout title="Artigos" class="text-white">
    <template #header>
      <h2
        class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"
      >
        Artigos
      </h2>
    </template>

    <div class="pb-10">
      <Pagination />
      <div
        class="md:mx-[100px] xl:mx-[200px] rounded-lg p-8 pt-7 shadow-[0px_4px_24px_0px_rgba(0,0,0,0.08)]"
      >
        <div class="px-4 pb-4">
          <div class="flex justify-between">
            <div class="flex space-x-9 items-center">
              <div class="group">
                <input
                  class="cursor-pointer mb-1 group-hover:bg-blue-400"
                  id="selectArticle"
                  type="checkbox"
                  v-model="selectAll"
                  @change="toggleSelectAll"
                />
                <label
                  class="group-hover:text-blue-500 cursor-pointer ml-3 text-gray-500"
                  for="selectArticle"
                  >Selecionar Tudo</label
                >
              </div>
              <div class="group">
                <button
                  class="text-gray-500 group-hover:text-red-500"
                  @click="deleteSelectedItems"
                >
                  <i class="fa-solid fa-trash"></i>
                  Excluir
                </button>
              </div>
            </div>
            <div>
              <Link
                :href="route('articles.create')"
                class="bg-blue-500 hover:bg-blue-500/80 transition duration-300 py-2 px-4 rounded-sm flex items-center space-x-2 text-white"
                ><i class="fa-solid fa-plus"></i>
                <p>Criar publicação</p></Link
              >
            </div>
          </div>
        </div>
        <div class="overflow-y-auto max-h-[500px]">
          <ul>
            <li
              class="space-x-4 text-black p-4 py-7 border-t"
              v-for="article in articles.data"
              :key="article.id"
            >
              <div>
                <div class="pb-1 flex justify-between">
                  <Link
                    :href="route('articles.show', { article: article.id })"
                    class="hover:text-gray-600"
                  >
                    <h3 class="font-semibold mb-1 text-[16px] mx-12">
                      {{ article.title }}
                    </h3>
                  </Link>
                  <div class="text-gray-400 text-[14px]">
                    {{ formatDate(article.created_at) }}
                  </div>
                </div>

                <div class="flex justify-between">
                  <div class="flex space-x-8">
                    <input
                      type="checkbox"
                      v-model="selectedArticles"
                      :value="article.id"
                    />
                    <p
                      class="text-gray-600 text-[16px] line-clamp-2 w-[250px] md:w-[350px] lg:w-[500px] xl:w-[550px]"
                      v-html="reducePara(article.content)"
                    ></p>
                  </div>

                  <div class="mt-2 space-x-3">
                    <Link
                      :href="route('articles.show', { article: article.id })"
                      class="mt-2 text-gray-500 hover:text-blue-500 px-2 py-1 xl:right-[340px] lg:right-[240px] md:right-[200px] right-[90px]"
                    >
                      <i class="fa-solid fa-eye"></i>
                      <span class="max-lg:hidden lg:pl-1">Visualizar</span>
                    </Link>
                    <Link
                      :href="route('articles.edit', { article: article.id })"
                      class="mt-2 text-white bg-slate-500 max-lg:hover:text-blue-500 lg:hover:bg-slate-500/70 px-2 py-1 xl:right-[250px] md:right-[150px] right-[50px] max-lg:bg-transparent max-lg:text-gray-500"
                    >
                      <i class="fa-solid fa-pen-to-square"></i>
                      <span class="max-lg:hidden lg:pl-1">Editar</span>
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </AppLayout>
</template>
<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import Pagination from "@/Components/Pagination.vue";
import { Link, usePage, router } from "@inertiajs/vue3";
import { ref } from "vue";
import axios from "axios";

const { articles } = usePage().props;

const selectedArticles = ref([]);
const selectAll = ref(false);

function formatDate(timestamp) {
  const date = new Date(timestamp);

  // Obter dia e mês
  const day = date.getDate();
  const month = date.getMonth() + 1; // Os meses em JavaScript começam em zero

  // Adicionar um zero à esquerda, se necessário
  const formattedDay = day < 10 ? `0${day}` : day;
  const formattedMonth = month < 10 ? `0${month}` : month;

  // Formatar a data ('DD/MM/AAAA')
  const formattedDate = `${formattedDay}/${formattedMonth}/${date.getFullYear()}`;

  return formattedDate;
}

async function deleteSelectedItems() {
  if (!selectedArticles.value || selectedArticles.value.length === 0) {
    return;
  }
  const confirmed = await new Promise((resolve) => {
    alertify.confirm(
      "Excluir artigos",
      "Deseja excluir os artigos selecionados?",
      function (e) {
        resolve(e);
        alertify.success("Artigos excluídos!");
      },
      function () {
        alertify.error("Exclusão cancelada.");
      }
    );
  });

  if (confirmed) {
    try {
      await axios.post(`/articles/delete-multiple`, {
        ids: selectedArticles.value,
      });
      router.visit("articles");
    } catch (error) {
      if (!error.response || error.response.status !== 404) {
        console.error("Erro ao excluir os artigos:", error);
        alertify.error(
          "Erro ao excluir os artigos. Por favor, tente novamente."
        );
      }
    }
  } else {
    console.log("Exclusão cancelada");
  }
}

function toggleSelectAll() {
  if (selectAll.value) {
    selectedArticles.value = articles.data.map((article) => article.id);
  } else {
    selectedArticles.value = [];
  }
}

function stripHtmlTags(html) {
  let tmp = document.createElement("div");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
}

function reducePara(text) {
  let plainText = stripHtmlTags(text);
  // Limita o texto ao número desejado de caracteres
  if (plainText.length > 95) {
    return plainText.slice(0, 95) + "...";
  } else {
    return plainText;
  }
}
</script>