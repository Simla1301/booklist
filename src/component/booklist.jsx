import React from 'react'
import { books } from '../data/books'
// import CartButton from './buttons/cartButton'
// import PreviewButton from './buttons/previewButton'
import ButtonsGroup from './buttons/buttonsGroup'


const Booklist = () => {
  return (
    <div style={{display: 'flex'}}>
        {
            books.map((book) => {
                return (
                    <div className='p-5 text-center'>
                       <img src={book.img} style={{width: '400px' }}/>
                       <h3> {book.title}</h3>
                       <p>{book.author}</p>
                       <div className='d-flex gap-5 justify-content-center'>
                        <ButtonsGroup/>
                       {/* <CartButton title = {book.title}/>
                       <PreviewButton/> */}
                       </div>
                    </div>
                )
            })
        }
      
    </div>
  )
}

export default Booklist
