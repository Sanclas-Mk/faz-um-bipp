<template>
  <div class="bg-azul w-full">
    <div class="md:flex justify-center md:space-x-4 lg:space-x-8 xl:space-x-20">
      <h1
        class="py-8 px-[50px] text-[36px] text-white font-principal md:text-[32px] lg:pt-14 xl:pt-16 lg:text-[38px] xl:text-[50px]"
      >
        Tranquilidade <br />
        inteligente na <br />
        <span class="text-verde">{{ texto }}</span>
      </h1>
      <img
        class="w-[450px] h-[250px] md:w-[300px] md:h-[200px] lg:w-[400px] lg:h-[250px] xl:w-[500px] xl:h-[300px] md:mt-10 xl:mt-28"
        :src="imagem"
        alt="Imagens que são alternadas entre uma família e uma mulher que faz parte de uma empresa."
      />
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed } from "vue";
export default {
  name: "SessaoInicio",
  setup() {
    const imageIndex = ref(0); // Índice inicial da imagem
    const imagens = ref([
      "/Imagens/familia-bipp.png",
      "/Imagens/mulher-empresaria-bipp.png",
    ]); // Array de caminhos das imagens
    const textos = ref(["sua casa.", "sua empresa."]); // Array de textos
    let textoIndex = ref(0); // Índice inicial do texto

    const trocarInfo = () => {
      imageIndex.value = (imageIndex.value + 1) % imagens.value.length;
      textoIndex.value = (textoIndex.value + 1) % textos.value.length;
    };

    onMounted(() => {
      setInterval(trocarInfo, 5000); // Troca a imagem a cada 5 segundos
    });

    const imagem = computed(() => imagens.value[imageIndex.value]);
    const texto = computed(() => textos.value[textoIndex.value]);

    return { imagem, texto };
  },
};
</script>
