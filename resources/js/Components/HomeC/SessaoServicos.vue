<template>
  <div class="text-azul mb-8 w-full text-center">
    <Titulos
      class="xl:text-[40px] lg:pt-[50px]"
      titulo="Nossos"
      tituloV="Serviços"
    />
    <div
      class="grid grid-cols-2 text-[18px] lg:text-[20px] xl:text-[24px] font-secudanria md:grid-cols-none md:flex justify-center lg:space-x-10 lg:my-[26px] xl:mb-20"
    >
      <div class="md:flex lg:space-x-10">
        <div>
          <i class="fa-solid fa-clock text-[50px] xl:text-[70px] mb-4"></i>
          <p class="mx-5 py-2 border-t-[3px] border-azul">
            Monitoramento <br />24 horas
          </p>
        </div>
        <div class="mt-6 md:mt-0">
          <i
            class="fa-solid fa-screwdriver-wrench text-[50px] xl:text-[70px] mb-4"
          ></i>
          <p class="mx-5 py-2 border-t-[3px] border-azul">
            Instalação <br />de Sensores
          </p>
        </div>
      </div>
      <div class="md:flex lg:space-x-10">
        <div>
          <i class="fa-solid fa-video text-[50px] xl:text-[70px] mb-4"></i>
          <p class="mx-5 py-2 border-t-[3px] border-azul">
            Instalação <br />de Câmeras
          </p>
        </div>

        <div class="mt-6 md:mt-0">
          <i class="fa-solid fa-landmark text-[50px] xl:text-[70px] mb-4"></i>
          <p class="mx-5 py-2 border-t-[3px] border-azul">
            Projetos de Segurança <br />Patrimonial
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Titulos from "../Titulos.vue";
export default {
  name: "SessaoServicos",
  components: {
    Titulos,
  },
};
</script>
