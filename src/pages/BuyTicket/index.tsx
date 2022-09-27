import { CardEvent } from "../../components/CardEvent";
import { Header } from "../../components/Header";
import { AiFillHome } from 'react-icons/ai'

import "./index.css";

function BuyTicket() {
  return (
    <>
      <Header />

      <a href="/">
      <AiFillHome />
            Voltar para home
      </a>
      <div className="buy-ticket">
        <form>
          <CardEvent />
        </form>
      </div>
    </>
  );
}

export default BuyTicket;