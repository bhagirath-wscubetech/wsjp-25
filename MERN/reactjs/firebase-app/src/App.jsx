// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import Table from "./Table";
import Form from "./Form";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3yMcvRm1uHDI4eor6FZMfR0FPvmqE6t0",
  authDomain: "wsjp-25.firebaseapp.com",
  projectId: "wsjp-25",
  storageBucket: "wsjp-25.appspot.com",
  messagingSenderId: "671552793385",
  appId: "1:671552793385:web:b2245421dc107f3ec06538",
  measurementId: "G-SQNNL9LHMK"
};

// Initialize Firebase
const fireBaseApp = initializeApp(firebaseConfig);


function App() {
  return (
    <div className="max-w-[1400px] mx-auto grid grid-cols-4 gap-3">
      <Table/>
      <Form/>
    </div>
  );
}

export default App;
