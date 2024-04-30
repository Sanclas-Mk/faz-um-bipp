<template>
  <Head title="Blog" />
  <SiteLayout>
    <div
      class="font-principal bg-azul md:h-[250px] md:mb-[200px] xl:mb-[250px]"
    >
      <div
        class="h-[450px] mb-10 md:mx-10 md:h-[400px] xl:h-[450px] xl:mx-[120px]"
        v-if="mainArticle"
      >
        <div
          class="h-full w-full bg-azul bg-cover bg-center"
          :style="{ backgroundImage: 'url(/images/' + mainArticle.image + ')' }"
        >
          <div
            class="text-white text-center px-10 pt-16 xl:pt-20 h-full backdrop-blur-sm bg-azul/50"
          >
            <div>
              <span
                class="bg-verde-min text-azul text-[14px] px-2 py-[3px] rounded-md"
                >{{ getCategoryName(mainArticle.category_id) }}</span
              >
            </div>
            <h2 class="text-[24px] mt-2 mx-auto md:w-[400px]">
              {{ mainArticle.title }}
            </h2>
            <div class="text-[14px] my-3">
              {{ formatDate(mainArticle.created_at) }}
            </div>
            <p
              class="prose text-white pb-10 mx-auto md:w-[400px]"
              v-html="reducePara(mainArticle.content)"
            ></p>
            <Link
              :href="route('articles.view', { article: mainArticle.id })"
              class="bg-azul hover:bg-azul-min px-3 py-3 rounded-md text-[20px]"
              >Continuar Lendo</Link
            >
          </div>
        </div>
      </div>
      <div v-else class="text-white text-center pt-14">
        <i class="fa-solid fa-cubes-stacked text-[100px]"></i>
        <p class="text-[22px] pt-6">Em breve...</p>
      </div>
    </div>

    <div v-if="paginatedArticles.length > 1">
      <div class="font-principal lg:flex justify-center space-x-6 lg:space-x-0">
        <div>
          <div class="text-azul items-center mb-4 mx-6 md:mx-12 lg:mx-10">
            <div class="lg:hidden">
              <div
                @click="toggleMenu"
                class="flex items-center space-x-4 w-[160px]"
              >
                <i class="fa-solid fa-bars text-[36px] md:text-[38px]"></i>
                <h2 class="text-[24px]">Categorias</h2>
              </div>
              <div v-if="isActive" class="mt-4 mb-6">
                <ul v-for="category in categories" :key="category.id">
                  <Link href="">
                    <li class="my-1 bg-blue-200 py-1 pl-2">
                      {{ category.name }}
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
            <div class="md:flex justify-between items-center">
              <h2
                class="text-[24px] mt-8 lg:mt-1 border-b-2 border-verde md:border-none pb-2"
              >
                Últimas Publicações
              </h2>
              <!-- Controles de paginação -->
              <div class="flex justify-center max-md:hidden md:mt-6 lg:mt-0">
                <button
                  class="mx-2 px-4 py-2"
                  :disabled="currentPage === 1"
                  @click="prevPage"
                >
                  <i class="fa-solid fa-angle-left"></i>
                </button>
                <span class="mx-2 py-2 flex items-center">
                  <div class="text-blue-600 pr-2">{{ currentPage }}</div>
                  / {{ totalPages }}
                </span>
                <button
                  class="mx-2 px-4 py-2"
                  :disabled="currentPage === totalPages"
                  @click="nextPage"
                >
                  <i class="fa-solid fa-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
          <!-- Posts no geral -->
          <div
            class="md:grid grid-cols-2 md:gap-4 md:mx-12 lg:mx-10"
            v-if="paginatedArticles.length > 0"
          >
            <div
              class="bg-white mx-6 md:mx-0 mb-10 md:mb-0 shadow-md hover:shadow-lg transition duration-300 xl:w-[390px]"
              v-for="article in paginatedArticles.slice(1, 5)"
              :key="article.id"
            >
              <Link
                class="text-center"
                :href="route('articles.view', { article: article.id })"
              >
                <div
                  class="h-[250px] bg-cover bg-center mb-4"
                  :style="{
                    backgroundImage: 'url(/images/' + article.image + ')',
                  }"
                ></div>
                <div>
                  <span
                    class="bg-azul px-2 py-1 text-[12px] lg:text-[14px] text-white rounded-md"
                    >{{ getCategoryName(article.category_id) }}</span
                  >
                </div>
                <h3 class="text-[20px] lg:text-[24px] text-azul mx-4 mt-2">
                  {{ article.title }}
                </h3>
                <div class="text-[12px] lg:text-[14px] text-[#7D7D7D] my-3">
                  {{ formatDate(article.created_at) }}
                </div>
                <p
                  class="prose text-[#7D7D7D] pb-10 px-4 text-[14px] lg:text-[16px] lg:px-8"
                  v-html="reducePara(article.content)"
                ></p>
              </Link>
            </div>
          </div>
          <!-- Controles de paginação -->
          <div class="flex justify-center md:hidden">
            <button
              class="mx-2 px-4 py-2"
              :disabled="currentPage === 1"
              @click="prevPage"
            >
              <i class="fa-solid fa-angle-left"></i>
            </button>
            <span class="mx-2 py-2 flex items-center">
              <div class="text-blue-600 pr-2">{{ currentPage }}</div>
              / {{ totalPages }}
            </span>
            <button
              class="mx-2 px-4 py-2"
              :disabled="currentPage === totalPages"
              @click="nextPage"
            >
              <i class="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
        <div class="lg:border-l-2 border-verde lg:px-6">
          <!-- Seção das Tags, Categorias... -->
          <div class="text-azul max-lg:hidden">
            <div class="my-10 w-[250px]">
              <h3 class="text-[24px]">Categorias</h3>
              <ul v-for="category in categories" :key="category.id">
                <Link :href="route('artigos', { category: category.id })">
                  <li class="text-azul-min mt-2 mx-1">
                    {{ category.name }}
                  </li>
                </Link>
              </ul>
            </div>
            <div class="w-[250px]">
              <h3 class="text-[24px]">Tags</h3>
              <div class="flex flex-wrap">
                <ul v-for="tag in tags" :key="tag.id">
                  <Link :href="route('artigos', { tag: tag.id })">
                    <li
                      class="text-azul-min bg-white border border-azul rounded-full px-2 mt-2 mr-1"
                    >
                      {{ tag.name }}
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
          <!-- Postagem mais vista -->
          <div class="mt-10 max-xl:hidden">
            <div v-if="mostViewedArticle">
              <h3 class="text-azul text-[24px] mb-6">
                Publicação Mais Popular
              </h3>
              <div
                class="bg-white w-[360px] mb-6 shadow-md hover:shadow-lg transition duration-300"
              >
                <Link
                  class="text-center"
                  :href="
                    route('articles.view', { article: mostViewedArticle.id })
                  "
                >
                  <div
                    class="h-[250px] bg-cover bg-center mb-4"
                    :style="{
                      backgroundImage:
                        'url(/images/' + mostViewedArticle.image + ')',
                    }"
                  ></div>
                  <div>
                    <span
                      class="bg-azul px-2 py-1 text-[14px] text-white rounded-md"
                      >{{
                        getCategoryName(mostViewedArticle.category_id)
                      }}</span
                    >
                  </div>
                  <h3 class="text-[24px] text-azul mx-12 mt-2">
                    {{ mostViewedArticle.title }}
                  </h3>
                  <div class="text-[14px] text-[#7D7D7D] my-3">
                    {{ formatDate(mostViewedArticle.created_at) }}
                  </div>
                  <div
                    class="prose text-[#7D7D7D] pb-10 px-10"
                    v-html="reducePara(mostViewedArticle.content)"
                  ></div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SiteLayout>
</template>

<script setup>
import SiteLayout from "@/Layouts/SiteLayout.vue";
import { usePage, Link, router, Head } from "@inertiajs/vue3";
import { ref, computed } from "vue";

const { mostViewedArticle, articles, tags, categories } = usePage().props;
const mainArticle = articles[0];

const isActive = ref(false);

const perPage = 5;
const currentPage = ref(1);

const totalPages = computed(() => Math.ceil(articles.length / perPage));

const startIndex = computed(() => (currentPage.value - 1) * perPage);
const endIndex = computed(() => currentPage.value * perPage);
const paginatedArticles = computed(() =>
  articles.slice(startIndex.value, endIndex.value)
);

function prevPage() {
  currentPage.value--;
}

function nextPage() {
  currentPage.value++;
}

function toggleMenu() {
  isActive.value = !isActive.value;
}

function getCategoryName(categoryId) {
  const category = categories.find((cat) => cat.id === categoryId);
  return category ? category.name : "Categoria Desconhecida";
}

function stripHtmlTags(html) {
  let tmp = document.createElement("div");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
}

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
<style scoped>
input[type="search"]::-webkit-search-cancel-button {
  -webkit-appearance: none;
}
</style>