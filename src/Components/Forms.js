import React from "react"
import Input from './Input'
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

export function Agregar(){
  const {register, handleSubmit, formState: {errors}} = useForm()
  const onSubmit = async(data)=>{
      console.log("Form",data)
      try{
        const document = await firebase.db.collection("Productos")
        .add({
          Nombre:data.nombre,
          Descripcion:data.descripcion,
          Precio:data.precio,
          Stock:data.stock
        })
        console.log(document)
      }catch(e){
        console.log(e)
      }
      }

    return(
      <div>
        <h4>Agregar a la Lista</h4>
          <Form onSubmit={handleSubmit(onSubmit)} style={styles.formStyles}>             
              <Input placeholder="Nombre" type="text" register={{...register("nombre",{required:true})}}/>                 
              <Input placeholder="Descripcion" type="text" register={{...register("descripcion",{required:true})}}/>                 
              <Input placeholder="Precio" type="number" register={{...register("precio",{required:true})}}/>                 
              <Input placeholder="Stock" type="number" register={{...register("stock",{required:true})}}/>                     
              <Button type="submit">Guardar</Button>
          </Form>
      </div>
  )
}
export function Modificar(){ 
  const {register, handleSubmit, formState: {errors}} = useForm() 
  const onSubmit = async(data)=>{
      console.log("Form",data)
      try{
        const document = await firebase.db.collection("Productos")
        .update({
          Nombre:data.nombre,
          Descripcion:data.descripcion,
          Precio:data.precio,
          Stock:data.stock
        })
        console.log(document)
      }catch(e){
        console.log(e)
      }
   }
   return(
    <div>
      <h4>Modificar Producto</h4>
        <Form onSubmit={handleSubmit(onSubmit)} style={styles.formStyles}>             
            <Input placeholder="Nombre" type="text" register={{...register("nombre",{required:true})}}/>                 
            <Input placeholder="Descripcion" type="text" register={{...register("descripcion",{required:true})}}/>                 
            <Input placeholder="Precio" type="number" register={{...register("precio",{required:true})}}/>                 
            <Input placeholder="Stock" type="number" register={{...register("stock",{required:true})}}/>                     
            <Button type="submit">Guardar</Button>
        </Form>
    </div>
  )
}