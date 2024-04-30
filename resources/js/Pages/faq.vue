<template>
  <Head title="FAQ" />
  <SiteLayout>
    <div>
      <div
        class="pt-[40px] pl-[30px] text-[17px] md:pl-[125px] lg:pl-[199px] xl:pl-[300px] xl:pt-[50px]"
      >
        <h1 class="text-azul font-semibold lg:text-[21px] xl:text-[25px]">
          <strong class="text-verde-min">FAQ</strong> <br />
          Perguntas e Respostas <span class="text-verde-min">ÚTEIS</span><br />
          Perguntas recebidas <span class="text-verde-min">frequentimente</span>
        </h1>
      </div>
      <div
        class="faq-accordion px-7 pt-[40px] pb-[30px] md:px-[125px] lg:px-[200px] xl:px-[300px] xl:py-[100px] xl:pt-[50px] font-principal"
      >
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="faq-item"
          @click="toggleAccordion(index)"
        >
          <div
            class="flex justify-between items-center border-[1px] border-azul rounded-[12px] shadow-sm shadow-azul px-3 py-4 cursor-pointer md:pl-[25px]"
          >
            <div
              class="text-[14px] lg:text-[20px] xl:text-[24px] font-semibold text-azul"
            >
              {{ faq.question }}
            </div>
            <i
              class="fa-solid fa-arrow-down w-5 h-5 transition-transform transform text-[14px] lg:text-[17px] text-center"
              :class="{ 'rotate-90': activeIndex === index }"
            ></i>
          </div>
          <div
            v-show="activeIndex === index"
            class="faq-answer px-4 pt-2 lg:text-[19px] xl:text-[24px] text-[14px]"
          >
            <p class="text-gray-600">
              {{ faq.answer }}
            </p>
          </div>
          <br />
        </div>
      </div>
    </div>
  </SiteLayout>
</template>

<script>
import SiteLayout from "@/Layouts/SiteLayout.vue";
import { Head } from "@inertiajs/vue3";
export default {
  components: {
    SiteLayout,
    Head,
  },
  data() {
    return {
      activeIndex: null,
      faqs: [
        {
          question: "Como faço para adquirir meu projeto de segurança?",
          answer:
            "Entre e contato com a gente que iremos te ajudar a criar o melhor de segurança para você, seja para sua casa ou para seu negócio.",
        },
        {
          question: "Como fazer se eu já tiver um sistema de segurança?",
          answer:
            "Caso você já tenha câmeras, sensores, cercas elétricas, etc, nós realizamos a integração com nosso sistema de Monitoramento 24h.",
        },
        {
          question: "Como funciona a contratação?",
          answer:
            "Nossa equipe especializada vai até sua residência, ou empresa, faz a análise do local, com a finalidade de criar o projeto. Com o projeto em mãos faremos seu orçamento.",
        },
        {
          question: "O que é preciso para aderir ao projeto?",
          answer:
            "Para ter seu projeto de segurança instalado, você paga uma adesão e, após isso, sua mensalidade.",
        },
        {
          question: "Por que cobramos a taxa de adesão?",
          answer:
            "Com o Bipp você não paga pelos equipamentos. A Adesão garante que você receba seu equipamento em comodato e caso aconteça qualquer coisa com esse equipamento, toda responsabilidade de manutenção, troca ou conserto é da nossa responsabilidade.",
        },
        {
          question: "Quem pode ter um projeto de segurança Bipp?",
          answer:
            "Pessoas Físicas ou Pessoas Jurídicas, ou seja, residências e empresas!",
        },
      ],
    };
  },
  methods: {
    toggleAccordion(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    },
  },
};
</script>

<style>
.rotate-90 {
  transform: rotate(90deg);
}
</style>
