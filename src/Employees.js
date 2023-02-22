import React from "react"
import female from "./images/female.jpg"
import male from "./images/male.jpg"

function Employees({handleSelectedTeamChange, handleCardClick, selectedTeam, employees}) {
  return (
<main className="container">
  <select className="form-control form-control-lg mt-3" onChange={handleSelectedTeamChange}>
    <option value="Team A">Team A</option>
    <option value="Team B">Team B</option>
    <option value="Team C">Team C</option>
    <option value="Team D">Team D</option>
  </select>
    <div className="row justify-content-center mt-3 mb-2">
        <div className="col-9">
            <div className="card-collection">
                {
                   employees.map((emp)=>{
                    return (
                        <div id={emp.id}  className= {(emp.teamName === selectedTeam) ? "card m-2 selected" : "mx-2 my-2"} onClick={handleCardClick}
                         style={{cursor:'pointer'}}>
                 {(emp.gender === "male")
                         ? <img src={male} alt="male" className="card-img-top" />
                         : <img src={female} alt="female" className="card-img-top" /> }
                        <div className="car-body">
                            <div className="card-title mt-1">
                                <h5 style={{textAlign:'center'}}>Full Name: {emp.fullname}</h5>                          
                            </div>
                            <div className="card-text">
                                <p className="text-danger text-center"><b>Designation: {emp.designation}</b></p>
                            </div>
                        </div>
                        </div>
                    )
                   }) 
                }   
            </div>
        </div>
    </div>
</main>
)
  
}

export default Employees
