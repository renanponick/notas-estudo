import { useState } from 'react';
import './style.css';

function SignUp() {
    const [ nome, setNome ] = useState("sadasd")
    const [ email, setEmail ] = useState("a@sdas")
    const [ senha, setSenha ] = useState("sadsa")
    const [ resultado, setResultado ] = useState()

    function handleSubmit(event) {
        event.preventDefault();
        console.log(nome, email, senha)
        setResultado(nome);
    }

    return (
        <>
            <h2>Criar Conta</h2>
            <form onSubmit={handleSubmit}>
                <label>Nome</label>
                <input
                    type="text"
                    value={nome}
                    onChange={ (event) => setNome(event.target.value) }
                />

                <label>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={ (e) => setEmail(e.target.value) }
                />

                <label>Senha</label>
                <input
                    type="password"
                    value={senha}
                    onChange={ (e) => setSenha(e.target.value) }
                />

                <p>{resultado}</p>

                <button type="submit">Cadastrar</button>
            </form>
        </>
    )
}

export default SignUp