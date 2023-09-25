import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAbYBxpYv_QBnzyTfsLDlo6Dk3aoOZwYyw",
    authDomain: "react-2022-45bd7.firebaseapp.com",
    projectId: "react-2022-45bd7",
    storageBucket: "react-2022-45bd7.appspot.com",
    messagingSenderId: "645572051270",
    appId: "1:645572051270:web:79357ec22b5427a5616547"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.auth=firebase.auth()
  firebase.db=firebase.firestore()
  export default firebase


 