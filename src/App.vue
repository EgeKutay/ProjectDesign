<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import db from "@/plugins/firebase";
import { useSignalingStore } from "@/stores/signaling";

const signal = useSignalingStore();
signal.createLobby();
</script>
