import "./index.css";
import { GiTicket } from "react-icons/gi";

export function Header() {
  return (
    <div id="header">
      <div className="content">
        <header>
          <h3>
            <GiTicket />
            Tickets<strong> & Events</strong>
          </h3>
        </header>
      </div>
    </div>
  );
}