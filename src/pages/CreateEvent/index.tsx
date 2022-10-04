import { FormEvent, useContext, useState } from "react";
import "../CreateEvent/index.css";
import "../../styles/global.css";
import { Header } from "../../components/Header";
import { AiFillHome } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { EventsContext } from "../../Context";
import ImageBanner from "../../utils/convertImage";

function CreateEvent() {
  const { newEvent, base64 } = useContext(EventsContext);

  const [event, setEvent] = useState({
    file: "",
    name: "",
    title: "",
    date: "",
    time: "",
    state: "",
    city: "",
    price: 0,
  });

  const navigate = useNavigate();

  async function handleCreateNewEvent(e: FormEvent) {
    e.preventDefault();

    await newEvent({ ...event, base64 });

    setEvent({
      file: "",
      name: "",
      title: "",
      date: "",
      time: "",
      state: "",
      city: "",
      price: 0,
    });

    navigate("/event");
  }

  return (
    <>
      <Header />
      <a href="/">
        <AiFillHome />
        Voltar para home
      </a>
      <div id="page-create-event">
        <form className="formEvent">
          <h1>Cadastre seu Evento</h1>

          <fieldset>
            <div className="field">
              <label htmlFor="file">Imagem do evento</label>
              <ImageBanner />
            </div>

            <div className="field">
              <label htmlFor="name">Nome do evento</label>
              <input
                type="text"
                value={event.name}
                onChange={(e) => setEvent({ ...event, name: e.target.value })}
                required
              />
            </div>

            <div className="field-group">
              <div className="field">
                <label htmlFor="state">Estado</label>
                <input
                  type="text"
                  value={event.state}
                  onChange={(e) =>
                    setEvent({ ...event, state: e.target.value })
                  }
                  maxLength={2}
                  required
                />

                <input type="hidden" name="state" />
              </div>

              <div className="field">
                <label htmlFor="city">Cidade</label>
                <input
                  type="text"
                  value={event.city}
                  onChange={(e) => setEvent({ ...event, city: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="field-group">
              <div className="field">
                <label htmlFor="date">Data</label>
                <input
                  type="date"
                  value={event.date}
                  onChange={(e) => setEvent({ ...event, date: e.target.value })}
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="time">Horário</label>
                <input
                  type="time"
                  value={event.time}
                  onChange={(e) => setEvent({ ...event, time: e.target.value })}
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="price">Valor do Ingresso</label>
                <input
                  type="price"
                  value={event.price}
                  onChange={(e) =>
                    setEvent({ ...event, price: Number(e.target.value) })
                  }
                  placeholder="R$"
                  required
                />
              </div>
            </div>
          </fieldset>

          <button type="submit" onClick={handleCreateNewEvent}>
            Cadastrar evento
          </button>
        </form>
      </div>
    </>
  );
}

export default CreateEvent;
