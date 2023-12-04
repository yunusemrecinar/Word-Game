import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout.js";
import Home from "./Components/Home/Home.js";
import Contact from "./Components/Contact/Contact.js";
import NoPage from "./Components/NoPage/NoPage.js";
import TheRichDad from "./Components/TheRichDad/TheRichDad.js"
import ThinkAndGrowRich from "./Components/ThinkAndGrowRich/ThinkAndGrowRich.js"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="therichdad" element={<TheRichDad />} />
          <Route path="thinkandgrowrich" element={<ThinkAndGrowRich />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
