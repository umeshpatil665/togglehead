import React from 'react'
import "./Header.css"
import MenuItem from './MenuItem'
import { Search } from 'lucide-react'
const Header = () => {
  return (
        <header className="header">
      <div className="logo">LOGO</div>
      <nav className="nav">
        <MenuItem label="Qualifications" items={["Option 1", "Option 2"]} />
        <MenuItem label="Organizations" items={["Org 1", "Org 2"]} />
        <MenuItem label="Research & Analysis" items={["Report", "Survey"]} />
        <MenuItem label="Lorem ipsum" items={["Item A", "Item B"]} />
        <MenuItem label="Lorem ipsum" items={["Item C", "Item D"]} />
      </nav>
      <div className="right-section">
        <div className="search-icon"><Search/></div>
        <button className="enrol-btn">Enrolment</button>
      </div>
    </header>
  )
}

export default Header