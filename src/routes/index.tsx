import { BrowserRouter, Route, Routes } from "react-router-dom";
import BuyTicket from "../pages/BuyTicket";
import Home from "../pages/Home";
import CreateEvent from "../pages/CreateEvent";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-event" element={<CreateEvent />} />
        <Route path="/event" element={<BuyTicket />} />
      </Routes>
    </BrowserRouter>
  );
};
