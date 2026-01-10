import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { app } from "./app.js";

export const auth = getAuth(app);

export async function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
}

export async function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
    return signOut(auth);
}
