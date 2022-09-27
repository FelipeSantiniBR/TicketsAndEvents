import { Router } from "./routes";
import { EventsProvider } from "./Context";

function App() {
  return (
    <EventsProvider>
      <Router />
    </EventsProvider>
  );
}

export default App;