<template>
  <div
    class="text-azul font-principal mt-6 mx-4 lg:mx-10 xl:mx-20 border-t-2 border-azul"
  >
    <!-- Newsletter e Siga-Nos -->
    <div class="flex">
      <Newsletter />
      <SigaNos class="mt-[42px] xl:ml-96 max-sm:hidden" />
    </div>
    <!-- Parte dos links -->
    <div class="flex space-x-10 mx-[18px] md:mx-16 sm:mt-14 lg:mt-10">
      <div class="md:flex md:space-x-10 lg:space-x-20">
        <div class="my-4">
          <h3 class="my-2 text-[18px]">Atendimento</h3>
          <ul class="text-[14px]">
            <li class="pb-2">
              <Link href="contato">Central de atendimento</Link>
            </li>
            <li class="pb-2">
              <a href=""><strong>+55 (86) 98807-2323</strong></a>
            </li>
            <li class="pb-7">
              <a href="mailto:contato@bipp.com.br">contato@bipp.com.br</a>
            </li>
          </ul>
        </div>
        <div class="my-4">
          <h3 class="text-[18px] my-2">Links Rápidos</h3>
          <ul class="text-[14px]">
            <li class="pb-2">
              <Link href="politica-privacidade">Políticas de privacidade</Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div class="mt-4 md:mt-6 mb-2 lg:ml-16">
          <h3 class="text-[18px] mb-2">Empresa</h3>
          <ul class="text-[14px]">
            <li class="pb-2">
              <Link href="about">Sobre Nós</Link>
            </li>
            <li class="pb-2">
              <Link href="contato">Seja um Produtor Bipp</Link>
            </li>
            <li class="pb-2"><Link href="/faq">FAQ</Link></li>
            <li><Link href="contato">Contato</Link></li>
          </ul>
        </div>
        <SigaNos class="md:hidden" />
      </div>
    </div>

    <div
      class="text-center pt-6 border-t-2 border-azul md:mt-4 text-[14px] lg:text-left lg:flex lg:justify-between"
    >
      <p class="lg:mx-10">
        © 2024 <strong>Bipp.</strong> Todos os Direitos Reservados. CNPJ:
        54.293.679/0001-83
      </p>
      <div class="flex justify-center lg:justify-end relative">
        <p class="pt-[30px] lg:pt-0 lg:pr-[90px]">Desenvolvido por</p>
        <a href="https://www.instagram.com/sanclasmk/" target="_blank">
          <img
            class="h-[80px] w-[80px] lg:absolute right-4 top-[-30px]"
            src="/logoMKSanclasComplete.png"
            alt="Logo da Mk Sanclas, empresa de desenvolvimento de sites."
          />
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import SigaNos from "./SigaNos.vue";
import Newsletter from "./Newsletter.vue";
import { Link } from "@inertiajs/vue3";
export default {
  components: {
    SigaNos,
    Newsletter,
    Link,
  },
};
</script>