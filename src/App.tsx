import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
