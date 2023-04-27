import { Routes, Route } from "react-router-dom";
import { Header } from "./component/Header";
import './App.css';
import { HomePage } from "./pages/HomePage";
import {
  VideoPage
} from "./pages/VideoPage";
import { LikedVideo } from "./pages/LikedVideo";
import { WatchLater } from "./pages/WatchLater"
import { Individual } from "./pages/Individual";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/videos" element={<VideoPage />} />
          <Route path="/liked" element={<LikedVideo />} />
          <Route path="/watchLater" element={<WatchLater />} />
          <Route path="/individual/:videoID" element={<Individual />} />
        </Routes>


      </header>
    </div>
  );
}

export default App;
