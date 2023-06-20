import React from 'react'
import CartButton from './cartButton'
import PreviewButton from './previewButton'

const ButtonsGroup = () => {
  return (
    <div className='d-flex gap-5'>
      <CartButton/>
      <PreviewButton/>
    </div>
  )
}

export default ButtonsGroup
