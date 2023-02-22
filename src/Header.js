import React from "react"

function Header(selectedTeam, teamMemberCount) {
  
    return (
      <main className="container">
          <div className="justify-content-center mt-0 mb-2">
            <div className="header">
            <h1  className="header">Team Member Allocation</h1>
            <h5 className="justify-content-center mt-1 mb-2">{selectedTeam} has {teamMemberCount} Members.</h5>
            </div>
          </div>  
      </main>
    )
  }
  
  export default Header
