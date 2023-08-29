const catalogo = [
    {
        nome: 'Controle Nintendo Switch',
        preco: 199.99,
        descricao: 'Controle para Nintendo Switch Pro Controller',
        imagem: 'controle-nintendo.jpg'
    },
    {
        nome: 'Controle Xbox Branco',
        preco: 199.99,
        descricao: 'Controle para Xbox One S',
        imagem: 'controle-xbox-branco.jpg'
    },
    {
        nome: 'Controle Xbox Preto',
        preco: 199.99,
        descricao: 'Controle para Xbox One S',
        imagem: 'controle-xbox-preto.jpg'
    },
    {
        nome: 'Teclado Branco',
        preco: 199.99,
        descricao: 'Teclado Gamer Mecânico',
        imagem: 'teclado-branco.jpg'
    },
    {
        nome: 'Teclado Preto',
        preco: 199.99,
        descricao: 'Teclado Gamer Mecânico',
        imagem: 'teclado-preto.jpg'
    }
]
for (let produto of catalogo) {
    var card_produto = `<div class="card-produto">
    <img src="img/${produto.imagem}" alt="${produto.nome}">
    <h1>${produto.nome}</h1>
    <p>${produto.descricao}</p>
    <p>$${produto.preco}</p>
    <button>Adicionar</button>
    </div>`;
    document.getElementById('container-produto').innerHTML += card_produto;
}