import React from "react"
import Formularios from './Forms'
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



export function Modificar(){  
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
        <h2 style={styles.h2Styles}>Modificar Producto</h2>             
             <Formularios/>
      </div>
  )
}

export function Eliminar(){
  const onSubmit = async(data)=>{
      console.log("Form",data)
      try{
        const document = await firebase.db.collection("Productos")
        .delete({
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
        <h2 style={styles.h2Styles}>Eliminar Producto</h2>             
             <Formularios/>
      </div>
  )
}