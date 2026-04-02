import './style.css'

function List({
    title,
    subtitleSecondList = "Minha lista de compra"
}) {
    return (
        <section>
            <h2 id="exemplo-h2" >{ title }</h2>

            <h3>{ subtitleSecondList }</h3>
            <ul id="ul">
                <li>Batata</li>
                <li>Pão</li>
                <li>Arroz</li>
            </ul>

            <h3>Lista ordenada</h3>
            <ol>
                <li>Rotiwels</li>
                <li>Barbye</li>
                <li>Poquemon</li>
            </ol>

        </section>
    )
}

export default List