import Header from "./components/Header";
import Basket from "./components/Basket";
import React,{useState,useEffect} from "react";
import products from "./products.json";
import { Product } from "./components/Product";
import "./index.css";

const App=()=>{
    const [money,setMoney]=useState(100000);
    const [basket,setBasket]=useState([]);
    const [total,setTotal]=useState();

    const resetBasket=()=>{
        setBasket([])
    }

    useEffect(()=>{
        setTotal(basket.reduce((acc,item)=>{
            return acc+(item.amount*(products.find(product=>product.id===item.id).price))},0))
         

    },[basket])

    return(
        <div>
            <Header total={total} money={money}/>

            <div className="container productss">
            {products.map((product)=>(
                <Product key={product.key} product={product} money={money} total={total} basket={basket} setBasket={setBasket}/>
                
            ))}
            </div>
            
            {
                total > 0 && (
                    <Basket total={total} resetBasket={resetBasket} basket={basket} products={products}/>
                    

                )
            }
            
            
            
        </div>
    ) 
}

export default App;