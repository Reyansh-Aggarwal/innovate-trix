import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFound } from "./pages/NotFound.tsx";
import { Home } from "./pages/Home.tsx";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route index element={<Home />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
