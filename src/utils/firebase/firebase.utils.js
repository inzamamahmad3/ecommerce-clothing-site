import  { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBe7s6zF0xgN5TrasgrzeUoj5M6vkdvcn8",
    authDomain: "clothing-ecommerce-db-a1ff6.firebaseapp.com",
    projectId: "clothing-ecommerce-db-a1ff6",
    storageBucket: "clothing-ecommerce-db-a1ff6.appspot.com",
    messagingSenderId: "488737216616",
    appId: "1:488737216616:web:c8f681953eadd69427c3dd"
  };


  const firebaseApp = initializeApp(firebaseConfig);


  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
      prompt: "select_account"

  });

   export const auth = getAuth();
   export const signInWithGooglePopup = ()=> signInWithPopup(auth, provider)