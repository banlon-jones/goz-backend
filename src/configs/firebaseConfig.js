import { initializeApp } from "firebase-admin/app";
import * as firebase from "firebase-admin";

const SERVICE_ACCOUNT = "../../../goz-service-account/ghoz-942cb-firebase-adminsdk-79c2v-6807ac4f44.json";

const  firebaseDefault = initializeApp(
  {
    credential: firebase.credential.cert(SERVICE_ACCOUNT)
  }
)

export default firebaseDefault;
