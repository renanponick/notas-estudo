import { useState } from 'react';
import './style.css';

function SignUp() {
    const [ nome, setNome ] = useState("batata")
    // variaveis
    // funções

    return (
        <>
            <h2>Criar Conta</h2>

            <form>
                <label>Nome</label>
                <input
                    type="text"
                    value={nome}
                    onChange={ (event) => setNome(event.value) }
                />

                <label>Email</label>
                <input
                    type="email"
                />

                <label>Senha</label>
                <input
                    type="password"
                />

                <button type="submit">Cadastrar</button>
            </form>
        </>
    )
}

export default SignUp