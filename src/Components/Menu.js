import {Link} from 'react-router-dom'
import React from 'react'
import {Nav} from 'react-bootstrap'

const styles={
    navStyle:{
        textAlighn: ""
    }
}
function Menu(){
    return(
        <Nav variant="tabs" defaultActiveKey="/" style={styles.navStyle}>
            <Nav.Item>
              <Nav.Link><Link to='/'>Home</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link><Link to='/form'>Registrarme</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link><Link to='/login'>Ingresar</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link><Link to='/productos/edit'>Editar Catalogo</Link></Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default Menu