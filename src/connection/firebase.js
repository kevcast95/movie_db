import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { toastMessage } from '../utils/toast';
import { doc, setDoc, arrayUnion, arrayRemove, updateDoc  } from "firebase/firestore";

const firebaseConfig  = {
    apiKey: "AIzaSyBUKptuVv3dgwNtTTd_1j-RzxAgv5gP8sQ",
    authDomain: "movieapp-8b645.firebaseapp.com",
    projectId: "movieapp-8b645",
    storageBucket: "movieapp-8b645.appspot.com",
    messagingSenderId: "970693590704",
    appId: "1:970693590704:web:6de01b2699d7ccb0a44575",
    measurementId: "G-5RG3YTEFY1"
};
const fb  = firebase.initializeApp(firebaseConfig);
const auth = fb.auth();
const db = fb.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();

const signUpWithEmailAndPassword = async (name, email, password) => {
    try {
      const res = await auth.createUserWithEmailAndPassword(email, password)
      const user = res.user
      await db.collection("users").add({
        uid: user.uid,
        name,
        authProvider: "local",
        email,
      })
    } catch (err) {
        toastMessage('error', '!Upss user was not created, plaese check and try again!', 'error_register')
    }
}

const signInWithEmailAndPassword = async (email, password) => {
    try {
      const res = await auth.signInWithEmailAndPassword(email, password)
    } catch (err) {
      console.error(err)
      toastMessage('error', '!Upss user does not exists, please check and try again!', 'error_auth')
    }
  }

// pop up for google login
const googleLogin = async () => {
    try {
      const res = await auth.signInWithPopup(googleProvider)
      const user = res.user
      const query = await db
        .collection("users")
        .where("uid", "==", user.uid)
        .get()
      if (query.docs.length === 0) {
        await db.collection("users").add({
          uid: user.uid,
          name: user.displayName,
          authProvider: "google",
          email: user.email,
        })
      }
    } catch (err) {
        toastMessage('error', '!Upss credentials erros, please check and try again!', 'error_adding_favorite');
    }
}

const addFavorites = async (id, email) => {
    try {
      const docRef = await setDoc(doc(db, "fav_users", email), {
        favorites: [id]
      });
    } catch (e) {
      console.log(e);
      toastMessage('error', 'Upps could not add to favorite, please try again!', 'error_adding_favorite')
    }
  }
  
const updateFavorites = async (id, email) => {
  
  console.log("id:",id,"email:",email);
    const document = doc(db, "fav_users", email);
    try {
        await updateDoc(document, {
        favorites: arrayUnion(id)
        })
    } catch (e) {
        toastMessage('error', 'Upps could not update favorites, please try again!', 'error_updating_favorite')
    }
};
  
const removeFavorites = async (id, email) => {
    const document = doc(db, "fav_users", email);
    try {
        await updateDoc(document, {
        favorites: arrayRemove(id)
        })
    } catch (e) {
        toastMessage('error', 'Upps an error has occurred, please try again!', 'error_removing_favorite')
    }
};


const logOut = () => {
    console.log("sdsd");
    auth.signOut();
}

export {
    auth,
    db,
    signUpWithEmailAndPassword,
    signInWithEmailAndPassword,
    googleLogin,
    addFavorites,
    updateFavorites,
    removeFavorites,
    logOut,
}
  
