<template>
  <Head title="Contato" />
  <SiteLayout>
    <div
      class="bg-azul font-principal xl:grid xl:grid-cols-2 xl:px-[200px] xl:gap-[100px] items-center"
    >
      <form
        @submit.prevent="sendContact"
        class="pb-[60px] px-[50px] md:px-[210px] lg:px-[350px] xl:px-[10px]"
      >
        <div class="mb-4">
          <h1
            class="pb-[40px] pt-[40px] lg:pt-[50px] text-white text-center text-[16px] lg:text-[20px] xl:text-[25px]"
          >
            <span class="text-verde font-semibold">Mande-nos</span> uma
            <span class="text-verde">mensagem</span> pelo <br />
            <span class="text-verde">E-MAIL</span> preenchendo o
            <span class="text-verde">formulário</span>
          </h1>
          <label for="name" class="block text-verde-min mb-2">NOME:</label>
          <input
            required
            type="text"
            v-model="form.name"
            id="name"
            name="name"
            placeholder="Digite seu nome"
            class="shadow appearance-none border rounded w-full py-2 xl:py-[13px] px-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div class="mb-4">
          <label for="phone" class="block text-verde-min mb-2">TELEFONE:</label>
          <input
            required
            type="tel"
            v-model="form.phone"
            id="phone"
            name="phone"
            placeholder="Digite seu telefone"
            class="shadow appearance-none border rounded w-full py-2 xl:py-[13px] px-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div class="mb-4">
          <label for="email" class="block text-verde-min mb-2">EMAIL:</label>
          <input
            required
            type="email"
            v-model="form.email"
            id="email"
            name="email"
            placeholder="Digite seu E-mail"
            class="shadow appearance-none border rounded w-full py-2 xl:py-[13px] px-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div class="mb-4">
          <label for="message" class="block text-white mb-2"
            >ESCREVA A SUA <span class="text-verde-min">MENSAGEM:</span></label
          >
          <textarea
            required
            v-model="form.message"
            id="message"
            name="message"
            rows="6"
            placeholder="Mensagem..."
            class="shadow appearance-none border rounded w-full py-2 pt-3 px-3 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>
        <button
          class="bg-verde-min hover:bg-verde-min/90 rounded-[6px] w-full"
          type="submit"
        >
          <p class="p-3 xl:text-[20px] text-azul font-semibold">
            Enviar Mensagem
          </p>
        </button>
      </form>
      <div>
        <div
          class="py-[45px] mx-[30px] md:py-[50px] md:mx-[199px] lg:py-[60px] lg:mx-[320px] xl:mx-[40px] xl:mt-10 rounded-[20px] bg-[#1E1D5F] shadow-xl text-center space-y-4 text-[18px] xl:text-[24px] text-white font-normal"
        >
          <div class="flex justify-center text-[20px] xl:text-[26px]">
            <h1 class="text-white pb-6">
              Outras formas de <br /><span class="text-verde">Contato</span>
            </h1>
          </div>
          <p class="underline decoration-verde">
            <a href="https://wa.me/+5586988072323" target="_blank"
              ><i class="fa-brands fa-whatsapp text-[30px] mr-1"></i> (86)
              98807-2323</a
            >
          </p>
          <p class="py-5">
            <a><i class="fa-solid fa-phone mr-1"></i>+55 (86) 98807-2323</a>
          </p>
          <p class="underline decoration-verde">
            <a href="mailto:contato@bipp.com.br" target="_blank"
              ><i class="fa-solid fa-envelope mr-1"></i> contato@bipp.com.br</a
            >
          </p>
        </div>
      </div>
      <br /><br /><br /><br />
    </div>
  </SiteLayout>
</template>

<script>
import { Head } from "@inertiajs/vue3";
import SiteLayout from "@/Layouts/SiteLayout.vue";
import axios from "axios";

export default {
  components: {
    Head,
    SiteLayout,
  },
  data() {
    return {
      form: {
        name: "",
        phone: "",
        email: "",
        message: "",
      },
      enviado: false,
    };
  },
  methods: {
    sendContact() {
      axios
        .post("/enviar-contato", {
          name: this.form.name,
          phone: this.form.phone,
          email: this.form.email,
          message: this.form.message,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error.response);
        });
      this.form.name = "";
      this.form.phone = "";
      this.form.email = "";
      this.form.message = "";

      alertify.alert("Mensagem", "Mensagem enviada com sucesso!");
    },
  },
};
</script>

<style>
</style>
