<template>
  <AppLayout title="Categorias" class="text-white">
    <template #header>
      <h2
        class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"
      >
        Categorias
      </h2>
    </template>
    <div
      class="md:mx-[100px] xl:mx-[200px] rounded-lg p-8 pt-7 shadow-[0px_4px_24px_0px_rgba(0,0,0,0.08)] my-10"
    >
      <div class="px-4 pb-4">
        <div class="flex justify-between">
          <div class="flex space-x-9 items-center">
            <div class="group">
              <input
                class="cursor-pointer mb-1 group-hover:bg-blue-400"
                id="selectCategory"
                type="checkbox"
                v-model="selectAll"
                @change="toggleSelectAll"
              />
              <label
                class="group-hover:text-blue-500 cursor-pointer ml-3 text-gray-500"
                for="selectCategory"
                >Selecionar Tudo</label
              >
            </div>
            <div class="group">
              <button
                class="text-gray-500 group-hover:text-red-500"
                @click="deleteSelectedItems"
              >
                <i class="fa-solid fa-trash"></i>
                Excluir
              </button>
            </div>
          </div>
          <div>
            <button
              @click="createCategory"
              class="bg-blue-500 hover:bg-blue-500/80 transition duration-300 py-2 px-4 rounded-sm flex items-center space-x-2 text-white"
            >
              <i class="fa-solid fa-plus"></i>
              <p>Criar Categoria</p>
            </button>
          </div>
        </div>
      </div>
      <div class="overflow-y-auto max-h-[500px]">
        <ul>
          <li
            class="space-x-4 text-black p-4 py-3 border-t"
            v-for="category in categories"
            :key="category.id"
          >
            <div>
              <div class="flex justify-between">
                <div class="flex items-center">
                  <input
                    type="checkbox"
                    v-model="selectedCategories"
                    :value="category.id"
                  />
                  <h3 class="font-semibold text-[16px] mx-12">
                    {{ category.name }}
                  </h3>
                </div>
                <div>
                  <button
                    type="button"
                    @click="editCategory(category)"
                    class="text-white bg-slate-500 max-lg:hover:text-blue-500 lg:hover:bg-slate-500/70 px-2 py-1 xl:right-[250px] md:right-[150px] right-[50px] max-lg:bg-transparent max-lg:text-gray-500"
                  >
                    <i class="fa-solid fa-pen-to-square"></i>
                    <span class="max-lg:hidden lg:pl-1">Editar</span>
                  </button>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </AppLayout>
</template>

<script setup>
import { router, usePage, Link, useForm } from "@inertiajs/vue3";
import AppLayout from "@/Layouts/AppLayout.vue";
import axios from "axios";
import { ref } from "vue";

const { categories } = usePage().props;

const selectedCategories = ref([]);
const selectAll = ref(false);

function createCategory() {
  alertify.prompt(
    "Criar Categoria",
    "",
    "",

    function (ok, value) {
      if (ok) {
        let category = { name: value };
        router.post("/categories", category);
      } else {
        console.log("Criação cancelada pelo usuário ou ocorreu um erro.");
      }
    },
    function () {
      alertify.error("Criação cancelada.");
    }
  );
}

function editCategory(category) {
  alertify.prompt(
    "Editar Categoria",
    "",
    category.name,

    function (ok, value) {
      if (ok) {
        category.name = value;

        router.put(`/categories/${category.id}`, {
          name: value,
        });
        alertify.success("Categoria editada!");
      } else {
        console.log("Edição cancelada pelo usuário ou ocorreu um erro.");
      }
    },
    function () {
      alertify.error("Edição cancelada.");
    }
  );
}

async function deleteSelectedItems() {
  if (!selectedCategories.value || selectedCategories.value.length === 0) {
    return;
  }
  const confirmed = await new Promise((resolve) => {
    alertify.confirm(
      "Excluir categorias",
      "Deseja excluir os categorias selecionadas?",
      function (e) {
        resolve(e);
        alertify.success("Categorias excluídas!");
      },
      function () {
        alertify.error("Exclusão cancelada.");
      }
    );
  });

  if (confirmed) {
    try {
      await axios.post(`/categories/delete-multiple`, {
        ids: selectedCategories.value,
      });
      router.visit("categories");
    } catch (error) {
      if (!error.response || error.response.status !== 404) {
        console.error("Erro ao excluir as categorias:", error);
        alertify.error(
          "Erro ao excluir as categorias. Por favor, tente novamente."
        );
      }
    }
  } else {
    console.log("Exclusão cancelada.");
  }
}

function toggleSelectAll() {
  if (selectAll.value) {
    selectedCategories.value = categories.map((category) => category.id);
  } else {
    selectedCategories.value = [];
  }
}

function formatDate(timestamp) {
  const date = new Date(timestamp);

  // Obter dia e mês
  const day = date.getDate();
  const month = date.getMonth() + 1; // Os meses em JavaScript começam em zero

  // Adicionar um zero à esquerda, se necessário
  const formattedDay = day < 10 ? `0${day}` : day;
  const formattedMonth = month < 10 ? `0${month}` : month;

  // Formatar a data ('DD/MM/AAAA')
  const formattedDate = `${formattedDay}/${formattedMonth}/${date.getFullYear()}`;

  return formattedDate;
}
</script>

