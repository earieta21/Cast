import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

export const RegisterLogin = (props) => {
    const [email, setEmail] = useState([]);
    const [name, setName] = useState([]);
    const [isRegistered, setIsRegistered] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const handleRegister = () => {
        if (email && name) {
            setIsRegistered(true);
            setEmail('');
            setName('');
        }
    };

    const handleLogin = () => {
        if (isRegistered) {
            setIsLoggedIn(true);
        }
    };

    return (
        <div>
            {!isRegistered ? (
                <div>
                    <h1>Register</h1>
                    <input 
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />

                    <input 
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)} />

                    <button onClick={handleRegister}>
                        Register
                    </button>
                </div>
            ) : (
                <div>
                    {isLoggedIn ? (
                        <h1>Welcome, {name}!</h1>
                    ) :(
                        <>
                        <h1>Login</h1>
                        <input 
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                        
                        <input type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                        
                        <button onClick={handleLogin}>Login</button></>
                    )}
                </div>
            )}
        </div>
    )
};




