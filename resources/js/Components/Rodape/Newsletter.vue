<template>
  <div class="mt-10 mx-[50px] max-sm:hidden">
    <h2 class="text-[20px]"><strong>Newsletter</strong></h2>
    <p>Inscreva-se para obter informações e novidades sobre o bipp!</p>
    <form class="absolute" @submit.prevent="subscribe">
      <input
        class="border border-azul rounded-[6px] px-4 py-2 w-[300px] mt-2"
        placeholder="Digite o seu e-mail aqui..."
        v-model="email"
        type="email"
        name="email"
        id="emailId"
        required
      />
      <button
        class="bg-azul hover:bg-azul-min absolute right-0 top-[9px] py-2 px-3 rounded-r-[6px]"
        type="submit"
      >
        <i class="fa-solid fa-arrow-right text-white"></i>
      </button>
    </form>
  </div>
</template>
<script>
export default {
  name: "Newsletter",
  data() {
    return {
      email: "",
    };
  },
  methods: {
    async subscribe() {
      try {
        const response = await this.$inertia.post("/subscribe", {
          email: this.email,
        });
        console.log(response);
        this.email = "";
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>