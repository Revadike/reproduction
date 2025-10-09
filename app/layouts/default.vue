<script setup>
  const { public: { siteName } } = useRuntimeConfig();
  useHead({
    titleTemplate: titleChunk => titleChunk ? `${titleChunk} - ${siteName}` : siteName
  });
</script>

<template>
  <v-app>
    <v-main>
      <slot />
    </v-main>

    <footer>
      <!-- Footer -->
    </footer>
  </v-app>
</template>
