import { Button, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from "../data/items.json"
import { formatCurrency } from "../utilities/formatCurrency"
import ".././index.css"

type CartItemProps = {
  id: number
}

export function CartItem({ id }: CartItemProps) {  
 const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart()
  const quantity = getItemQuantity(id)

  type Cart = {
    quantity: number
    price: number
    imgUrl: string
    name: string  
  }

  const item = storeItems.find(i => i.id === id)
  if (item == null) return null
  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">    
        <div className=" fs-5 d-flex  align-items-center flex-row">       
      <img
        src={item.imgUrl}
        style={{ width: "100px", height: "75px", objectFit: "cover" }} 
      />      
        <span className="img-span d-flex"> {item.name}{" "} </span>
    </div>
      <div className="d-flex-inline">
             <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: "1rem" }}
              >
                <Button className="button-secondary btn-sm" onClick={() => decreaseCartQuantity(id)}>-</Button>
            <div className="fs-7 d-flex align-items-center flex-colum">
              
              <span>{quantity} </span><span style={{fontSize:"10px"}}> </span>
                </div>
                <Button className="button-secondary btn-sm" onClick={() => increaseCartQuantity(id)}>+</Button>
              </div>      
            </div>
      </div>
      <div className="py-3">  <span className="p-3">Prijs:</span><span className="p-1" style={{fontSize:"10px"}}> </span> {formatCurrency(item.price * quantity)}</div>
    </Stack>
  )
}
