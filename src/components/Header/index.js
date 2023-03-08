import menu from '../../assets/menu.PNG';
import "./styles.css";

export const Header = () => {
  return (
    <header>
      <h3><strong>logo.empresa</strong></h3>
      <nav>
        <img id="menu" src={menu} alt="Menu" />
        <ul id="nav-ul">
          <li><a href="/">Shop</a></li>
          <li><a href="/">Sobre nós</a></li>
          <li><a href="/">Contacto</a></li>
          <li><a href="/"><i className="bi bi-search"></i></a></li>
          <li><a href="/"><i className="bi bi-bag-dash"></i></a></li>
          <li><a href="/"><i className="bi bi-list"></i></a></li>
        </ul>
      </nav>
    </header>
  )
};
