import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB_QmBt6M-CswO4jsmlEDJE5YhM9swxRzc",
  authDomain: "todo-app-7af71.firebaseapp.com",
  projectId: "todo-app-7af71",
  storageBucket: "todo-app-7af71.appspot.com",
  messagingSenderId: "86981989982",
  appId: "1:86981989982:web:b408879599f2784c1646cf",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore;
