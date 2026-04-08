import { api } from "./api.js";

export function register(username, password, email) {
    return api("/auth/register", {
        method: "POST",
        body: { username, password, email }
    }).then((data) => {
        if (data?.id != null) {
            localStorage.setItem("userId", String(data.id));
        }
        return data;
    });
}

export function login(username, password) {
    return api("/auth/login", {
        method: "POST",
        body: { username, password }
    }).then((data) => {
        if (data?.id != null) {
            localStorage.setItem("userId", String(data.id));
        }
        return data;
    });
}