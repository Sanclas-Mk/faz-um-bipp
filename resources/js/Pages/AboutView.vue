<template>
  <Head title="Sobre nós" />
  <SiteLayout>
    <div class="lg:flex lg:items-center">
      <div
        class="font-principal pl-[30px] pt-[35px] md:px-[70px] md:pt-[50px] lg:pl-[40px] lg:mx-[50px] text-justify"
      >
        <h1
          class="text-azul-min text-[17px] pb-1 md:text-[18px] xl:text-[24px]"
        >
          Quem Somos
        </h1>
        <h2 class="text-azul text-[20px] md:text-[24px] xl:text-[26px]">
          Nossa missão é garantir a sua
        </h2>
        <span class="text-verde-min text-[24px] xl:text-[26px]"
          >Tranquilidade</span
        >
        <div
          class="xl:grid grid-cols-2 xl:gap-[100px] xl:pt-[10px] xl:pb-[50px]"
        >
          <div class="text-azul md:text-[17px] lg:text-[20px] xl:text-[22px]">
            <p class="pt-[18px] max-md:pr-10">
              A Bipp é uma empresa que tem, em seu DNA, processos inovadores de
              serviços relacionados à segurança de residências e empresas, por
              meio de tecnologias instaladas em tais ambientes.
            </p>
            <p class="pt-[18px] max-md:pr-10">
              Por meio de uma equipe treinada, cuida desde a instalação de
              equipamentos até o monitoramento 24h, realizado por seguranças.
            </p>
            <p class="pt-[18px] max-md:pr-10 pb-5">
              Seu modelo de negócios inovador em seu segmento, democratiza a
              proteção de patrimônios residenciais e empresariais para o cidadão
              que busca a tranquilidade na sua maneira de viver!
            </p>
          </div>
          <div class="max-md:flex justify-center md:py-[20px]">
            <img
              class="max-sm:mr-7 md:rounded-bl-[30px] md:rounded-tr-[30px] md:h-[350px] max-md:w-[650px] lg:h-[400px] lg:w-[900px] xl:w-[1000px] lg:mt-[10px]"
              src="/Imagens/fachada.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <SessaoServicos class="pb-[20px] xl:py-[20px] lg:bg-azul lg:text-white" />
  </SiteLayout>
</template>

<script>
import SessaoServicos from "@/Components/HomeC/SessaoServicos.vue";
import SiteLayout from "@/Layouts/SiteLayout.vue";
import { Head } from "@inertiajs/vue3";

export default {
  name: "sobre",
  components: {
    SessaoServicos,
    SiteLayout,
    Head,
  },
};
</script>

