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

const app = initializeApp(app);
const auth = getAuth(app);
const db = getFirestore(app);

export  {auth,db};