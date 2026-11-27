function calcularPedido(itens) {
  const subtotal = itens.reduce((soma, item) => soma + item.preco * item.quantidade, 0);
  let desconto = 0;
  if (subtotal >= 50) {
    desconto = Math.round(subtotal * 10) / 100;
  }
  return { subtotal, desconto, total: subtotal - desconto };
}

for (const [preco, esperado] of [[24, 49], [25, 45], [26, 45.9]]) {
  const pedido = calcularPedido([{ preco, quantidade: 1 }, { preco: 25, quantidade: 1 }]);
  console.assert(Math.abs(pedido.total - esperado) < 0.001);
  console.log(pedido);
}
