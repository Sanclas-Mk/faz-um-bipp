<script setup>
import SiteLayout from "@/Layouts/SiteLayout.vue";
import { ref, computed, onMounted } from "vue";
import { usePage, Link, Head } from "@inertiajs/vue3";
import axios from "axios";

const { articles, categories, tags } = usePage().props;
const filteredArticles = ref(articles);
const isActive = ref(false);
const isActiveTag = ref(false);

const perPage = 6;
const currentPage = ref(1);

const totalPages = computed(() =>
  Math.ceil(filteredArticles.value.length / perPage)
);

const startIndex = computed(() => (currentPage.value - 1) * perPage);
const endIndex = computed(() => currentPage.value * perPage);
const paginatedArticles = computed(() =>
  filteredArticles.value.slice(startIndex.value, endIndex.value)
);

function prevPage() {
  currentPage.value--;
}

function nextPage() {
  currentPage.value++;
}

function filterByCategory(categoryId) {
  filteredArticles.value = articles.filter(
    (article) => article.category_id === categoryId
  );
  isActive.value = false;
}

async function filterByTag(tagId) {
  try {
    const response = await axios.get(`/articles/by-tag/${tagId}`);
    filteredArticles.value = response.data;
  } catch (error) {
    console.error(error);
  }
}

function getCategoryName(categoryId) {
  if (categories && categories.length > 0) {
    const category = categories.find((cat) => cat.id === categoryId);
    return category ? category.name : "Categoria Desconhecida";
  } else {
    return "Categoria Desconhecida";
  }
}
function formatDate(timestamp) {
  const date = new Date(timestamp);

  // Array com os nomes dos meses
  const monthNames = [
    "JANEIRO",
    "FEVEREIRO",
    "MARÇO",
    "ABRIL",
    "MAIO",
    "JUNHO",
    "JULHO",
    "AGOSTO",
    "SETEMBRO",
    "OUTUBRO",
    "NOVEMBRO",
    "DEZEMBRO",
  ];

  // Obter dia e mês
  const day = date.getDate();
  const month = date.getMonth(); // Os meses em JavaScript começam em zero

  // Adicionar um zero à esquerda, se necessário
  const formattedDay = day < 10 ? `0${day}` : day;

  // Obter o nome do mês
  const formattedMonth = monthNames[month];

  // Formatar a data ('DD de NomeDoMês de AAAA')
  const formattedDate = `${formattedDay} de ${formattedMonth} de ${date.getFullYear()}`;
  return formattedDate;
}

function toggleMenu() {
  isActive.value = !isActive.value;
}
function toggleMenuTag() {
  isActiveTag.value = !isActiveTag.value;
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
  <SiteLayout>
    <Head title="Blog"></Head>
    <div class="font-principal space-x-6 lg:space-x-0">
      <div>
        <div>
          <!-- Menu de Categorias -->
          <div class="text-azul items-center">
            <div class="lg:mx-[108px]" v-if="categories.length >= 6">
              <div @click="toggleMenu">
                <div
                  class="flex items-center space-x-4 m-6 lg:mt-6 cursor-pointer w-[180px]"
                >
                  <i class="fa-solid fa-layer-group text-[28px]"></i>
                  <h2 class="text-[20px]">Categorias</h2>
                  <i v-if="!isActive" class="fa-solid fa-angle-down"></i>
                  <i v-if="isActive" class="fa-solid fa-angle-up"></i>
                </div>
              </div>
              <div
                v-if="isActive"
                class="mt-4 mb-6 md:flex flex-wrap md:space-x-4 px-6"
              >
                <ul v-for="category in categories" :key="category.id">
                  <li class="text-[18px] max-md:pb-3 hover:text-azul/80">
                    <button @click="filterByCategory(category.id)">
                      {{ category.name }}
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <div v-else>
              <div class="md:hidden">
                <div
                  @click="toggleMenu"
                  class="flex items-center space-x-4 m-6 lg:mt-6 cursor-pointer"
                >
                  <i class="fa-solid fa-layer-group text-[28px]"></i>
                  <h2 class="text-[20px]">Categorias</h2>
                  <i v-if="!isActive" class="fa-solid fa-angle-down"></i>
                  <i v-if="isActive" class="fa-solid fa-angle-up"></i>
                </div>
                <div
                  v-if="isActive"
                  class="mt-4 mb-6 md:flex flex-wrap md:space-x-4 px-6"
                >
                  <ul v-for="category in categories" :key="category.id">
                    <li class="text-[18px] max-md:pb-3">
                      <button @click="filterByCategory(category.id)">
                        {{ category.name }}
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                class="flex items-center space-x-6 text-white p-4 max-lg:mb-6 bg-azul-min max-md:hidden"
              >
                <h2
                  class="text-[24px] lg:mt-1 border-b-2 border-verde md:border-none md:pl-[20px] lg:pl-[120px]"
                >
                  Categorias |
                </h2>
                <div class="flex flex-wrap space-x-8 mt-1">
                  <ul v-for="category in categories" :key="category.id">
                    <li class="text-[18px] hover:text-gray-300">
                      <button @click="filterByCategory(category.id)">
                        {{ category.name }}
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <!-- Menu de Tags -->
          <div class="text-azul items-center lg:mx-[108px] max-lg:hidden">
            <div v-if="tags.length >= 6">
              <div @click="toggleMenuTag">
                <div
                  class="flex items-center space-x-4 lg:m-6 cursor-pointer w-[120px]"
                >
                  <i class="fa-solid fa-tags text-[30px] mt-1"></i>
                  <h2 class="text-[20px]">Tags</h2>
                  <i v-if="!isActiveTag" class="fa-solid fa-angle-down"></i>
                  <i v-if="isActiveTag" class="fa-solid fa-angle-up"></i>
                </div>
              </div>
              <div
                v-if="isActiveTag"
                class="mt-4 mb-6 flex flex-wrap space-x-4 px-6"
              >
                <ul v-for="tag in tags" :key="tag.id">
                  <li class="text-[18px] hover:text-azul/80">
                    <button @click="filterByTag(tag.id)">
                      {{ tag.name }}
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <div v-else class="max-md:hidden">
              <div
                class="flex items-center space-x-8 p-4 w-full mb-6 text-azul"
              >
                <h2 class="text-[24px] mt-1 ml-3">Tags |</h2>
                <div class="flex space-x-4 mt-1">
                  <ul v-for="tag in tags" :key="tag.id">
                    <li
                      class="bg-verde-min py-1 px-2 rounded-full hover:bg-verde-min/70"
                    >
                      <button @click="filterByTag(tag.id)">
                        {{ tag.name }}
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Posts no geral -->
        <div>
          <div
            class="md:flex flex-wrap md:gap-4 justify-center"
            v-if="paginatedArticles.length > 0"
          >
            <div
              class="bg-white mx-6 md:mx-0 mb-10 md:mb-0 shadow-md hover:shadow-lg transition duration-300 md:w-[360px] xl:w-[390px]"
              v-for="article in paginatedArticles"
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
        </div>
      </div>

      <div class="lg:border-l-2 border-verde lg:px-6 hidden">
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
      </div>
    </div>
    <!-- Controles de paginação -->
    <div class="flex justify-center mt-10">
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
  </SiteLayout>
</template>

