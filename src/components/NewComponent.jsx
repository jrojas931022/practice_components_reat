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

  return (
    <>
    <h1>NewComponent</h1>
    <div>
        <ul>
            {
                books.map((book, index) =>{
                    return <li key ={index}>{book}</li>
                })
            }
        
        </ul>

    </div>

    </>
  )
}
