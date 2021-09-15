import React from 'react'
import "./Product.css";
import {moneyFormat}  from '../helper';


export const Product = ({product,basket,money,total,setBasket}) => {
    const addBasket=()=>{
        //daha önce diziz de aynı mal var mı yok mu
        const currentBasket=basket.find((item)=>item.id===product.id);
        const basketWithoutCurrent=basket.filter(item=>item.id!==product.id);
        const checkBasket=currentBasket;
        
        if(checkBasket){
           
            checkBasket.amount+=1;
            setBasket([...basketWithoutCurrent,checkBasket])
            

        }else{
            setBasket([...basket,{id:product.id,amount:1}])
        }
        
    }

    const removeBasket=()=>{
        const currentBasket=basket.find((item)=>item.id===product.id);
        const basketWithoutCurrent=basket.filter(item=>item.id!==product.id);
        const checkBasket=currentBasket;
       if(checkBasket.amount===0){
           setBasket([...basketWithoutCurrent])
           alert("Kasada böyle bir mal yok")

       }
       else{
        checkBasket.amount -=1;
           setBasket([...basketWithoutCurrent,checkBasket])
       }
    }

    const basketItem=basket.find((item)=>item.id===product.id);
    console.log(total,money,product.price)

 
    return (
        <div className="product">
          <img src={product.image} alt={product.title} />
            <h3 className="title">{product.title}</h3>
            <h5 className="price">{moneyFormat(product.price)} $ </h5>
            <div className="actions">
                <button className="sell-btn" disabled={!basketItem}  onClick={removeBasket}>Çıkart</button>
                <span className="amount">{basketItem ?  basketItem.amount : 0}</span>
                <button className="buy-btn" disabled={total+product.price>money} onClick={addBasket}>Ekle</button>
            </div>
        </div>
    )
}
