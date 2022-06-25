import { Routes, Route, Navigate } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Winkel } from "./pages/Winkel"
import { Navbar } from "./components/Navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>   
          <Route path="/winkel-app" element={<Winkel />} />
          <Route path="/*" element={<Navigate to="/winkel-app" />}  />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  )
}

export default App
