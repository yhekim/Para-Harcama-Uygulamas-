import React from 'react'
import "./Header.css";
import { moneyFormat } from '../helper';

const Header = ({money,total}) => {
    console.log(total);
    return (
        <>
        <div class="header">
        <br />
        
           
               {total > 0 && money-total !== 0  && (
                <h4>Harcamak için <span>{moneyFormat(money-total)} $</span> paranız kaldı</h4>
               )}
               {total === 0 && (
                <h4>Harcamak için <span>{moneyFormat(money)} $</span> paranız kaldı</h4>
               )}
               {money-total === 0 && (
                <h4>Paran bitti,Parasız insan boş İnsan</h4>
               )}
               
             <br />
   {/* eğer burada css yazılıcaksa bu şekilde yazılır */}
             {/* <style jsx>{'
             .header{

             }
                 
             '}

             </style> */}
           
        </div>
        </>
       
    )
}

export default Header;
