import { Link } from "gatsby";
import React from "react";

const ListStyle = {
    listStyleType: "none", 
}
const ProductCard = ({ data }) => {
  const { image, title, count, price, text, url, l01, l02, l03, l04, l05  } = data;
  return (
      <>
    


<div className="single-service-three"> 
 <div class="column"> 
   <div class="post-module"> 
     <div class="thumbnail"> 
       <img src={image} alt={title}/>
     </div> 
     <div class="post-content"> 
       <h1 class="title">{title}</h1>
       <h2 class="sub_title">The city that never sleeps.</h2>
       <p class="hiiden">New York, the largest city in the U.S., is an architectural marvel with plenty of historic monuments, magnificent buildings and countless dazzling skyscrapers.</p>
       <div >   <a href="#" class="boton verde">Contactar</a></div>
     </div>
   </div>
 </div> 
</div> 

</>
  );
};

export default ProductCard;
