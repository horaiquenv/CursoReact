import React from "react"
import Input from '../Components/Input'
import {Form,Button} from 'react-bootstrap'
import {useForm} from 'react-hook-form'
import firebase from '../config/firebase'

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

function Registro(){
  const {register, handleSubmit, formState: {errors}} = useForm()
  const onSubmit = async(data)=>{
      console.log("Form",data)
      try{
        const responseUser = await firebase.auth.createUserWithEmailAndPassword(data.email,data.password)
        console.log("responseUser", responseUser)
          if(responseUser.user.uid){
            const doc = await firebase.db.collection("usuarios")
            .add({
              Nombre:data.nombre,
              Apellido:data.apellido,
              userId:responseUser.user.uid
            })
            console.log("doc",doc)
            }
        }catch(e){
          console.log(e)
        }
      }

    return(
      <div>
        <h2 style={styles.h2Styles}>Registrate</h2>
          <Form onSubmit={handleSubmit(onSubmit)} style={styles.formStyles}>             
              <Input placeholder="Nombre" type="text" register={{...register("nombre",{required:true})}}/>
                {errors.nombre && <span>El campo es obligatorio</span>}
              <Input placeholder="Apellido" type="text" register={{...register("apellido",{required:true})}}/>
                {errors.apellido && <span>El campo es obligatorio</span>}
              <Input placeholder="email@email.com" type="email" register={{...register("email",{required:true})}}/>
                {errors.email && <span>El campo es obligatorio</span>}
              <Input placeholder="Contraseña" type="password" register={{...register("password",{required:true})}}/>
                {errors.password && <span>El campo es obligatorio</span>}
              <Input placeholder="Confirmar Contraseña"type="password" register={{...register("password",{required:true})}}/>
                {errors.password && <span>El campo es obligatorio</span>}    
              <Button type="submit">Registrarme</Button>
          </Form>
      </div>
  )
}


export default Registro