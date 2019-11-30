import firebase from 'firebase'
var config= {
    apiKey: "AIzaSyDBqMtveyhk7w865pmYZFjS2kz_jXg32b0",
    authDomain: "softwarecommerce23.firebaseapp.com",
    databaseURL: "https://softwarecommerce23.firebaseio.com",
    projectId: "softwarecommerce23",
    storageBucket: "softwarecommerce23.appspot.com",
    messagingSenderId: "169819625338",
    appId: "1:169819625338:web:acb0f7a956f755c815a8c3",
    measurementId: "G-M2YZBW8505"
  };
  const fire= firebase.initializeApp(config);
  export default fire;