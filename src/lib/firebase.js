import Firebase from "firebase/compat/app";
import firebaseAuthServices from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth"
import "firebase/compat/storage";

const config = {
  apiKey: "AIzaSyAxM-RFErkbr1fFSE7NK3miP8E-kW2HKVg",
  authDomain: "instagram-sarik.firebaseapp.com",
  projectId: "instagram-sarik",
  storageBucket: "instagram-sarik.appspot.com",
  messagingSenderId: "937155495965",
  appId: "1:937155495965:web:d9f11d66ef83c602011ef4"
}

const firebase = Firebase.initializeApp(config);

const { FieldValue } = Firebase.firestore;

export const storage = firebase.storage();
export { firebase, FieldValue };
