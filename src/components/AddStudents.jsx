import React from 'react'

function AddStudents({handleSubmit, handleChangeName, handleChangeJob}) {
  return (
    <div className="form-container">
        <form action=""  onSubmit={handleSubmit}>
        <input type="text" placeholder="ajouter un ..." className="form-control"   onChange={handleChangeName}/>
        <input type="text" placeholder="job" className="form-control"  onChange={handleChangeJob} />
        <input type="submit" className='btn' value="Ajouter"  onClick={handleSubmit}/>
        </form>
    </div>
  )
}

export default AddStudents