<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import { usePage, Link } from "@inertiajs/vue3";

const { articles, tags, categories } = usePage().props;

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

<template>
  <AppLayout title="Dashboard" class="bg-gray-100 h-screen">
    <div class="mt-6 mx-auto">
      <div class="gap-6 flex flex-wrap justify-center">
        <!-- Seção de Artigos -->

        <div class="">
          <div
            class="flex justify-between pb-6 items-center w-[350px] md:w-[700px] rounded-t-lg p-8 pt-7 shadow-[0px_4px_24px_0px_rgba(0,0,0,0.08)] md:row-span-3 lg:pb-10 bg-gray-100"
          >
            <h2
              class="max-md:text-[18px] text-[20px] font-semibold text-black/80"
            >
              Últimas Publicações
            </h2>
            <div class="flex space-x-1">
              <Link
                :href="route('articles')"
                class="bg-zinc-800 hover:bg-zinc-800/80 transition duration-300 py-2 px-4 max-md:px3 rounded-full flex items-center space-x-2 text-white md:text-black md:bg-transparent md:hover:bg-transparent md:hover:text-black/70"
                ><i class="fa-solid fa-pager"></i>
                <p class="max-md:hidden">Gerenciar Artigos</p></Link
              >
              <Link
                :href="route('articles.create')"
                class="bg-blue-500 hover:bg-blue-500/80 transition duration-300 py-2 px-4 max-md:px3 rounded-full flex items-center space-x-2 text-white"
                ><i class="fa-solid fa-plus"></i>
                <p class="max-md:hidden">Criar publicação</p></Link
              >
            </div>
          </div>

          <div v-if="articles.length > 0">
            <ul
              class="pb-6 items-center w-[350px] md:w-[700px] rounded-b-lg p-8 pt-2 shadow-[0px_20px_24px_0px_rgba(0,0,0,0.08)] md:row-span-3 lg:pb-10 bg-gray-100"
            >
              <li v-for="article in articles.slice(0, 4)" :key="article.id">
                <Link
                  :href="route('articles.show', { article: article.id })"
                  class="mb-3 pr-4 space-x-4 items-center rounded-lg transition duration-300 hover:shadow-[0px_3px_3px_0px_rgba(0,0,0,0.08)] cursor-pointer grid-cols-[100px,1fr] grid text-black hover:text-black/70 border bg-gray-50"
                >
                  <div
                    class="h-[100px] bg-cover bg-center"
                    :style="{
                      backgroundImage: 'url(' + article.image + ')',
                    }"
                  ></div>
                  <div>
                    <div class="flex justify-between pb-1">
                      <h3 class="font-semibold mb-1 text-[16px]">
                        {{ article.title }}
                      </h3>
                      <div class="text-gray-400 text-[14px]">
                        {{ formatDate(article.created_at) }}
                      </div>
                    </div>
                    <p
                      class="text-gray-600 text-[16px] max-md:hidden"
                      v-html="reducePara(article.content)"
                    ></p>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          <div
            class="text-center pt-10 pb-4 transition duration-300 text-black/70 pb-6 items-center rounded-b-lg p-8 pt-7 shadow-[0px_4px_10px_0px_rgba(0,0,0,0.08)] md:row-span-3 lg:pb-10 bg-gray-100"
            v-else
          >
            <i class="fa-solid fa-newspaper text-[50px] pb-6"></i>
            <p>Nenhum artigo encontrado.</p>
          </div>
        </div>
        <div>
          <!-- Seção de Categorias -->
          <div
            class="w-[350px] md:w-[700px] xl:w-[450px] shadow-[0px_14px_44px_0px_rgba(0,0,0,0.08)] hover:shadow-[0px_4px_14px_0px_rgba(0,0,0,0.08)] lg:pb-0 dark:bg-gray-100 mb-3 rounded transition duration-300 text-black/70 hover:text-black"
          >
            <Link :href="route('categories')">
              <div class="flex justify-between pb-6 p-4">
                <h2 class="text-[20px] font-semibold pt-2 pl-2">Categorias</h2>
              </div>
              <div v-if="categories.length > 0">
                <div class="flex flex-wrap px-4">
                  <div
                    class="mb-3 p-1"
                    v-for="category in categories.slice(0, 8)"
                    :key="category.id"
                  >
                    <div>
                      <span
                        class="text-[16px] rounded-full py-1 px-2 text-gray-800 bg-lime-300"
                      >
                        {{ category.name }}
                      </span>
                    </div>
                  </div>
                </div>
                <div class="flex gap-4 items-center justify-end px-5 pt-2 pb-5">
                  <p>Gerenciar Categorias</p>
                  <i class="fa-solid fa-arrow-right-long text-lg"></i>
                </div>
              </div>
              <div class="text-center pt-2 pb-4" v-else>
                <i class="fa-solid fa-list text-[50px] pb-6"></i>
                <p>Nenhuma Categoria encontrada.</p>

                <div
                  class="flex gap-4 items-center justify-end px-5 pt-6 pb-2 text-blue-700 hover:text-blue-700/70"
                >
                  <p>Criar Categorias</p>
                  <i class="fa-solid fa-arrow-right-long text-lg"></i>
                </div>
              </div>
            </Link>
          </div>

          <!-- Seção de Tags -->
          <div
            class="w-[350px] md:w-[700px] xl:w-[450px] shadow-[0px_14px_44px_0px_rgba(0,0,0,0.08)] hover:shadow-[0px_4px_14px_0px_rgba(0,0,0,0.08)] lg:pb-0 dark:bg-gray-100 mb-3 rounded transition duration-300 text-black/70 hover:text-black"
          >
            <Link href="tags">
              <div class="flex justify-between pb-6 p-4">
                <h2 class="text-[20px] font-semibold pt-2 pl-2">Tags</h2>
              </div>
              <div v-if="tags.length > 0">
                <div class="flex flex-wrap px-4">
                  <div
                    class="mb-3 p-1"
                    v-for="tag in tags.slice(0, 8)"
                    :key="tag.id"
                  >
                    <div>
                      <span
                        class="text-[16px] rounded-full py-1 px-2 text-gray-800 bg-lime-300"
                      >
                        {{ tag.name }}
                      </span>
                    </div>
                  </div>
                </div>

                <div class="flex gap-4 items-center justify-end px-5 pt-2 pb-5">
                  <p>Gerenciar tags</p>
                  <i class="fa-solid fa-arrow-right-long text-lg"></i>
                </div>
              </div>
              <div class="text-center pt-2 pb-4" v-else>
                <i class="fa-solid fa-tags text-[50px] pb-6"></i>
                <p>Nenhuma Tag encontrada.</p>

                <div
                  class="flex gap-4 items-center justify-end px-5 pt-6 pb-2 text-blue-700 hover:text-blue-700/70"
                >
                  <p>Criar Tags</p>
                  <i class="fa-solid fa-arrow-right-long text-lg"></i>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </AppLayout>
</template>
