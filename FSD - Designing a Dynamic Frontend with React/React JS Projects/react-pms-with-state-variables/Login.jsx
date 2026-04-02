import { useState } from "react";

const VALID_EMAIL = "admin@gmail.com";
const VALID_PASSWORD = "admin123";

function Login() {
let [email, setEmail] = useState("");
let [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!email || !password) {
            alert("Please enter both email and password");
            return;
        }

        if (email === VALID_EMAIL && password === VALID_PASSWORD) {
            alert("Login successful");
        } else {
            alert("Invalid email or password");
        }
    };

    return (
        <div className="login">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;