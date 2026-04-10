import { Link } from 'react-router-dom';
import './style.css';

function Home() {
    return (
        <> 
            <h2>Bem-Vindo(a) ao meu sistema</h2>
            <Link to="/about" >
                <button>navegar para About</button>
            </Link>
        </>
    )
}

export default Home