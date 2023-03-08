import React from 'react';
import product1 from '../../assets/PRODUTO1.PNG';
import product2 from '../../assets/PRODUTO2.PNG';
import product3 from '../../assets/PRODUTO3.PNG';
import './styles.css';

export const ShoppingCartMobile = () => {
  return (
    <div className="col-sm-12 col-md-12" id="products-mobile">
      <div id="products-mobile-header">
        <h2><strong>Carrinho2</strong></h2>
        <h6>
          <strong>
            <i style={{ fontSize: "14px", marginRight: "5px" }} className="bi bi-chevron-left"></i>
            Continuar comprando
          </strong>
        </h6>
      </div>
      <div className="row">
        <div className="col">
          <span>Produto</span>
        </div>
        <div className="col">
          <span style={{ marginLeft: "8rem" }}>Valor</span>
        </div>
      </div>
      <hr />

      <div className="row">
        <div className="col">
          <div className="product">
            <img src={product1} alt="Produto 1" />
            <div className="product-description">
              <strong>Produto 1</strong>
              <span>Taman.: <strong>M</strong></span>
              <span>Quant.: <strong>1</strong></span>
            </div>
          </div>
        </div>
        <div className="col">
          <strong>€89.99</strong><br />
          <strong className="delete-product">Remover</strong>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div className="product">
            <img src={product2} alt="Produto 2" />
            <div className="product-description">
              <strong>Produto 2</strong>
              <span>Taman.: <strong>M</strong></span>
              <span>Quant.: <strong>1</strong></span>
            </div>
          </div>
        </div>
        <div className="col">
          <strong>€79.99</strong><br />
          <strong className="delete-product">Remover</strong>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div className="product">
            <img src={product3} alt="Produto 3" />
            <div className="product-description">
              <strong>Produto 3</strong>
              <span>Taman.: <strong>S</strong></span>
              <span>Quant.: <strong>1</strong></span>
            </div>
          </div>
        </div>
        <div className="col">
          <strong>€99.99</strong><br />
          <strong className="delete-product">Remover</strong>
        </div>
      </div>
      <hr />
    </div>
  )
};
