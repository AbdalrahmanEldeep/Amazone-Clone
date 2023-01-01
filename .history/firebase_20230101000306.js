import {initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import { API_KEY, APP_ID, Auth, MESSAGING, PROJECT_ID, STORAGE_ID } from "./localFirebase";


const firebaseConfig = {
  apiKey: API_KEY,
  authDomain:Auth ,
  projectId:PROJECT_ID ,
  storageBucket:STORAGE_ID,
  messagingSenderId:MESSAGING,
  appId:APP_ID
};
// const firebaseConfig = {
//   apiKey: "AIzaSyBFrGUhP5ZsepYn4b4gKZkagDtRCotLKg8",
//   authDomain: "e-app-25c5a.firebaseapp.com",
//   projectId: "e-app-25c5a",
//   storageBucket: "e-app-25c5a.appspot.com",
//   messagingSenderId: "18733949432",
//   appId: "1:18733949432:web:64543b1d8288e42a31760d"
// };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export  {auth,db};