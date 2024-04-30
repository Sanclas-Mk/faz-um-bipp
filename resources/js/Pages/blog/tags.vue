<template>
  <AppLayout title="Tags" class="text-white">
    <template #header>
      <h2
        class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"
      >
        Tags
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
              @click="createTag"
              class="bg-blue-500 hover:bg-blue-500/80 transition duration-300 py-2 px-4 rounded-sm flex items-center space-x-2 text-white"
            >
              <i class="fa-solid fa-plus"></i>
              <p>Criar Tag</p>
            </button>
          </div>
        </div>
      </div>
      <div class="overflow-y-auto max-h-[500px]">
        <ul>
          <li
            class="space-x-4 text-black p-4 py-3 border-t"
            v-for="tag in tags"
            :key="tag.id"
          >
            <div>
              <div class="flex justify-between">
                <div class="flex items-center">
                  <input
                    type="checkbox"
                    v-model="selectedtags"
                    :value="tag.id"
                  />
                  <h3 class="font-semibold text-[16px] mx-12">
                    {{ tag.name }}
                  </h3>
                </div>
                <div>
                  <button
                    type="button"
                    @click="editTag(tag)"
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

const { tags } = usePage().props;

const selectedtags = ref([]);
const selectAll = ref(false);

function createTag() {
  alertify.prompt(
    "Criar Tag",
    "",
    "",

    function (ok, value) {
      if (ok) {
        let tag = { name: value };
        router.post("/tags", tag);
      } else {
        console.log("Criação cancelada pelo usuário ou ocorreu um erro.");
      }
    },
    function () {
      alertify.error("Criação cancelada.");
    }
  );
}

function editTag(tag) {
  alertify.prompt(
    "Editar Tag",
    "",
    tag.name,

    function (ok, value) {
      if (ok) {
        tag.name = value;

        router.put(`/tags/${tag.id}`, {
          name: value,
        });
        alertify.success("Tag editada!");
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
  if (!selectedtags.value || selectedtags.value.length === 0) {
    return;
  }
  const confirmed = await new Promise((resolve) => {
    alertify.confirm(
      "Excluir tags",
      "Deseja excluir as tags selecionadas?",
      function (e) {
        resolve(e);
        alertify.success("Tags excluídas!");
      },
      function () {
        alertify.error("Exclusão cancelada.");
      }
    );
  });

  if (confirmed) {
    try {
      await axios.post(`/tags/delete-multiple`, {
        ids: selectedtags.value,
      });
      router.visit("tags");
    } catch (error) {
      if (!error.response || error.response.status !== 404) {
        console.error("Erro ao excluir as tags:", error);
        alertify.error("Erro ao excluir as tags. Por favor, tente novamente.");
      }
    }
  } else {
    console.log("Exclusão cancelada.");
  }
}

function toggleSelectAll() {
  if (selectAll.value) {
    selectedtags.value = tags.map((tag) => tag.id);
  } else {
    selectedtags.value = [];
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

