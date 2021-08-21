import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
 import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyC_2A0I1QODBxXY7L8_tg9TeKl1mud860Q",
  authDomain: "netflex-1.firebaseapp.com",
  projectId: "netflex-1",
  storageBucket: "netflex-1.appspot.com",
  messagingSenderId: "1013303471427",
  appId: "1:1013303471427:web:df9107cf44706e880413f6"
};

const firebase = Firebase.initializeApp(config);
seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
