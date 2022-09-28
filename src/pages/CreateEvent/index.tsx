import { useState } from "react";
import "../CreateEvent/index.css";
import "../../styles/global.css";
import { Header } from "../../components/Header";
import { AiFillHome } from "react-icons/ai";

function CreateEvent() {
  const [file, setFile] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [complement, setComplement] = useState("");
  const [uf, setUf] = useState("");
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [price, setPrice] = useState(0);

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
              <input
                type="file"
                value={file}
                onChange={(event) => setFile(event.target.value)}
                required
              />
            </div>

            <div className="field">
              <label htmlFor="name">Nome do evento</label>
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </div>

            <div className="field-group">
              <div className="field">
                <label htmlFor="address">Endereço</label>
                <input
                  type="text"
                  value={address}
                  onChange={(event) => setAddress(event.target.value)}
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="complement">Nº</label>
                <input
                  type="text"
                  value={complement}
                  onChange={(event) => setComplement(event.target.value)}
                  required
                />
              </div>
            </div>

            <div className="field-group">
              <div className="field">
                <label htmlFor="uf">Estado</label>
                <input
                  type="text"
                  value={uf}
                  onChange={(event) => setUf(event.target.value)}
                  required
                />

                <input type="hidden" name="state" />
              </div>

              <div className="field">
                <label htmlFor="city">Cidade</label>
                <input
                  type="text"
                  value={city}
                  onChange={(event) => setCity(event.target.value)}
                  required
                />
              </div>
            </div>

            <div className="field-group">
              <div className="field">
                <label htmlFor="date">Data</label>
                <input
                  type="date"
                  value={date}
                  onChange={(event) => setDate(event.target.value)}
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="time">Horário</label>
                <input
                  type="time"
                  value={time}
                  onChange={(event) => setTime(event.target.value)}
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="price">Valor do Ingresso</label>
                <input
                  type="price"
                  value={price}
                  onChange={(event) => setPrice(Number(event.target.value))}
                  placeholder="R$"
                  required
                />
              </div>
            </div>
          </fieldset>

          <button type="submit">Cadastrar evento</button>
        </form>
      </div>
    </>
  );
}

export default CreateEvent;
