import React, {useState} from "react"
import {Link} from 'react-router-dom'
import {Card, Button, Col} from 'react-bootstrap'

const styles={
    imgStyles:{
        width: "100px",
        marginLeft:'30%'
    },
    cardStyles:{
        width:'18rem',
        height:'28rem',
        marginLeft: '30px',
        padding: '20px',
        backgroundColor: 'rgba(190,190,190,.5)'
    }
}
function Producto(props){       
    const {Nombre,Precio,Condicion,id,Thumbnail}= props
    const [mensaje,setMensaje]=useState("")
    const handleCompra=()=>{
        setMensaje('Gracias por su compra')
    }
    return(
        <>
            <Col>
            <Card className="text-center" style={styles.cardStyles}>
            <Card.Img variant="top" src={Thumbnail} style={styles.imgStyles}/>
            <Card.Body>   
            <Card.Title>{Nombre}</Card.Title>
            <Card.Text>
            <p>{Precio}</p>
            <p>{Condicion}</p>           
            <Link to={'/detalle/'+id}>Detalle</Link>
            </Card.Text>
            <Button onClick={handleCompra}>Comprar</Button>
            <p>{mensaje}</p>
            </Card.Body> 
            </Card>
            </Col>
        </>
    )
}
export default Producto