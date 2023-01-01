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

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export  {auth,db};