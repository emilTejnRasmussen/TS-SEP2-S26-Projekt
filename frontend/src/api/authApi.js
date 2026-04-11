import { api } from "./api.js";

export function register(username, password, email) {
    return api("/auth/register", {
        method: "POST",
        body: { username, password, email }
    }).then((data) => {
        if (data?.id != null) {
            const userDetails = {
                id: data.id,
                username: data.username,
                email: data.email
            }
            localStorage.setItem("userDetails", JSON.stringify(userDetails));
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
            const userDetails = {
                id: data.id,
                username: data.username,
                email: data.email
            }
            localStorage.setItem("userDetails", JSON.stringify(userDetails));
        }
        return data;
    });
}