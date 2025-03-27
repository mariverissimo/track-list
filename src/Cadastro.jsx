import logo from './assets/Group 8.png'
import { Link, useNavigate } from 'react-router-dom';
import LoginDesign from './LoginDesign'
import { UserContext } from "./UserContext";
import { useState } from 'react';
import axios from "axios";
import { useContext, useEffect } from "react";
import { ThreeDots } from 'react-loader-spinner'
export default function Cadastro(){
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate("/hoje"); 
        }
    }, [user, navigate]);

   function Cadastro(event){
    event.preventDefault();
    setLoading(true);

    if (!email || !name || !image || !password) {
        alert("Todos os campos devem ser preenchidos!");
        setLoading(false);
        return;
    }


    console.log({
        email,
        name,
        image,
        password
    });

    axios
            .post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", {
                email: email,
                name: name,
                image: image,
                password: password
            })
            .then(response => {
                const userData = response.data;
                localStorage.setItem("user", JSON.stringify(userData)); 
        
                navigate("/");
            })
            .catch((error) => {
                setLoading(false);
                console.error("Error booking signing up:", error);
                alert("Ocorreu um erro ao cadastrar-se. Preencha suas informações novamente");
            });
   }
    return(
        <LoginDesign>
        <div className="container">
            <div>
                <img src={logo} alt="" />
            </div>

            <form>
                <input type='email' placeholder='email'
                value={email} 
                onChange={e => setEmail(e.target.value)}
                disabled={loading} ></input>

                <input type='password' placeholder='senha' 
                value={password} 
                onChange={e => setPassword(e.target.value)}
                disabled={loading}></input>

                <input type="text" placeholder='nome'
                value={name} 
                onChange={e => setName(e.target.value)}
                disabled={loading}></input>

                <input placeholder='foto'value={image} 
                onChange={e => setImage(e.target.value)}
                disabled={loading}></input>
                
                <button type='submit'onClick={Cadastro}  disabled={loading}>
                    {loading ? <ThreeDots height={20} color="#fff" /> : "Cadastrar"}</button>
            </form>

            <div className="link-container">
            <Link to="/" className="link">Já tem uma conta? Faça login!</Link>
            </div>
        </div>
        </LoginDesign>
        
    )
}