import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage';
import DetailSurah from './pages/DetailSurah';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<Homepage />} />
          <Route path="/detail-surah/:surah" element={<DetailSurah />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
