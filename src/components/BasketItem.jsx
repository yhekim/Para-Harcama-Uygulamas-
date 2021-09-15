import React from 'react'

const BasketItem = ({item,product}) => {
    return (
        <div>
           <br />
           <li className="basket-item">
           {product.title } X <span>{item.amount}</span> 
           </li>
           
            <style jsx>{`
    .basket-item{
        padding-bottom:px;
        font-size:17px;
        font-weight:bold;
        color:red;

    }
    .basket-item span{
        color:#999
    }
           
            `}</style>
            
        </div>
    )
}

export default BasketItem; 