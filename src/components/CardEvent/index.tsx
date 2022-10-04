import { useContext, useState } from "react";

import "./index.css";
import "./indexModal.css";
import { Event, EventsContext } from "../../Context";
import Modal from "react-modal";

Modal.setAppElement("#root");

export function CardEvent() {
  const { event } = useContext(EventsContext);
  const [modalIsOpen, setIsOpen] = useState(false);

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  function getImage(events: Event) {
    if (events.file === "") return events.base64;
    else {
      return events.file;
    }
  }

  return (
    <>
      <div id="page-search-results">
        <main>
          <div className="cards">
            {event.map((events) => {
              return (
                <div className="card" key={events.id}>
                  <img src={getImage(events)} alt="banner" />
                  <h1>{events.name}</h1>
                  <h2>
                    {new Intl.DateTimeFormat("pt-BR", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    }).format(new Date(events.date))}
                  </h2>
                  <p>{events.city}</p>
                  <p>{events.state}</p>
                  <h4>
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(events.price)}
                  </h4>
                  <div className="button">
                    <input
                      className="quantity"
                      type="number"
                      placeholder="Qtd"
                    />
                    <button type="button" onClick={handleOpenModal}>
                      Comprar
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        overlayClassName="modal2"
        className="modal2"
      >
        <div id="modal2">
          <div className="content">
            <div className="header">
              <h1> Pronto, você concluiu sua compra! </h1>
              <br></br>
              <a href="/" onClick={handleCloseModal}>
                Fechar
              </a>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
