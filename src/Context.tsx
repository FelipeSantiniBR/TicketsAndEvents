import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "./services/api";

export interface Event {
  base64: string;
  id: number;
  file: string;
  name: string;
  title: string;
  date: string;
  time: string;
  state: string;
  city: string;
  price: number;
}

type EventInput = Omit<Event, "id">;

interface EventsProviderProps {
  children: ReactNode;
}

interface EventsContextData {
  event: Event[];
  newEvent: (event: EventInput) => Promise<void>;
  base64: string;
  setBase64: React.Dispatch<React.SetStateAction<string>>;
}

export const EventsContext = createContext<EventsContextData>(
  {} as EventsContextData
);

export function EventsProvider({ children }: EventsProviderProps) {
  const [event, setEvent] = useState<Event[]>([]);
  const [base64, setBase64] = useState<string>("");

  useEffect(() => {
    api.get("/event").then((response) => setEvent(response.data));
  }, []);

  async function newEvent(EventInput: EventInput) {
    const response = await api.post("/event", {
      ...EventInput,
      date: Date.now(),
    });
    setEvent([...event, response.data]);
  }

  return (
    <EventsContext.Provider value={{ event, newEvent, base64, setBase64 }}>
      {children}
    </EventsContext.Provider>
  );
}

export function useEvent() {
  const context = useContext(EventsContext);
  return context;
}
