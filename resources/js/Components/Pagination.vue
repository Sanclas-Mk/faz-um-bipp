<template>
  <div class="my-4 flex justify-end mr-[240px]">
    <!-- Botão para a página anterior -->
    <div class="group/item relative">
      <button
        :disabled="!articles.prev_page_url"
        @click="changePage(articles.current_page - 1)"
        class="text-black font-bold py-1 px-3 rounded-full mx-2 bg-gray-300 disabled:bg-transparent"
      >
        <i class="fa-solid fa-chevron-left"></i>
      </button>
      <span
        class="absolute bg-gray-900/70 mt-10 right-[-10px] w-[70px] text-center text-[14px] rounded-sm invisible group-hover/item:visible"
        >Recentes</span
      >
    </div>
    <!-- Botão para a próxima página -->
    <div class="group/item relative">
      <button
        :disabled="!articles.next_page_url"
        @click="changePage(articles.current_page + 1)"
        class="text-black font-bold py-1 px-3 rounded-full mx-2 bg-gray-300 disabled:bg-transparent"
      >
        <i class="fa-solid fa-chevron-right"></i>
      </button>
      <span
        class="absolute bg-gray-900/70 mt-10 right-[-4px] w-[60px] text-center text-[14px] rounded-sm invisible group-hover/item:visible"
        >Antigos</span
      >
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { usePage, router } from "@inertiajs/vue3";

const { articles } = usePage().props;
const currentPage = ref(1);

function changePage(page) {
  router.visit("/articles?page=" + page);
}
</script>
