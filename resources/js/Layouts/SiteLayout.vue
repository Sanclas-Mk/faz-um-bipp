<template>
  <div>
    <Cabecalho />
    <main><slot /></main>
    <Rodape />
  </div>
</template>
<script>
import Cabecalho from "@/Components/Cabecalho.vue";
import Rodape from "@/Components/Rodape/Rodape.vue";

export default {
  components: {
    Cabecalho,
    Rodape,
  },
};
</script>