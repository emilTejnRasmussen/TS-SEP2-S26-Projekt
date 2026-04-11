import "./PopupModal.css";
import { useState } from "react";
import { login, register } from "../../api/authApi.js";

export function PopupModal({ isOpen, onClose, isLogin, setIsLogin, onSubmit }) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const closeMenu = () => {
        setIsLogin(true);
        onClose();
    };

    const clearInputFields = () => {
        setUsername("")
        setEmail("")
        setPassword("")
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isLogin) {
            login(username, password)
                .then((res) => {
                    console.log("login success", res);
                    onSubmit()
                    clearInputFields()
                    closeMenu();
                })
                .catch((err) => {
                    console.error("login failed", err);
                });
        } else {
            register(username, password, email)
                .then((res) => {
                    console.log("register success", res);
                    onSubmit()
                    clearInputFields()
                    closeMenu();
                })
                .catch((err) => {
                    console.error("register failed", err);
                });
        }
    };

    if (!isOpen) return null;

    return (
        <div className="auth-modal-overlay" onClick={closeMenu}>
            <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={closeMenu}>
                    ×
                </button>

                <h2>{isLogin ? "Login" : "Create Account"}</h2>

                <form className="auth-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    {!isLogin && (
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    )}

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button type="submit" className="submit-btn">
                        {isLogin ? "Login" : "Create Account"}
                    </button>
                </form>

                <p className="popup-text-bottom">
                    {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                    <span
                        className="switch-mode"
                        onClick={() => setIsLogin(!isLogin)}
                    >
                        {isLogin ? "Create one" : "Login"}
                    </span>
                </p>
            </div>
        </div>
    );
}