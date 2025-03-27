import logo from './assets/Group 8.png';
import LoginDesign from './LoginDesign';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { UserContext } from "./UserContext";
import { useContext, useEffect } from "react";
import axios from "axios";
import { ThreeDots } from 'react-loader-spinner';

export default function Login() {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 

    useEffect(() => {
        if (user) {
            navigate("/hoje");
        }
    }, [user, navigate]);

    function Login(event) {
        event.preventDefault();
        setLoading(true);

        axios
            .post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", {
                email: email,
                password: password
            })
            .then(response => {
                const userData = response.data;
                setUser(userData);
                localStorage.setItem("user", JSON.stringify(userData));
                navigate("/hoje");
            })
            .catch((error) => {
                setLoading(false);
                console.error("Error logging in:", error);
                alert("Ocorreu um erro ao entrar. Preencha suas informações novamente");
            });
    }

    return (
        <LoginDesign>
            <div className="container">
                <div>
                    <img src={logo} alt="" />
                </div>

                <form onSubmit={Login}>
                    <input 
                        type='email' 
                        placeholder='email' 
                        value={email} 
                        onChange={e => setEmail(e.target.value)}
                        disabled={loading}
                    />
                    <input 
                        type='password' 
                        placeholder='senha' 
                        value={password} 
                        onChange={e => setPassword(e.target.value)}
                        disabled={loading}
                    />
                    <button type='submit' disabled={loading}>
                        {loading ? <ThreeDots height={20} color="#fff" /> : "Entrar"}
                    </button>
                </form>

                <div className="link-container">
                    <Link to="/cadastro" className="link">Não tem uma conta? Cadastre-se!</Link>
                </div>
            </div>
        </LoginDesign>
    );
}
