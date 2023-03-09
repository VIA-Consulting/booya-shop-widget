import { Header } from '../Header';
import { PaymentContainer } from '../PaymentContainer';
import { ShoppingCart } from '../ShoppingCart';
import { ShoppingCartMobile } from '../ShoppingCartMobile';
import { TotalContainer } from '../TotalContainer';
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
            <TotalContainer />
          </div>
          <PaymentContainer />
        </section>

        <div id="phone-container"></div>
        <div id='phone'>
          <div>
            <form>
              
            </form>
          </div>
        </div>
      </main>
    </>
  );
};
