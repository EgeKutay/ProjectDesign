// Utilities
import { defineStore } from 'pinia';
import { collection, addDoc } from 'firebase/firestore';
import { firestore } from "@/plugins/firebase"
export const useSignalingStore = defineStore('signaling', {
  state: () => ({
    lobbyId: ""
      /
  }),
  actions: {
    async createLobby() {
      const callDoc = firestore.collection('calls').doc();
      const offerCandidates = callDoc.collection('offerCandidates');
      const answerCandidates = callDoc.collection('answerCandidates');
      this.lobbyId = callDoc.id
    },
    async joinLobby() { }
  }
})
