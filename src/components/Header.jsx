import React from "react";

function Header({ setPage }) {
    return (
        <header className="header">
            <h1>Pastelaria</h1>
            <nav>
                <button onClick={() => setPage("home")}>Home</button>
                <button onClick={() => setPage("menu")}>Menu</button>
                <button onClick={() => setPage("contact")}>Contato</button>
            </nav>
        </header>
    )
}

export default Header;