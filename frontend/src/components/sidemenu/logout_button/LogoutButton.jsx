import "./LogoutButton.css"

export function LogoutButton({onLogout}) {

    const handleLogout = () => {
        localStorage.removeItem("userId")
        onLogout()
    }

    return (
        <div className="button-wrapper">
            <button
            onClick={handleLogout}
            >
                Logout
            </button>
        </div>
    )
}