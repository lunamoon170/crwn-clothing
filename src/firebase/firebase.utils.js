import firebase from 'firebase/app';
import 'firebase/firebase-auth';
import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyAW26J3w8q22zfwxkjF1aOfRVhFetU99pw",
    authDomain: "crwn-db-bd6cd.firebaseapp.com",
    databaseURL: "https://crwn-db-bd6cd.firebaseio.com",
    projectId: "crwn-db-bd6cd",
    storageBucket: "crwn-db-bd6cd.appspot.com",
    messagingSenderId: "43710246251",
    appId: "1:43710246251:web:baf55690464e86be7ab02e",
    measurementId: "G-B3P05CLRSE"
  };

  export const createUserProfileDocument= async(userAuth,additionalData)=>{
     if(!userAuth) return;
     const userRef=firestore.doc(`users/${userAuth.uid}`);
     const snapShot =await userRef.get();
     if(!snapShot.exists){
       const{displayName,email}=userAuth;
       const createAt =new Date();

       try{
         await userRef.set({
           displayName,
           email,
           createAt,
           ...additionalData
         })
       }catch(error){
         console.log('error creating user',error.message);
       }
     }
     return userRef;
  };

  firebase.initializeApp(firebaseConfig);

  export const auth=firebase.auth();
  export const firestore =firebase.firestore();

  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInwithGoogle=()=>auth.signInWithPopup(provider);
  export default firebase;