// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/useCart'
import { useSearch } from '../context/useSearch'
export const Navbar = () => {
    const { search, setSearch } = useSearch()
    const { cartItems } = useCart()

  return (
    <>
        <div className="navSection">
        <div className="title">
            <h2>E-Comm Store</h2>
        </div>
        <div className="search">
            <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
            />
        </div>
        <div className="user">
           <div className="user-detail">
                SignIN/SignUp
            </div>
        </div>
        <div>
           <Link to='/cart'>
                <div className="cart">
                    Cart
                    <span>{cartItems.length}</span>
                </div>
           </Link>
        </div>
    </div>
    {/* <div className="subMenu">
        <ul>
            <Link to='/phones'><li>Phones</li></Link>
            <Link to='/laptops'><li>Laptops</li></Link>
            <Link to='/cameras'><li>Cameras</li></Link>
            <Link to='/headphones'><li>Headphones</li></Link>
            <Link to='/watches'><li>Watches</li></Link>
        </ul>
    </div> */}
    
    </>
    
  )
}
export default Navbar
 