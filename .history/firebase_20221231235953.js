import {initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain:process.env.Auth ,
  projectId:process.env.PROJECT_ID ,
  storageBucket:process.env.STORAGE_ID,
  messagingSenderId:process.env.MESSAGING,
  appId:process.env.APP_ID
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