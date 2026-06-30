import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAMfWRUyqlk7R8w01wKd3zXGkdcVMl_HL0",
  authDomain: "santos-tech-615d1.firebaseapp.com",
  projectId: "santos-tech-615d1",
  storageBucket: "santos-tech-615d1.firebasestorage.app",
  messagingSenderId: "39456289342",
  appId: "1:39456289342:web:73848f454ebe4fea34176f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
