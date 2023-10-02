import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import Home from "./pages/Home";
import ArticlesDetails from "./pages/ArticlesDetails";
import Form from "./pages/Form";
import Articles from "./pages/Articles";

function App() {
  return (
    <>
      {/* Main Container */}
      <div>
        <Routes>
          <Route path="/articlesDetails" element={<ArticlesDetails />} />
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/home" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
