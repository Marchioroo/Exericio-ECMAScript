class ProductManager {
  constructor() {
    this.products = [];
    this.Id = 1;
  }

  addProduct({ title, description, price, thumbnail, code, stock }) {
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      console.error("Por gentileza, preench todos os campos!!");
      return;
    }

    const codigoExistente = this.products.some(
      (produto) => produto.code === code
    );
    if (codigoExistente) {
      console.error(`O código ${code} já está em uso.`);
      return;
    }

    const novoProduto = {
      id: this.Id++,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };

    this.products.push(novoProduto);
    console.log(`Produto ${title} adicionado com sucesso!`);
  }

  getProductById(id) {
    const product = this.products.find((produto) => produto.id === id);
    if (!product) {
      console.error("Produto não encontrado");
      return;
    }
    return product;
  }
}

const InserirProduto = new ProductManager();

InserirProduto.addProduct({
  title: "bala de mascar",
  description: "É uma bala bem legal",
  price: 1,
  thumbnail: "Imagem",
  code: "123",
  stock: 30,
});

console.log(InserirProduto.getProductById(1));
console.log(InserirProduto.getProductById(2));
