import { AiOutlineShoppingCart,AiOutlineUserAdd } from 'react-icons/ai'
import { FiHeart } from 'react-icons/fi'
import './Nav.css'

function Nav({handleInputChange,query}) {
  return <nav>
    <div className='nav-container'>
      <input 
      className='search-input'
      type='text'
      onChange={handleInputChange}
      value={query} 
      placeholder='Search....'
      />
    </div>

    <div className='profile-container'>
      <a href='#'>
        <FiHeart className='nav-icons'/>
      </a>

      <a href='#'>
        <AiOutlineShoppingCart className='nav-icons'></AiOutlineShoppingCart>
      </a>

      <a href='#'>
        <AiOutlineUserAdd className='nav-icons'></AiOutlineUserAdd>
      </a>


    </div>
  </nav>
}

export default Nav