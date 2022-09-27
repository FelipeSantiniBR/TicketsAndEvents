import { Header } from "../../components/Header";
import { FaSearch } from "react-icons/fa";
import { IoMdCreate } from "react-icons/io";
import "./index.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const navigateToCreateEvent = () => {
    navigate("/new-event");
  };

  const navigateToSearchEvent = () => {
    navigate("/event");
  };

  return (
    <>
      <Header />
      <div id="page-home">
        <div className="content">
          <main>
            <h1>
              Ajudamos você a criar seus eventos e adquirir ingressos para seus
              eventos favoritos
            </h1>

            <p>Escolha sua preferência:</p>
            <button type="button" onClick={navigateToSearchEvent}>
              <span>
                <FaSearch />
              </span>
              <strong> Procurar eventos</strong>
            </button>
            <button type="button" onClick={navigateToCreateEvent}>
              <span>
                <IoMdCreate />
              </span>
              <strong> Criar meu evento</strong>
            </button>
          </main>
        </div>
      </div>
    </>
  );
}

export default Home;