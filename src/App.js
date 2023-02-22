import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from 'react';
import Employees from './Employees';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';


function App() {

  const [selectedTeam, setTeam] = useState(JSON.parse(localStorage.getItem('TeamList')) || "Team A")

  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employeeList')) || [
   
    {
        id:1,
        fullname:"Bob Jones",
        designation:"JS Developer",
        gender:"male",
        teamName:"Team A"
    },
    {
        id:2,
        fullname:"Jill Balley",
        designation:"Node Developer",
        gender:"female",
        teamName:"Team A"
    },
    {
        id:3,
        fullname:"Gall Shepherd",
        designation:"Java Developer",
        gender:"female",
        teamName:"Team A"
    },
    {
        id:4,
        fullname:"Sam Reynolds",
        designation:"React Developer",
        gender:"male",
        teamName:"Team B"
    },
    {
        id:5,
        fullname:"John Doe",
        designation:"Python Developer",
        gender:"male",
        teamName:"Team B"
    },
    {
        id:6,
        fullname:"Milley Jane",
        designation:"UI/UX Designer",
        gender:"female",
        teamName:"Team B"
    },
    {
        id:7,
        fullname:"James Bonnet",
        designation:"Angular Developer",
        gender:"male",
        teamName:"Team C"
    },
    {
        id:8,
        fullname:"Jessica Faye",
        designation:"API Developer",
        gender:"female",
        teamName:"Team C"
    },
    {
        id:9,
        fullname:"Lita Stone",
        designation:"C++ Developer",
        gender:"female",
        teamName:"Team C"
    },
    {
        id:10,
        fullname:"Daniel Young",
        designation:"MERN Developer",
        gender:"male",
        teamName:"Team D"
    },
    {
        id:11,
        fullname:"Adrian Jacob",
        designation:"Vue Developer",
        gender:"male",
        teamName:"Team D"
    },
    {
        id:12,
        fullname:"David Monroe",
        designation:"Graphic Designer",
        gender:"male",
        teamName:"Team D"
    }
]);

useEffect(()=>{
  localStorage.setItem('employeeList', JSON.stringify(employees));
},[employees]);

useEffect(()=>{
  localStorage.setItem('TeamList', JSON.stringify(selectedTeam));
},[selectedTeam]);

function handleSelectedTeamChange(event)
{
  setTeam(event.target.value);
}

function handleCardClick(event){
  setEmployees(
    employees.map((emp)=>{
    return (
      emp.id === parseInt(event.currentTarget.id)
      ? (emp.teamName === selectedTeam) ? {...emp, teamName: ""} : {...emp, teamName: selectedTeam}
      : emp
    ) 
  }));
}

return (

  <Router>
    <Header selectedTeam = {selectedTeam}
     teamMemberCount = {employees.filter((employee) => employee.teamName === selectedTeam).length} />
    
    <Routes>
      <Route path="/"
                element={
                <Employees employees={employees} 
                selectedTeam={selectedTeam}
                handleCardClick={handleCardClick}
                handleSelectedTeamChange={handleSelectedTeamChange} />
      }>
      </Route>
    </Routes>

    <Footer />
  </Router>
)
}

export default App
