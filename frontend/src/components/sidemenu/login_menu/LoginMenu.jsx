import "./LoginMenu.css"

export function LoginMenu({ onOpenLoginModal, onOpenRegisterModal}) {

    const handleLogin = () => {
        onOpenLoginModal()
    }
    return (
        <div className="login-wrapper">
            <button className="login-button" onClick={handleLogin}>Login</button>
            <a onClick={onOpenRegisterModal} className="register-link">Not registered yet? Sign up </a>
        </div>
    )
}