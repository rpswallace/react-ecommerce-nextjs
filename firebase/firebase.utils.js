import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyAmo16S3q0yjc0IU7egxEgr6ge2mN-LuCc",
  authDomain: "next-js-e-commerce-96d3f.firebaseapp.com",
  projectId: "next-js-e-commerce-96d3f",
  storageBucket: "next-js-e-commerce-96d3f.appspot.com",
  messagingSenderId: "110055425783",
  appId: "1:110055425783:web:d2d2bedd797e7d07f0b5f2",
  measurementId: "G-6HR781FL2K"
}

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
