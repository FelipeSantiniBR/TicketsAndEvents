import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "./services/api";

interface Event {
  id: number;
  image: string;
  name: string;
  title: string;
  start_date: string;
  state: string;
  city: string;
  description: string;
  price: number;
}

type EventInput = Omit<Event, "id">;

interface EventsProviderProps {
  children: ReactNode;
}

interface EventsContextData {
  event: Event[];
  createEvent: (event: EventInput) => Promise<void>;
}

export const EventsContext = createContext<EventsContextData>(
  {} as EventsContextData
);

export function EventsProvider({ children }: EventsProviderProps) {
  const [event, setEvent] = useState<Event[]>([]);

  useEffect(() => {
    api.get("/event").then((response) => setEvent(response.data));
  }, []);

  async function createEvent(EventInput: EventInput) {
    const response = await api.post("/event", {
      ...EventInput,
      start_date: Date.now(),
    });
    const { events } = response.data;

    setEvent([...event, events]);
  }

  return (
    <EventsContext.Provider value={{ event, createEvent }}>
      {children}
    </EventsContext.Provider>
  );
}

export function useEvent() {
    const context = useContext(EventsContext);
    return context;
  }