
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

function calcularCompra(produto, numParcelas) {
    if (numParcelas === 0) {
        // à vista juros = 0
        var valorComDesconto = produto.preco * 0.9; // Aplica um desconto de 10%
        console.log("Compra à vista: Valor final com 10% de desconto é R$" + valorComDesconto.toFixed(2));
    
    } else if (numParcelas >= 1 && numParcelas <= 10) {
        // 1 a 10 sem juros
        var valorParcela = produto.preco / numParcelas; // parcelas
        console.log("Compra parcelada em " + numParcelas + "x sem juros: Cada parcela é de R$" + valorParcela.toFixed(2));
    
    } else if (numParcelas >= 11 && numParcelas <= 12) {

        var valorParcela = valorTotalComJuros / numParcelas; // juros pelo número de parcelas
        console.log("Compra parcelada em " + numParcelas + "x com 2% de juros: Cada parcela é de R$" + valorParcela.toFixed(2));
    
    } else {
        // Se o número de parcelas não for permitido (mais de 12)
        console.log("Número de parcelas não é permitido. Escolha até 12 parcelas.");
    }
}

var produto = new Produto("Celular", 2000);

calcularCompra(produto, 0);  
calcularCompra(produto, 4);  
calcularCompra(produto, 10);  

