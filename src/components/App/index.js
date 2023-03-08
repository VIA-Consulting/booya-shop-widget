import { Header } from '../Header';
import { ShoppingCart } from '../ShoppingCart';
import { ShoppingCartMobile } from '../ShoppingCartMobile';
import './styles.css';

export function App() {
  return (
    <>
      <Header />

      <main>
        <section>
          <div>
            <ShoppingCart />
            <ShoppingCartMobile />

          </div>
        </section>

        <div id="phone-container"></div>

      </main>
    </>
  );
};
