import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { NotFound } from "./pages/NotFound.tsx";
import { Home } from "./pages/Home.tsx";
import { Album } from "./pages/Album.tsx";
import { Graduation } from "./components/albums/Graduation.tsx";
import { MBDTF } from "./components/albums/MBDTF.tsx";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route index element={<Home />} />
          <Route path="/album" element={<Album />}>
            <Route index element={<Navigate to="graduation" replace />} />
            <Route path="graduation" element={<Graduation />} />
            <Route path="mbdtf" element={<MBDTF />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
