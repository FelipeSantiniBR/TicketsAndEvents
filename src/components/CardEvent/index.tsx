import { useContext } from 'react';

import './index.css';
//import '../../styles/global.css'
import { EventsContext } from '../../Context'


export function CardEvent() {
    const { event } = useContext(EventsContext);

    return (
    <>
    <div id="page-search-results">
        <main>
            <div className="cards">
                {event.map(events => {
                    return (
                        <div className="card" key={events.id}>
                            <img src={events.image} alt="banner"/>
                            <h1>{events.name}</h1>
                            <h2>
                                {new Intl.DateTimeFormat('pt-BR', {
                                    day: '2-digit',
                                    month: 'long',
                                    year: 'numeric'
                                }).format(
                                    new Date(events.start_date)
                                )}
                            </h2>
                            <p>{events.city}</p>
                            <p>{events.state}</p>
                            <h4>
                                {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(events.price)}
                            </h4>
                            <div className='button'>
                                <button>Comprar</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </main>

    </div>
    </>
    )
}