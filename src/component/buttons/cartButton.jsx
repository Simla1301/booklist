import React from 'react'

const CartButton = (props) => {
    console.log(props)
  return (
    <div >
        
      <button className='bg-danger ' >Add {props.title}To Cart</button>
    </div>
  )
}

export default CartButton
