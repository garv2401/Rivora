import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Category.css'

const Category = () => {
  const [activeLink, setActiveLink] = useState(null); // Track the active link

  return (
    <div className='categories'>
      <ul>
        <li>
          <Link 
            to='/casual' 
            onClick={() => setActiveLink('casual')} // Set active link to 'casual'
            className={activeLink === 'casual' ? 'Blacktxt' : ''}
          >
            Casual
          </Link>
        </li>
        <li>
          <Link 
            to='/ethnic' 
            onClick={() => setActiveLink('ethnic')} // Set active link to 'ethnic'
            className={activeLink === 'ethnic' ? 'Blacktxt' : ''}
          >
            Ethnic
          </Link>
        </li>
        <li>
          <Link 
            to='/formal' 
            onClick={() => setActiveLink('formal')} // Set active link to 'formal'
            className={activeLink === 'formal' ? 'Blacktxt' : ''}
          >
            Formal
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Category;
