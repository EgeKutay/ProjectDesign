// Utilities
import { defineStore } from 'pinia';
import { db } from '@/plugins/firebase'; // Import Firestore from firebase.js
import { collection, addDoc } from 'firebase/firestore';

export const useAppStore = defineStore('signaling', {
  state: () => ({
    //
  }),
})
