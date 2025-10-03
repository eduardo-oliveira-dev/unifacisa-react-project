import { useState } from 'react';
import './Home.css';
import { produtosIniciais } from '../data/produtos.js';

const Home = () => {
    const [products, setProducts] = useState(produtosIniciais);
    const [newProductName, setNewProductName] = useState('');
    const [newProductPrice, setNewProductPrice] = useState('');

    const handleAddProduct = (e) => {
        e.preventDefault();
        if (newProductName && newProductPrice) {
            const newProduct = {
                id: products.length + 1,
                nome: newProductName,
                preco: parseFloat(newProductPrice), 
            };
            setProducts([...products, newProduct]);
            setNewProductName('');
            setNewProductPrice('');
        }
    };

    const handleRemoveProduct = (id) => {
        setProducts(products.filter(product => product.id !== id));
    };

    return (
        <div className="home-page">
            <div className="home-container">
                <h1>Bem-vindo!</h1>
                <p>Aqui estão os seus produtos.</p>

                <div className="add-product-form-container">
                    <h3>Adicionar Novo Produto</h3>
                    <form className="add-product-form" onSubmit={handleAddProduct}>
                        <input
                            type="text"
                            placeholder="Nome do Produto"
                            value={newProductName}
                            onChange={(e) => setNewProductName(e.target.value)}
                            required
                        />
                        <input
                            type="number"
                            placeholder="Preço"
                            value={newProductPrice}
                            onChange={(e) => setNewProductPrice(e.target.value)}
                            required
                        />
                        <button type="submit">Adicionar</button>
                    </form>
                </div>

                <ul className="product-list">
                    {products.map(product => (
                        <li key={product.id} className="product-item">
                            <span>{product.id} - {product.nome} - R$ {product.preco.toFixed(2)}</span> {}
                            <button onClick={() => handleRemoveProduct(product.id)}>Remover</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Home;