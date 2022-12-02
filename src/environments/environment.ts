// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const environment = {
  firebase: {
    projectId: 'sunburst-365',
    appId: '1:88144281075:web:ff429e43b80c6b15f5a686',
    storageBucket: 'sunburst-365.appspot.com',
    apiKey: 'AIzaSyDrpDEM54BnEkM4qelZaE4LwzsUCnP1U20',
    authDomain: 'sunburst-365.firebaseapp.com',
    messagingSenderId: '88144281075',
    measurementId: 'G-X889TSQ778',
  }
};

// Initialize Firebase
const app = initializeApp(environment.firebase);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export async function getProducts() {
  const products = collection(db, 'Products');
  const productsSnapshot = await getDocs(products);
  const productsList = productsSnapshot.docs.map(doc => doc.data());
  return productsList;
}




