<template>
  <h1 class="text-[32px] font-principal my-10">
    {{ titulo }} <span class="text-verde">{{ tituloV }}</span>
  </h1>
</template>

<script>
export default {
  name: "Titulos",
  props: {
    titulo: String,
    tituloV: String,
  },
};
</script>
