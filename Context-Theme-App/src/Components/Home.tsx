import { useTheme } from "../Context/ThemeContext"

export default function Home() {
    const { theme } = useTheme();
    return (
        <div style={{ boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)", transition: " 0.3s", margin: "15px", backgroundColor: theme === 'light' ? "white" : "black" }}>
            <img src="https://avatars.githubusercontent.com/u/115562979?v=4" alt="Avatar" style={{ width: "200px" }} />
            <div style={{ padding: "2px 16px", color: theme === 'light' ? "black" : "white" }}>
                <h4><b>Jaynesh Sarkar</b></h4>
                <p>Trainer | Developer</p>
            </div>
        </div>
    )
}
