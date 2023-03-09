import React from 'react';
import './styles.css';

export const TotalContainer = () => {
  return (
    <div id="total-container">
      <div id="total-container-div1">
        <h5>
          <strong>
            <i style={{ fontSize: "14px", marginRight: "5px" }} className="bi bi-chevron-left"></i>
            Continuar comprando
          </strong>
        </h5>
      </div>

      <div className="subtotal">
        <div>
          <span>Subtotal</span>
          <span><strong>€ 269.97</strong></span>
        </div>
        <br />
        <div>
          <span>Frete</span>
          <span><strong>Grátis</strong></span>
        </div>
        <hr />
        <div>
          <span><strong>Total</strong></span>
          <span style={{ fontSize: "20px", fontWeight: "bold" }}>
            €
            <span id="total">269.97</span>
          </span>
        </div>
      </div>
    </div>
  )
};
