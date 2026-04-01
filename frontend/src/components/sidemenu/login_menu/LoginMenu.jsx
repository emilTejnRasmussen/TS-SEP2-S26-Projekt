import "./LoginMenu.css"

export function LoginMenu() {

    return (
        <div className="login-wrapper">
            <button className="login-button">
                Login
            </button>
            <a className="register-link">Not registered yet? Sign up </a>
        </div>
    )
}