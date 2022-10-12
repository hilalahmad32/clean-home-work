import Home from "./screens/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";

import "swiper/css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./screens/About-us/About-us";
import PrivicayPolicy from "./screens/PrivicayPolicy/PrivicayPolicy";
import TermsCondition from "./Compnents/TermsCondition/TermsCondition";
import Account from "./screens/Account/Account";
import Booking from "./screens/Booking/Booking";
import Help from "./screens/Help/Help";
import Plumbing from "./screens/Plumbing/Plumbing";
import ServicesDetails from "./screens/ServicesDetails/ServicesDetails";
import CheckOut from "./screens/CheckOut/CheckOut";
import BookingConfirmed from "./screens/BookingConfirmed/BookingConfirmed";
import BookingDetails from "./screens/BookingDetails/BookingDetails";
import Address from "./screens/Address/Address";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
            <Route path="/about-us" element={<AboutUs />}></Route>
            <Route path="/privica-policy" element={<PrivicayPolicy />}></Route>
            <Route path="/terms-condition" element={<TermsCondition />}></Route>
            <Route path="/account" element={<Account />}></Route>
            <Route path="/booking" element={<Booking />}></Route>
            <Route path="/help" element={<Help />}></Route>
            <Route path="/plumbing" element={<Plumbing />}></Route>
            <Route path="/services-details" element={<ServicesDetails />}></Route>
            <Route path="/check-out" element={<CheckOut />}></Route>
            <Route path="/booking-confirmed" element={<BookingConfirmed />}></Route>
            <Route path="/booking-details" element={<BookingDetails />}></Route>
            <Route path="/address" element={<Address />}></Route>
          
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
