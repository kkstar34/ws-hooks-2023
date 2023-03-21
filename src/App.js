
import { useState } from 'react';
import './Test.css';
import AddStudents from './components/AddStudents';
import Student from './components/Student';



function App() {
  const [students, setStudents] = useState([
    {
      id : 1,
      name : "Axel Tanh",
      job : "Dev"
    },

    {
      id : 2,
      name : "Lucas David",
      job : "Developer"
    },

    {
      id : 3,
      name : "Bi Samuel",
      job : "Dev web"
    },
    
  ]);

  const [name, setName] = useState('');
  const [job, setJob] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if(name && job){
      let newStudents = [...students];
      newStudents.push({
        name : name,
        job : job
      })
      setStudents(newStudents);
      setJob("");
      setName("");
    }
  }

  const handleChangeName = (event) => {
      setName(event.target.value)
  }

  const handleChangeJob = (event) => {
    setJob(event.target.value)
  }

  const handleDelete = (id) => {
    let index = students.findIndex((student) => student.id == id);
    let newStudents = [...students];
    newStudents.splice(index, 1)
    setStudents(newStudents);
  }
   
  return (
      <div className="container">
          <AddStudents   handleSubmit={handleSubmit} handleChangeName={handleChangeName} handleChangeJob={handleChangeJob}/>
          {students.map((student) => {
              return (
                <Student key={student.id} student={student} handleDelete={handleDelete}/>
              )
            })
          }
      </div>
  );
}


export default App;
