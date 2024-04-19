import { Link } from "react-router-dom";
import React, { ReactNode, useState } from "react";
import ReactDOM from 'react-dom';
import "./NavBar.css"

// interface ModalProps {
//   activeNav: boolean;
//   children: ReactNode; // Correct type for children
//   navActive: React.Dispatch<React.SetStateAction<boolean>>;
// }


// const NavBar: React.FC = () => {
//     return(
//         <>
//         <nav className="navbar navbar-expand-lg bg-body-tertiary">
//         <div className="container">
//             <Link className="navbar-brand" to={'/#'}>
//             Navigation
//             </Link>
//             <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//             >
//             <span className="navbar-toggler-icon" />
//             </button>
//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                 <li className="nav-item">
//                     <Link className="nav-link active" aria-current="page" to={'/'}>
//                         Home
//                     </Link>
//                 </li>
//                 <li className="nav-item">
//                     <Link className="nav-link" to={'/aboutpage'}>
//                         About
//                     </Link>
//                 </li>
                
//                 <li className="nav-item">
//                     <Link className="nav-link disabled" aria-disabled="true" to={'/login'}>
//                         Login
//                     </Link>
//                 </li>
                
//                 <li className="nav-item">
//                 <Link className="nav-link disabled" aria-disabled="true" to={'/registration'}>
//                     Registration
//                 </Link>
//                 </li>
                
//                 <li className="nav-item">
//                 <Link className="nav-link" to={'/list-of-companies'}>
//                     List of companies
//                 </Link>
//                 </li>
                
//                 <li className="nav-item">
//                 <Link className="nav-link" to={'/list-of-users'}>
//                     List of users
//                 </Link>
//                 </li>
                
//                 <li className="nav-item">
//                 <Link className="nav-link" to={'/company.profile'}>
//                     Company profile
//                 </Link>
//                 </li>
//             </ul>
//             </div>
//         </div>
//         </nav>
//     </>
//     )
// }

interface NavItem {
  name: string;
  link: string;
}

const NavBar: React.FC = () => {
  const items: NavItem[] = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Login', link: '/login' },
    { name: 'Registration', link: '/registration' },
    { name: 'List of companies', link: '/list-of-companies' },
    { name: 'List of users', link: '/list-of-users' },
    { name: 'Company profile', link: '/company-profile' },

       
    // add more items here
    ];

    const [selectedId, setSelectedId] = useState(-1);

  return (
    <nav>
        {items.map((item, index) => (
            <ul>
                <li className={selectedId === index ? 'list-group active' : 'list-group'} onClick={() => setSelectedId(index)}>
                    <a key={index} href={item.link}>
                    {item.name}
                    </a>
                </li>
            </ul>
      ))}
    </nav>
  );
};

export default NavBar;
