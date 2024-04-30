<template>
  <SiteLayout>
    <Head :title="article.title"></Head>
    <div>
      <!--Artigo da página -->
      <div class="flex justify-center pt-6">
        <div class="p-4 w-[400px] md:w-[700px] xl:w-[750px]">
          <div class="text-center">
            <span
              class="bg-azul px-2 py-1 text-[13px] lg:text-[14px] text-white rounded-[4px]"
              >{{ getCategoryName(article.category_id) }}</span
            >
            <h2 class="font-semibold text-[30px] text-azul my-1">
              {{ article.title }}
            </h2>
            <div class="mb-4 text-gray-600 text-[13px]">
              <span
                ><i class="fa-solid fa-calendar-days mr-2 text-gray-500"></i
                >{{ formatDate(article.created_at) }}</span
              >
            </div>
          </div>
          <div
            class="h-[350px] bg-cover bg-center mb-4"
            :style="{
              backgroundImage: 'url(' + article.image + ')',
            }"
          ></div>
          <div
            class="prose pb-6 text-justify xl:text-[18px]"
            v-html="article.content"
          ></div>
          <div>
            <div class="flex flex-wrap space-x-1 mt-2">
              <span
                class="rounded-full border py-1 px-2 bg-verde-min"
                v-for="tag in article.tags"
                :key="tag.id"
                >{{ tag.name }}</span
              >
            </div>
          </div>
        </div>

        <!-- Seção das Tags, Categorias... -->

        <div
          class="lg:border-l-2 border-verde lg:px-6 xl:ml-12 h-[300px] mt-32 max-md:hidden"
        >
          <div class="text-azul max-lg:hidden">
            <div class="my-10 w-[250px]">
              <h3 class="text-[24px]">Categorias</h3>
              <ul v-for="category in categories" :key="category.id">
                <Link :href="route('artigos')">
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
                  <Link :href="route('artigos')">
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
    </div>

    <!-- Artigos Relacionados -->
    <div class="m-4" v-if="relatedArticles">
      <h2
        class="text-azul text-[26px] font-semibold mb-6 md:mx-10 lg:mx-[10px] xl:mx-[146px]"
      >
        Artigos relacionados
      </h2>
      <div class="flex flex-wrap justify-center mt-4 gap-4">
        <div
          v-for="relatedArticle in relatedArticles"
          :key="relatedArticle.id"
          class="bg-white w-[360px] md:w-[316px] xl:w-[360px] mb-6 shadow-md hover:shadow-lg transition duration-300"
        >
          <Link
            :href="route('articles.view', { article: relatedArticle.id })"
            class="rounded-md overflow-hidden text-center"
          >
            <img
              :src="'/images/' + relatedArticle.image"
              alt="Imagem do Artigo"
              class="w-full h-[250px] object-cover"
            />
            <div class="mt-3">
              <span
                class="bg-azul px-2 py-1 text-[14px] text-white rounded-[4px]"
                >{{ getCategoryName(relatedArticle.category_id) }}</span
              >
            </div>
            <div class="p-4">
              <h3 class="text-[24px] font-semibold text-azul mb-2">
                {{ relatedArticle.title }}
              </h3>
              <p class="text-[14px] text-[#7D7D7D] my-3">
                {{ formatDate(relatedArticle.created_at) }}
              </p>
              <div
                class="prose text-[#7D7D7D] pb-10"
                v-html="reducePara(relatedArticle.content)"
              ></div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  </SiteLayout>
</template>

<script setup>
import { ref } from "vue";
import { usePage, Link, Head } from "@inertiajs/vue3";
import AppLayout from "@/Layouts/AppLayout.vue";
import SiteLayout from "@/Layouts/SiteLayout.vue";

const { article, categories, tags } = usePage().props;

function getCategoryName(categoryId) {
  if (categories && categories.length > 0) {
    const category = categories.find((cat) => cat.id === categoryId);
    return category ? category.name : "Categoria Desconhecida";
  } else {
    return "Categoria Desconhecida";
  }
}

const currentArticle = ref(article);
const relatedArticles = ref([]);

async function loadRelatedArticles() {
  try {
    // Fazer uma solicitação para o back-end para recuperar artigos relacionados
    const response = await fetch(
      `/articles/${currentArticle.value.category_id}/related`
    );
    if (response.ok) {
      relatedArticles.value = await response.json();
    } else {
      console.error(
        "Erro ao carregar artigos relacionados:",
        response.statusText
      );
    }
  } catch (error) {
    console.error("Erro ao carregar artigos relacionados:", error);
  }
}

// Carregar artigos relacionados quando o componente for montado
loadRelatedArticles();

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
