
import { useState } from 'react';
import './Login.css';
import { usuarios } from '../data/usuarios.js';

const Login = ({ onLoginSuccess }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        const user = usuarios.find(u => u.email === email && u.password === password);
        if (user) {
            alert('Usuário logado com sucesso!');
            onLoginSuccess();
        } else {
            setError('Usuário não encontrado. Verifique suas credenciais.');
        }
    };

    return (
        <div className="login-page">
            <div className="login-card">
                <h1>Bem-vindo!</h1>
                <p>Faça login para continuar.</p>
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            placeholder="Seu e-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            id="password"
                            name="password"
                            required
                            placeholder="Sua senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {error && <p className="error-message">{error}</p>}
                    <button className="submit-button" type="submit">Entrar</button>
                </form>

                <div className="signup-link">
                    Não tem uma conta? <a href="/register">Cadastre-se</a>
                </div>
            </div>
        </div>
    );
};

export default Login;