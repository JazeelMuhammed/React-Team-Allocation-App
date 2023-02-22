import React from 'react'

function Footer() {
    var today = new Date();
  return (
    <footer className="container">
        <div className="footer">
        <h5 className="footerdata">Team Member Allocation- { today.getFullYear() }</h5>
        </div>
    </footer>
  )
}

export default Footer

