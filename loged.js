export function login() {
    sessionStorage.setItem("loged", "true");
}

export function logout() {
    sessionStorage.removeItem("loged");
}

export function isLoged() {
    return sessionStorage.getItem("loged") === "true";
}