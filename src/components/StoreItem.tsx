import { Button, Card } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utilities/formatCurrency"
import ".././index.css"

type StoreItemProps = {
  id: number
  price: number
  imgUrl: string
  name: string  
}

export function StoreItem({id, price, imgUrl, name }: StoreItemProps) {
  const { 
    increaseCartQuantity,
  } = useShoppingCart()

  return (
    <Card className="h-100 d-lg-flex align-items-center justify-content-center" style={{ maxWidth: "400px", border: "1px solid rgba(13,110,253,.15)" }}>
      <Card.Img
        variant="top"
        src={imgUrl}
        height="300px"
        style={{ objectFit: "cover", maxWidth: "400px" }}
      />
      <Card.Body className="d-lg-flex-inlineflex-row" >
        <Card.Title className="d-lg-flex justify-content-center align-items-center mb-4 p-4">
          <span className="fs-5">{name}</span><br></br>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">  
            <Button className="w-100 btn-secondary" onClick={() => increaseCartQuantity(id)}>
              Voeg toe
            </Button>       
        </div>
      </Card.Body>
    </Card>
  )
}
