import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import PageNotFoundPage from "./pages/PageNotFoundPage";
import HomePage from "./pages/HomePage";
import VideoPage from "./pages/VideoPage";
import ChannelPage from "./pages/ChannelPage";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Popup from "./components/Popup";
import { useContext } from "react";
import ToolContext from "./contexts/toolContext";
import ResultsPage from "./pages/ResultsPage";
function App() {
  const { toolVal } = useContext(ToolContext);
  return (
    <>
      <Router>
        <div className="h-screen overflow-hidden flex flex-col relative">
          <Header />
          <div className="flex overflow-hidden">
            <Sidebar />
            <div className="flex-1 overflow-auto scrollable-element">
              <Routes>
                <Route path="/" exact element={<HomePage />} />
                <Route path="/watch" element={<VideoPage />} />
                <Route path="/channel/:id" element={<ChannelPage />} />
                <Route path="/results" element={<ResultsPage />} />
                <Route path="*" element={<PageNotFoundPage />} />
              </Routes>
            </div>
          </div>

          {toolVal.showPopup && <Popup />}
        </div>
      </Router>
    </>
  );
}

export default App;
