<script setup>
  const props = defineProps({
    error: {
      type: Object,
      default: () => ({})
    }
  });

  const message = computed(() => {
    switch (props.error.statusCode) {
      case 400: return 'Foutieve aanvraag';
      case 401: return 'Niet geautoriseerd';
      case 403: return 'Toegang geweigerd';
      case 404: return 'Pagina niet gevonden';
      default: return 'Er is een fout opgetreden';
    }
  });

  const handleError = () => clearError({ redirect: '/' });
</script>

<template>
  <v-empty-state :headline="message">
    <button
      class="text-decoration-underline"
      title="Home"
      @click="handleError"
    >
      klik hier
    </button>
    om terug te keren naar de homepagina.
  </v-empty-state>
</template>
