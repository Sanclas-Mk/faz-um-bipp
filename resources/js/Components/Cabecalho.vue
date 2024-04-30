<template>
  <div class="">
    <div
      class="bg-azul md:h-[100px] max-sm:pt-3 max-sm:px-3 lg:flex xl:h-[100px] xl:pb-5"
    >
      <nav class="md:flex items-center w-full xl:pt-[20px]">
        <div
          class="flex justify-between px-[10px] md:px-[40px] md:py-[25px] lg:px-[20px] py-[16px] items-center"
        >
          <Link href="/">
            <img
              class="h-[65px] md:h-[50px] lg:hidden"
              src="/Imagens/logo-b.png"
              alt="Logo Bipp"
            />
          </Link>
          <Link href="/">
            <img
              class="h-[46px] max-lg:hidden md:ml-4"
              src="/Imagens/logo.png"
              alt="Logo Bipp"
            />
          </Link>

          <div class="flex space-x-4">
            <botao class="text-azul px-3 py-2 md:hidden" />
            <div @click="toggleNav" class="md:hidden">
              <button
                type="button"
                class="text-white"
                :class="{ open: showMenu }"
              >
                <i
                  class="fa-solid fa-bars text-[45px] transition-transform transform"
                ></i>
              </button>
            </div>
          </div>
        </div>

        <div
          class="md:flex md:items-center text-white text-[20px] font-principal"
        >
          <ul
            :class="showMenu ? 'block' : 'hidden'"
            class="max-sm:mt-[20px] touch-none md:text-[16px] h-[900px] md:h-auto md:bg-transparent relative md:pr-[40px] md:flex md:space-x-4 lg:text-[20px] lg:pr-[160px] lg:pl-[30px] xl:pl-[200px] xl:pr-[300px] xl:text-[22px] xl:space-x-6"
          >
            <li
              @click="toggleNav"
              class="max-sm:border-b-[1px] pt-[16px] md:pt-[10px] pl-[19px] pb-[6px]"
            >
              <Link
                class="max-sm:pr-[250px] hover:text-verde-min transition duration-300"
                href="/"
                >Home</Link
              >
            </li>
            <li
              @click="toggleNav"
              class="max-sm:border-b-[1px] pt-[16px] md:pt-[10px] pl-[19px] pb-[6px]"
            >
              <Link
                class="max-sm:pr-[200px] hover:text-verde-min transition duration-300"
                href="/about"
                >Sobre nós</Link
              >
            </li>
            <li
              @click="toggleNav"
              class="max-sm:border-b-[1px] pt-[16px] md:pt-[10px] pl-[19px] pb-[6px]"
            >
              <Link
                class="max-sm:pr-[250px] hover:text-verde-min transition duration-300"
                href="/faq"
                >FAQ</Link
              >
            </li>
            <li
              @click="toggleNav"
              class="max-sm:border-b-[1px] pt-[16px] md:pt-[10px] pl-[19px] pb-[6px]"
            >
              <Link
                class="max-sm:pr-[250px] hover:text-verde-min transition duration-300"
                href="/blog"
                >Blog</Link
              >
            </li>
            <li
              @click="toggleNav"
              class="max-sm:border-b-[1px] pt-[16px] md:pt-[10px] pl-[19px] pb-[6px]"
            >
              <Link
                class="max-sm:pr-[250px] hover:text-verde-min transition duration-300"
                href="/contato"
                >Contato</Link
              >
            </li>
            <li class="w-[140px] mx-[115px] mt-[268px] md:hidden">
              <img src="/Imagens/logo.png" alt="Logo Bipp" />
            </li>
          </ul>
          <a href="https://wa.me/+5586988072323" target="_blank">
            <botao
              class="text-azul max-md:hidden py-[8px] px-[9px] xl:py-[8px] xl:px-[14px] xl:text-[20px] transition duration-300"
            />
          </a>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import botao from "./botao.vue";
import { Link } from "@inertiajs/vue3";

export default {
  name: "navbar",
  components: {
    botao,
    Link,
  },
  setup() {
    let showMenu = ref(false);
    const toggleNav = () => (showMenu.value = !showMenu.value);

    return { showMenu, toggleNav };
  },
};
</script>


