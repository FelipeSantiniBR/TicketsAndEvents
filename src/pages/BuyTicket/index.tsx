import { CardEvent } from "../../components/CardEvent";
import { Header } from "../../components/Header";

import "./index.css";

function BuyTicket() {
  return (
    <>
      <Header />
      <div className="buy-ticket">
        <form>
          <CardEvent />
        </form>
      </div>
    </>
  );
}

export default BuyTicket;