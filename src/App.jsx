import { useState } from 'react';
import ItemCardapio from './components/itemCarrinho';
import './App.css';

function App() {
    const [itensCarrinho, setItensCarrinho] = useState(0);

    const bancoDeDados = [
        {
            id: 1,
            nome: 'X-Bacon Duplo',
            descricao: 'Duas carnes e muito bacon.',
            preco: 35.0,
        },
        {
            id: 2,
            nome: 'Pizza Calabresa',
            descricao: 'Pizza média com oito pedaços.',
            preco: 45.0,
        },
        {
            id: 3,
            nome: 'Suco de Laranja',
            descricao: 'Copo de 500 ml natural.',
            preco: 8.0,
        },
    ];

    return (
        <main className="app">
            <header className="header">
                <h1>Cardápio</h1>
                <h3>Carrinho: {itensCarrinho} itens</h3>
            </header>

            <section className="cardapio">
                {bancoDeDados.map((item) => (
                    <ItemCardapio
                        key={item.id}
                        nome={item.nome}
                        descricao={item.descricao}
                        preco={item.preco}
                        adicionarItem={() => setItensCarrinho(itensCarrinho + 1)}
                    />
                ))}
            </section>
        </main>
    );
}

export default App;
