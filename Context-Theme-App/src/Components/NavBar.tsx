import { useTheme } from "../Context/ThemeContext"


export default function NavBar() {
    const { theme, toggleTheme } = useTheme();
    return (
        <div>
            <nav>
                <h2>MY THEME APP {theme}</h2>
                <button onClick={toggleTheme}>{theme === 'light' ? "Dark" : "Light"} Theme</button>
            </nav>
        </div>
    )
}
