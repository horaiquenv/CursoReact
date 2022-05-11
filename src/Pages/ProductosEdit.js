import React from 'react'
import {Nav,Container} from 'react-bootstrap'
import {Agregar,Modificar} from '../Components/Forms'

const styles = {
	formStyles: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		marginTop: '5%'
	},
  h2Styles: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		marginTop: '5%'    
	} 
}

function ProductosEdit(){
    return(
      <div>
        <h2 style={styles.h2Styles}>Modificar Lista de Productos</h2>
		<Nav>
			<Container>
			<Nav.Item>
			    <Agregar/>
			</Nav.Item>
			</Container>
			<Container>
			<Nav.Item>
			    <Modificar/>
			</Nav.Item>
			</Container>			
		</Nav>
                         
      </div>
  )
}

export default ProductosEdit