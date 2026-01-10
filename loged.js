export function login() {
    localStorage.setItem("loged", "true");
}

export function logout() {
    localStorage.removeItem("loged");
}

export function isLoged() {
    return localStorage.getItem("loged") === "true";
}