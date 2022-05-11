import '../App.css'
import React, {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {getProducto} from '../Service/Producto Service'

function Detalle(){
    const {id}= useParams()
    const [producto,setProducto]=useState({})
    const [cargando,setCargando]=useState(true)
    const [mensaje,setMensaje]=useState("")
    
    const handleCompra=()=>{
        setMensaje('Gracias por su compra')
    }
    useEffect(
        ()=>{
            const request = async ()=>{
                try{
                  setCargando(true)
                  const response = await getProducto(id)
                  console.log('response',response)
                  setProducto(response.data)
                  setCargando(false)                 
                 }catch(e){
                      console.log(e)
                      setCargando(false)
                 }
              }
                 request()
        },
        [id]
    )
    if(cargando){
        return(
            <div>
                Cargando ...
            </div>    
        )
    } else {
        return(
          <div>
              <h2>{producto.title}</h2>              
              <h3>Precio</h3>
              <p>{"$"+ producto.price}</p>
              <h3>Cantidad disponible</h3>
              <p>{producto.initial_quantity}</p>
              <h3>Estado</h3>
              <p>{producto.condition}</p>
              <button onClick={handleCompra}>Comprar</button>
              <div>
                  {producto.pictures.map(picture=><img src={picture.url} alt=""/>)}
              </div>
              <p>{mensaje}</p>
          </div>
    )
  }
}
export default Detalle