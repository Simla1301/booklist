import React from 'react'

const NavBar = () => {
    return (
        <div>
            <div >
                <ul className='row text-center nav-tabs bg-dark p-3'>
                    <li className='list-unstyled col-2'>
                        <a href='' className='text-white text-decoration-none'>Home</a>
                    </li>
                    <li className='list-unstyled col-2'>
                        <a href='' className='text-white text-decoration-none'>Categories</a>
                    </li>
                    <li className='list-unstyled col-2 '>
                        <a href='' className='text-white text-decoration-none'>Blogs</a>
                    </li>
                    <li className='list-unstyled col-2'>
                        <a href='' className='text-white text-decoration-none'>New Arrivals</a>
                    </li>
                    <li className='list-unstyled col-2'>
                        <a href='' className='text-white text-decoration-none'>Cart</a>
                    </li>
                    <form className="d-flex col-2" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </ul>
            </div>
        </div>
    )
}

export default NavBar
