import React, {useEffect, useState} from "react"
import Producto from './Producto'
import {getAllProductos} from "../Service/productosService"
import {Row, Container} from 'react-bootstrap'

const styles = {
	divStyles: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		marginTop: '2%',
	},
  containerStyles: {
		background: 'rgba(0,150,150)',
		borderRadius: '4px',
		display: 'flex',
		flexWrap: 'wrap',
		alignItems: 'center',
		justifyContent: 'center',
		width: '60%',
		minWidth: '300px',
		padding: '20px 25px',
  },
  h1Styles: {
		display: 'flex',
		flexWrap: 'wrap',
		alignItems: 'center',
		justifyContent: 'center',
		width: '60%',
		minWidth: '300px',
		padding: '20px 25px',
  }
} 
function Productos(){
  const [cargando,setCargando]=useState(true)
  const [productos,setProductos]=useState([])  
  const [buscar]=useState('Ryzen')

  useEffect(
    ()=>{
      const request = async ()=>{
        try{
          setCargando(true)
          const response = await getAllProductos(buscar)
          setProductos(response.data.results)
       
          setCargando(false)
          console.log("productos",response)
         }catch(e){
              console.log(e)
              setCargando(false)
         }
      }
         request()  
    }, [buscar]
    )
    
    if(cargando){
      return(
        <div>
           Cargando ...
        </div>   
      )
    } else{
      return(
        <div style={styles.divStyles}>          
          <h1 style={styles.h1Styles}>Vazquez E-Comerce</h1>
           <Container fluid style={styles.containerStyles}>     
            <Row>
              {productos.slice(0,6).map(productos=><Producto key={productos.id} Thumbnail={productos.thumbnail} Nombre={productos.title} Precio={"$"+productos.price} Condicion={productos.condition} id={productos.id} />)}
            </Row> 
            </Container>      
        </div>      
    )
  }
}     
export default Productos