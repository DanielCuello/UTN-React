import React from "react"
import Productos from '../Componentes/Productos'
import firebase from '../Config/firebase'

function Home(){
    
    console.log(firebase)
    return(
        <div className="">
            <Productos />
         </div>
    )
    
} 

export default Home