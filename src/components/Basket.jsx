import React from 'react'
import BasketItem from './BasketItem';
import "./Basket.css";


const Basket = ({basket,resetBasket, products,total}) => {
    return (
        <div className="container basket-container">
            <h2>Alışveriş Detayları</h2>
            <ul>
            {
                basket.map((item)=>(
                <div>
                  <BasketItem item={item} total={total} product={products.find(p=>p.id===item.id)}/>
                
                  
                </div>
            ))
        }
            </ul>
        
        
        <br />
        <div className="total">
            <h3>Toplam: {total} $</h3>
            <br />
        </div>
        <div>
        <button className="basket-reset" onClick={resetBasket}>Sıfırla</button>
        </div>
        </div>
          
        
    )
}

export default Basket;