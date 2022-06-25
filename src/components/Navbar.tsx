import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { FaShoppingCart } from "react-icons/fa"
import { CgShoppingBag } from "react-icons/cg"

export function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart()
  return (
    <NavbarBs sticky="top" className="bg-light mb-3"> 
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/winkel" as={NavLink}>
            <CgShoppingBag style={{fontSize: "2em"}} />
          </Nav.Link>
        </Nav>
        {cartQuantity >= 0 && (
          <Button
            onClick={openCart}
            style={{ width: "3rem", height: "3rem", position: "relative" }} >
              <FaShoppingCart />
            <div
              className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
              style={{
                color: "white",
                width: "1.5rem",
                height: "1.5rem",
                position: "absolute",
                bottom: 0,
                right: 0,
                transform: "translate(25%, 25%)",
              }}
            >
              {cartQuantity}
            </div>
          </Button>
        )}
      </Container>
    </NavbarBs>
  )
}
