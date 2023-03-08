import React from 'react';
import product1 from '../../assets/PRODUTO1.PNG';
import product2 from '../../assets/PRODUTO2.PNG';
import product3 from '../../assets/PRODUTO3.PNG';
import './styles.css';

export const ShoppingCart = () => {
  return (
    <div className="col-sm-12 col-md-12" id="products">
      <h2><strong>Carrinho</strong></h2>
      <div className="row">
        <div className="col">
          <span>Produto</span>
        </div>
        <div className="col">
          <span>Tamanho</span>
        </div>
        <div className="col">
          <span>Quantidade</span>
        </div>
        <div className="col">
          <span>Valor</span>
        </div>
      </div>
      <hr />

      <div className="row">
        <div className="col">
          <div className="product">
            <img src={product1} alt="Produto 1" />
            <strong>Produto 1</strong>
          </div>
        </div>
        <div className="col">
          <strong>M</strong>
        </div>
        <div className="col">
          <strong>1</strong>
        </div>
        <div className="col">
          <strong>€89.99</strong>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div className="product">
            <img src={product2} alt="Produto 2" />
            <strong>Produto 2</strong>
          </div>
        </div>
        <div className="col">
          <strong>M</strong>
        </div>
        <div className="col">
          <strong>1</strong>
        </div>
        <div className="col">
          <strong>€79.99</strong>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div className="product">
            <img src={product3} alt="Produto 3" />
            <strong>Produto 3</strong>
          </div>
        </div>
        <div className="col">
          <strong>S</strong>
        </div>
        <div className="col">
          <strong>1</strong>
        </div>
        <div className="col">
          <strong>€99.99</strong>
        </div>
      </div>
      <hr />
    </div>
  )
};
