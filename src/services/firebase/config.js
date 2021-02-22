import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDO7jQHPEFBBZdMVjqYCQUxt85-1OoOAdk',
  authDomain: 'squads-dev.firebaseapp.com',
  databaseURL: 'https://squads-dev-default-rtdb.firebaseio.com',
  projectId: 'squads-dev',
  storageBucket: 'squads-dev.appspot.com',
  messagingSenderId: '350887103254',
  appId: '1:350887103254:web:f6003b73d47d35ca8e9e37',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
