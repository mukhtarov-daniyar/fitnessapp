import firebase from 'firebase/app';
import 'firebase/firestore';  

import firebaseConfig from './google-services.json';


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
