import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCoen9FFd8y9xqXWeCxcamRb36_noo6oFo",
  authDomain: "webrtctest-83382.firebaseapp.com",
  projectId: "webrtctest-83382",
  storageBucket: "webrtctest-83382.appspot.com",
  messagingSenderId: "323721496792",
  appId: "1:323721496792:web:80e9552c3bc2fe64432fad"
};

const app = initializeApp(firebaseConfig);


// Initialize Firestore
const firestore = getFirestore(app);

export { firestore };
export default { app, firestore }
