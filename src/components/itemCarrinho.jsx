function ItemCardapio({ nome, descricao, preco, adicionarItem }) {
    return (
        <article className="item">
            <h2>{nome}</h2>
            <p>{descricao}</p>
            <strong>R$ {preco.toFixed(2)}</strong>
            <button type="button" onClick={adicionarItem}>
                + Adicionar
            </button>
        </article>
    );
}

export default ItemCardapio;
