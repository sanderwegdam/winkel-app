import { Col, Row } from "react-bootstrap"
import { StoreItem } from "../components/StoreItem"
import storeItems from "../data/items.json"

export function Winkel() {
  return (
    <>
      <Row md={2} xs={1} lg={3} className="g-5 d-flex justify-content-center align-items-center">
        {storeItems.map(item => (
          <Col  className="g-5 d-flex justify-content-center align-items-center p-3" key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  )
}
