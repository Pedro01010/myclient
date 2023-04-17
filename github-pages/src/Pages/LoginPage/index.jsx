import React, {useState} from "react";
import "./styles.css";
import imagens from '../imagens/instagram-logo-16.png'
import logo from '../imagens/logo.png'


const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit", {email , password});
    };

    return (
       
        <div id="login">
          <div className="logo"><img src={logo} alt="" /></div>
          
            <form className="form" onSubmit={handleSubmit} style={{ 'borderRadius': '10px', 'border': 'solid black 1px', 'boxShadow': '5px 3px 10px' }}>
                <div className="field">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                </div>
                <div className="field">
                    <label htmlFor="password">Senha:</label>
                    <input type="password" name="password" id="password" value={password} onChange={(e)=> setPassword (e.target.value)}/>
                </div>
                <div className="actions">
                    <button type="submit" style={{'borderRadius': "10px"}}>Entrar</button>
                </div>
                <div className="img">
                    
                    <a href="https://www.instagram.com/" >
                        <img src={imagens} alt="logo" style={{
                            width: "25px",
                            textAlign: "center",
                            marginTop: "20px",
                        }}srcset="" />
                    </a>
                     
                </div>
            </form>
        </div>
        
    );
};
export default LoginPage;
