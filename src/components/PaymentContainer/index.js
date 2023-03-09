import React from 'react';
import booyaLogo from "../../assets/booya.png";
import './styles.css';

export const PaymentContainer = () => {
  // id comerciante tem q ser um state

  return (
    <div className="col-sm-12 col-md-4" id="payment-container-parent">
      <div id="payment-container">
        <h2>Pagamento</h2>
        <br />
        <div>
          <span>Pedido: <span id="order-id">#123456</span></span>
          <br />
          <span>Comerciante: </span>
          <span id="comerciante">Loja teste</span>
        </div>
        <span>Pagar com:</span>
        <div>
          <br />
          <button className="payment">
            <strong>PayPal</strong>
          </button>
          <br />
          <button className="payment">
            <img style={{ width: "6rem" }} src={booyaLogo} alt="Booya Shop logo" />
          </button>
          <br />
          <div id="booya-description">
            <small><a href="/booya-shop-widget/" id="btn-what-is">O que é?</a></small>
          </div>
        </div>
      </div>
    </div>
  )
};
