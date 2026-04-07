import "./PopupModal.css";

export function PopupModal({ isOpen, onClose, isLogin, setIsLogin }) {
    const closeMenu = () => {
        setIsLogin(true);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="auth-modal-overlay" onClick={closeMenu}>
            <div
                className="auth-modal"
                onClick={(e) => e.stopPropagation()}
            >
                <button className="close-btn" onClick={closeMenu}>
                    ×
                </button>

                <h2>{isLogin ? "Login" : "Create Account"}</h2>

                <form className="auth-form">
                    {!isLogin && (
                        <input type="text" placeholder="Username" />
                    )}
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />

                    <button type="submit" className="submit-btn">
                        {isLogin ? "Login" : "Create Account"}
                    </button>
                </form>

                <p>
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