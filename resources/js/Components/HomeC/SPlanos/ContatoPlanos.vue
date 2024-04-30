<template>
  <div
    class="border-t-[18px] border-azul-min mt-10 lg:mt-20 xl:mt-40 pb-10 lg:flex lg:justify-center"
  >
    <div class="max-lg:text-center">
      <h1
        class="text-[32px] lg:text-[50px] font-principal px-2 pt-10 lg:pt-16 xl:pt-20 pb-8"
      >
        Entre em <span class="text-verde-min">contato</span>
        <br />
        por
        <span class="text-verde-min">nosso whatsapp</span>
      </h1>
      <a href="https://wa.me/+5586988072323" target="_blank">
        <botao class="lg:ml-2 py-3 px-4 text-[26px] text-azul" />
      </a>
    </div>
    <img
      class="max-lg:hidden w-[400px] h-[320px] xl:w-[480px] xl:h-[390px] mt-4"
      src="/Imagens/b-com-sombra.png"
      alt="Logo da Bipp com um sombreamento embaixo."
    />
  </div>
</template>
<script>
import botao from "../../botao.vue";

export default {
  name: "ContatoPlanos",
  components: {
    botao,
  },
};
</script>