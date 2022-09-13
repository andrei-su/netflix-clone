import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyAsN-NRC3iArMfE0gypNuDbMyLDu5CJsr4",
	authDomain: "clone-projects-9.firebaseapp.com",
	projectId: "clone-projects-9",
	storageBucket: "clone-projects-9.appspot.com",
	messagingSenderId: "174316682985",
	appId: "1:174316682985:web:8954e3bc62d11af36dba78"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
