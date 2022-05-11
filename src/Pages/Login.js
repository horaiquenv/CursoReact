import React from "react"
import {Form,Button} from 'react-bootstrap'
import {useForm} from 'react-hook-form'
import Input from "../Components/Input"
import firebase from "../config/firebase"

const styles = {
	divStyles: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		width: '70%',
		marginTop: '10%',
        marginLeft: '15%',
        
        padding: '20px 25px',
	},
    h2Styles:{
        borderRadius:"4px",
        background:'#66bfbf',
        height: "50px",
        padding: '10px'
    },
    inputStyles:{
        textAlign: 'center',
        background: '#66aabf',
        margin: '5px'
    }
}

function Login(){
    const {register,handleSubmit,formState:{errors}}=useForm()
    const onSubmit = async (data)=>{
        console.log("Form",data)
        try{
           const responseUser = await firebase.auth.signInWithEmailAndPassword(data.email,data.password)
            console.log("responseUser",responseUser.user.uid)
        }catch(e){
            console.log(e)
        }
    }
    return(
        <div style={styles.divStyles}>
            <h2 style={styles.h2Styles}>Bienvenido</h2>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Input placeholder="email@email.com" type="email" register={{...register("email",{required:true})}} style={styles.inputStyles}/>
                      {errors.email && <span>El campo es obligatorio</span>}
                    <Input placeholder="Contraseña" type="password" register={{...register("password",{required:true})}} style={styles.inputStyles}/>
                      {errors.password && <span>El campo es obligatorio</span>}
                    <Button type="submit" variant="primary">Ingresar</Button>
                </Form>
                          
        </div>
    )
}

export default Login