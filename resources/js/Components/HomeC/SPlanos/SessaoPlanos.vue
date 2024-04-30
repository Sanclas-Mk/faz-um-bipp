<template>
  <section class="bg-azul text-white w-full">
    <div class="md:flex">
      <img
        class="pt-10 w-[550px] h-[470px] xl:w-[700px] xl:h-[550px] max-lg:hidden"
        src="/Imagens/plano-familia.png"
        alt=""
      />
      <img
        class="pt-10 w-[400px] h-[400px] md:w-[390px] md:h-[390px] lg:hidden"
        src="/Imagens/plano-familia-mobile.png"
        alt=""
      />
      <div class="xl:ml-24">
        <h2
          class="mx-[70px] md:mx-[30px] md:mt-10 lg:mt-20 xl:mt-32 mt-2 mb-4 text-[32px] xl:text-[38px] font-principal"
        >
          Plano <span class="text-verde"><br />Residencial</span>
        </h2>

        <ul
          class="flex space-x-2 md:space-x-3 px-16 text-[20px] lg:text-[24px] md:px-4 lg:ml-4"
          v-for="(item, index) in listaPFamilia"
          :key="index"
        >
          <i
            class="fa-solid fa-check py-4 text-[24px] lg:text-[30px]"
            style="color: #b9dfbc"
          ></i>
          <li class="py-2">{{ item }}</li>
        </ul>
      </div>
    </div>
    <div class="relative">
      <img
        class="pt-4 w-[400px] h-[390px] md:hidden absolute right-0"
        src="/Imagens/plano-empresarial-mobile.png"
        alt=""
      />
      <div
        class="md:ml-10 lg:ml-28 xl:ml-52 md:mr-[400px] lg:mr-[450px] max-sm:pt-[350px]"
      >
        <h2
          class="mx-[70px] md:mx-[30px] md:mt-10 xl:mt-20 mt-10 mb-4 text-[32px] xl:text-[38px] font-principal"
        >
          Plano <span class="text-verde"><br />Empresarial</span>
        </h2>
        <ul
          class="flex space-x-2 md:space-x-3 px-16 md:px-4 text-[20px] lg:text-[24px] lg:ml-4"
          v-for="(item, index) in listaPEmpresa"
          :key="index"
        >
          <i
            class="fa-solid fa-check py-4 text-[24px] lg:text-[30px]"
            style="color: #b9dfbc"
          ></i>
          <li class="py-2">{{ item }}</li>
        </ul>
      </div>
      <img
        class="pt-4 w-[380px] h-[370px] lg:w-[490px] lg:h-[470px] xl:w-[600px] xl:h-[550px] max-sm:hidden absolute right-0 top-0 lg:translate-y-[-50px] xl:translate-y-[-80px]"
        src="/Imagens/plano-empresarial-mobile.png"
        alt=""
      />
    </div>
    <ContatoPlanos />
  </section>
</template>
<script>
import Titulos from "@/Components/Titulos.vue";
import ContatoPlanos from "./ContatoPlanos.vue";
export default {
  name: "SessaoPlanos",
  components: {
    Titulos,
    ContatoPlanos,
  },
  setup() {
    const listaPFamilia = [
      "Tranquilidade para a sua Família",
      "Equipamentos em Comodato",
      "Mensalidades acessíveis",
      "Monitoramento 24h",
    ];

    const listaPEmpresa = [
      "Tranquilidade para o seu Patrimônio",
      "Equipamentos em Comodato",
      "Mensalidades acessíveis",
      "Monitoramento 24h",
    ];
    return { listaPFamilia, listaPEmpresa };
  },
};
</script>