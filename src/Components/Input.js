import React from 'react'
import { Form } from 'react-bootstrap'

const styles={
  inputStyles:{
    textAlign: 'center',
    background: '#66aabf',
    margin: '5px'
  },
  formStyles: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
    
	
	}
}

function Input(props){
    const {type,placeholder,name,register} = props
    return(
        <>
          <Form.Group className="mb-3" controlId="formBasicEmail" style={styles.formStyles}>
             <Form.Control type={type || "text"} name={name || ""} placeholder={placeholder} {...register} style={styles.inputStyles}/>
          </Form.Group>
        </>
    )

}

export default Input
