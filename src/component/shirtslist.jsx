import React from "react";
import { Shirts } from "../data/shirts";
import CartButton from './buttons/cartButton'
import PreviewButton from './buttons/previewButton'


const Shirtlist = () => {
    return(
        <div style={{display: 'flex'}}className="text-center">
            {
                Shirts.map((shirt) => {
                    return (
                        <div className=" p-5"> 
                            <img src={shirt.img} style={{width: '400px',height: '400px',}}/>
                            <h3>{shirt.title}</h3>
                            <div className='d-flex gap-5 justify-content-center' >
                       <CartButton title={shirt.title}/>
                       <PreviewButton/>
                       </div>
                        </div>

                    )

                })
            }
            
        </div>
    )
}
export default Shirtlist