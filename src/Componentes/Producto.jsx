import React from "react"
import {Link} from "react-router-dom"
import {Card,Button,Col} from 'react-bootstrap'

const style = {
    card:{ width: '18rem' }
}
function Producto(props){
    const {data} = props
   

    return(
        <Col>
            <Card style={style.card}>
                <Card.Img variant="top" src={data.thumbnail} />
                <Card.Body>
                    <Card.Title>{data.title}</Card.Title>
                    <Card.Text>
                        $ {data.price}
                    </Card.Text>
                    <Button as={Link} to={'/producto/'+data.id} variant="primary">Ver Detalle</Button>
                    <div>
                        <p>{data.title}</p>
                        <p>$ {data.price}</p>
                        <Button  variant="success">Comprar</Button>{''}
                     </div>
                    
                </Card.Body>
            </Card>
        </Col>
            
    )
}
export default Producto