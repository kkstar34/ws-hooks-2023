import React from 'react'

function Student({student, handleDelete}) {
   
  return (
    <div>
        <h3>Nom : {student.name}</h3>
        <h3>Activité : {student.job}</h3>
        <button onClick={()=>{handleDelete(student.id)}}>X</button>  
        <hr />
    </div>
  )
}

export default Student