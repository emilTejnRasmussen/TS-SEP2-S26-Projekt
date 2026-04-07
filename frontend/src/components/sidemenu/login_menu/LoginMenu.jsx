import "./LoginMenu.css"

export function LoginMenu({ openPopup, toggleMenu, onOpenLoginModal, onOpenRegisterModal}) {

    return (
        <div className="login-wrapper">
            <button className="login-button" onClick={onOpenLoginModal}>Login</button>
            <a onClick={onOpenRegisterModal} className="register-link">Not registered yet? Sign up </a>
        </div>
    )
}