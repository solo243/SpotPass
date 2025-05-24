import React from "react";
import BookingSection from "./Screens/BookingTicketScreen";
import EventDetail from "./Screens/EventDetailScreen";
import Home from "./Screens/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllEventScreen from "./Screens/AllEventScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import NavBar from "./Components/NavBar.jsx/NavBar";
import OrgProfileScreen from "./Screens/OrgProfileScreen";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <NavBar />
        <main className="flex-1   mx-auto w-full overflow-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/allevents" element={<AllEventScreen />} />
            <Route path="/event/:eventName" element={<EventDetail />} />
            <Route
              path="/event/:eventName/tickets"
              element={<BookingSection />}
            />
            <Route path="/org" element={<OrgProfileScreen />} />
          </Routes>
        </main>
      </div>
    </Router>
    // <div>
    //   <ScreenPlay />
    // </div>
  );
}

export default App;
