import { useState } from 'react'
import Contact from "./components/Contact";
import Home from "./components/Home";
import Menu from "./components/Menu";
import './App.css'

function App() {
    const [page, setPage] = useState("home");

    const renderPage = () => {
        switch(page) {
            case "home":
                return <Home />;
            case "menu":
                return <Menu />;
            case "contact":
                return <Contact />;
            default:
                return <Home />;
        }
    };

    return (
        <div className="App">
            <header className="header">
                <h1>Pastelaria Delícia</h1>
                <nav>
                <button onClick={() => setPage("home")}>Início</button>
                <button onClick={() => setPage("menu")}>Cardápio</button>
                <button onClick={() => setPage("contact")}>Contato</button>
                </nav>
            </header>
                <main>{renderPage()}</main>
            <footer>
                <p>&copy; 2024 Pastelaria Delícia. Todos os direitos reservados.</p>
            </footer>
        </div>
    )
}

export default App;