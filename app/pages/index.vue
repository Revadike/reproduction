<script setup>
  import { signOut } from 'firebase/auth';

  const auth = useFirebaseAuth();
  const user = useCurrentUser();

  useSeoMeta({
    title: 'Home'
  });

  definePageMeta({
    middleware: 'authenticated'
  });
</script>

<template>
  <main>
    <h2>Welkom!</h2>

    <template v-if="user">
      <div>
        Je bent momenteel ingelogd als:
        <br>
        <img
          v-if="user.photoURL"
          class="avatar"
          referrerpolicy="no-referrer"
          :src="user.photoURL"
        >
        <br>
        <strong>{{ user.isAnonymous ? '🥸' : '' }} {{ user.displayName }}.</strong>
      </div>

      <v-btn @click="signOut(auth)">
        Uitloggen
      </v-btn>
    </template>
  </main>
</template>
