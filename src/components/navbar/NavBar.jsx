import React from "react";
// FONT AWESOME ICONS v5
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(fab, faGithub)

const NavBar = () => {
  return (
    <nav className="navbar navbar-light bg-light justify-content-between">
        <a className="navbar-brand" href="/">Employee Directory</a>
        <a className="nav-link active" href="https://github.com/WasteOfADrumBum/hw-19-employee-directory">
            <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: 'black' }} />
        </a>
    </nav>
  );
};

export default NavBar;