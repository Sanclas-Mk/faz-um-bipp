<script setup>
import { computed } from "vue";
import { Head, Link, useForm } from "@inertiajs/vue3";
import AuthenticationCard from "@/Components/AuthenticationCard.vue";
import AuthenticationCardLogo from "@/Components/AuthenticationCardLogo.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";

const props = defineProps({
  status: String,
});

const form = useForm({});

const submit = () => {
  form.post(route("verification.send"));
};

const verificationLinkSent = computed(
  () => props.status === "verification-link-sent"
);
</script>

<template>
  <Head title="Verificação de E-mail" />

  <AuthenticationCard>
    <template #logo>
      <AuthenticationCardLogo />
    </template>

    <div class="mb-4 text-sm text-gray-600 dark:text-gray-400">
      Antes de continuar, você poderia verificar seu endereço de e-mail clicando
      no botão link que acabamos de enviar por e-mail para você? Se você não
      recebeu o e-mail, iremos prazer em lhe enviar outro.
    </div>

    <div
      v-if="verificationLinkSent"
      class="mb-4 font-medium text-sm text-green-600 dark:text-green-400"
    >
      Um novo link de verificação foi enviado para o endereço de e-mail que você
      forneceu em suas configurações de perfil.
    </div>

    <form @submit.prevent="submit">
      <div class="mt-4 flex items-center justify-between">
        <PrimaryButton
          :class="{ 'opacity-25': form.processing }"
          :disabled="form.processing"
        >
          Reenviar E-mail de Verificação
        </PrimaryButton>

        <div>
          <Link
            :href="route('profile.show')"
            class="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
          >
            Editar Perfil</Link
          >

          <Link
            :href="route('logout')"
            method="post"
            as="button"
            class="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800 ms-2"
          >
            Log Out
          </Link>
        </div>
      </div>
    </form>
  </AuthenticationCard>
</template>
