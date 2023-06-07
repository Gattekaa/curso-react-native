import { initializeApp } from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAvI0oN93YsWtSs3cEgrV09P_RxHEK3-oM",
  authDomain: "appfinancas-c227a.firebaseapp.com",
  projectId: "appfinancas-c227a",
  storageBucket: "appfinancas-c227a.appspot.com",
  messagingSenderId: "656861335013",
  appId: "1:656861335013:web:abaeb9ce07165dc5a2b30c",
};

const firebase = initializeApp(firebaseConfig);

export default firebase;
