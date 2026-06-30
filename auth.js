import {
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

import { auth } from "./firebase-config.js";

const loginBtn = document.getElementById("loginBtn");
const error = document.getElementById("error");

loginBtn.addEventListener("click", async () => {

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    error.textContent = "";

    if (!email || !password) {
        error.textContent = "Please enter your email and password.";
        return;
    }

    try {

        const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );

        const user = userCredential.user;

        // Replace this with YOUR admin email
        const ADMIN_EMAIL = "nyabedaisaac@gmail.com";

        if (user.email === ADMIN_EMAIL) {
            localStorage.setItem("role", "admin");
        } else {
            localStorage.setItem("role", "member");
        }

        window.location.href = "index.html";

    } catch (err) {

        switch (err.code) {

            case "auth/invalid-credential":
                error.textContent = "Incorrect email or password.";
                break;

            case "auth/user-disabled":
                error.textContent = "This account has been disabled.";
                break;

            case "auth/too-many-requests":
                error.textContent = "Too many attempts. Please try again later.";
                break;

            default:
                error.textContent = "Login failed. Please try again.";
        }
    }

});
