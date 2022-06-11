import { async } from "@firebase/util";

import  { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import {
    getFirestore,
    doc, 
    getDoc,
    setDoc
 } from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyBe7s6zF0xgN5TrasgrzeUoj5M6vkdvcn8",
    authDomain: "clothing-ecommerce-db-a1ff6.firebaseapp.com",
    projectId: "clothing-ecommerce-db-a1ff6",
    storageBucket: "clothing-ecommerce-db-a1ff6.appspot.com",
    messagingSenderId: "488737216616",
    appId: "1:488737216616:web:c8f681953eadd69427c3dd"
  };

 


  const firebaseApp = initializeApp(firebaseConfig);


  const googleProvider = new GoogleAuthProvider();

  googleProvider.setCustomParameters({
      prompt: "select_account"

  });

   export const auth = getAuth();
   export const signInWithGooglePopup = ()=> signInWithPopup(auth, googleProvider)
   export const signInWithGoogleRedirect = ()=>signInWithRedirect(auth, googleProvider);

   export const db = getFirestore();

   export const createUserDocumentFromAuth = async (userAuth) => {
        const userDocRef =  doc(db, "users", userAuth.uid);
        console.log(userDocRef);
        const userSnapShot = await getDoc(userDocRef)

        console.log(userSnapShot);
        console.log(userSnapShot.exists());

        if(!userSnapShot.exists()){
            const {displayName, email} = userAuth;
            const createdAt = new Date();


            try{
                await setDoc(userDocRef, {
                    displayName,
                    email,
                    createdAt
                }); 
            }catch(error){
                console.log("error creating user", error.message)
            }


            return userDocRef;
        }

    }