import { useContext } from 'react';

//import './index.css';
//import '../../styles/global.css'
import { EventsContext } from '../../Context'


export function CardEvent() {
    const { event } = useContext(EventsContext);

    return (
    <>
    <div id="page-search-results">
        <main>
            <div className="cards">
                {event.map(event => {
                    return (
                        <div className="card" key={event.id}>

                            <h1>{event.name}</h1>
                            <h2>
                                {new Intl.DateTimeFormat('pt-BR', {
                                    day: '2-digit',
                                    month: 'long',
                                    year: 'numeric'
                                }).format(
                                    new Date(event.start_date)
                                )}
                            </h2>
                            <p>{event.city}</p>
                            <p>{event.state}</p>
                            <h4>
                                {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(event.price)}
                            </h4>
                            <button>Comprar</button>
                        </div>
                    )
                })}
            </div>
        </main>

    </div>
    </>
    )
}