import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAPESuWpTNhHaTK2RGi8kKLtAlUOKkOodE",
    authDomain: "expense-tracker-a9613.firebaseapp.com",
    projectId: "expense-tracker-a9613",
    storageBucket: "expense-tracker-a9613.appspot.com",
    messagingSenderId: "58948648373",
    appId: "1:58948648373:web:75f5eaf2c2e2ac5f3f2dfc",
    measurementId: "G-RE74GH9KQ8"
}

const fire = firebase.initializeApp(config);
export default fire;