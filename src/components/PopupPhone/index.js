import React from 'react';
import './styles.css';

export const PopupPhone = () => {
  return (
    <div className="form-number">
      <h4><strong>Pagamento Booya Shop</strong></h4>
      <br />
      <span>Insira seu número de telemóvel<br />para prosseguir com o
        pagamento na APP:</span>
      <div style={{ marginTop: "10px" }} id="error-telemovel" className="disappear">
        <span style={{ color: "#f40000" }}>Por favor insira um número de telemóvel válido.</span>
      </div>
      <div id="number-container" style={{ marginTop: "5%" }}>
        <input type="number" id="mobile_code" className="form-control" placeholder="Phone Number" name="name"
          required />
      </div>
      <br />
      <small>
        Ainda não tens registo?
        <a href="https://play.google.com/store/games" target="_blank" rel="noopener noreferrer">Faça o download da
          app</a>
      </small>
      <br />
      <button type="button" className="button-payment" id="enviar">
        E N V I A R
      </button>
    </div>
  )
};
