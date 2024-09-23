import React from 'react'

export const NewComponent = () => {

const books = [
    "harry Potter 1",
    "harry Potter 2",
    "harry Potter 3",
    "harry Potter 4",
    "harry Potter 5",
    "harry Potter 6",
    "harry Potter 7"
]


//condicion ? (si_verdadero) : (si_falso)



  return (
    <>
    <h1>NewComponent</h1>
    <div>
        <ul>


         {books.length >= 1 ?

               (
                books.map((book, index) =>{
                    return <li key ={index}>{book}</li>
                })) : (

                    <p>no existen libros</p>
                )
            }       
        </ul>


    </div>

    </>
  )
}
