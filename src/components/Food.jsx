import React, { useEffect, useState } from 'react' 
import "./Style/Food.css"
const Food = () => {
    const [cart, setCart] = useState([]) 
    const handelAdd =(k)=>{
        data.forEach((e)=>{
            if(e.id === k){
                setCart(e)
                
            }
        })
    }
    console.log(cart)
    const [data , setData] = useState([])
   const  getFood = async () =>{
    try{
        const req = await fetch("https://flip-product-data.herokuapp.com/data")
        const res = await req.json()
        setData(res);
    }catch(e){
    console.log(e)        
    }
   }

   useEffect((e)=>{
    getFood()
   },[])
//    console.log(data)
  return (
        <>
        <div className='food'>
            {data.map((el)=>{
                return(
                    <>
                    <div className='box'>
                        <div className='food_img'>
                            <img style={{width:"100%", height:"100%",borderRadius:"8px 8px 0 0"}} src={el.img} alt={el.name} />
                        </div>
                        <div className='food_text'>
                            <p>{el.name}</p>
                            <p>Price : ₹{el.price}</p>
                            <div className='food_add'>
                                <button onClick={()=>{handelAdd(el.id)}}>Add Food +</button> 
                            </div>
                        </div>
                    </div>
                    </>
                )
            })}
        </div>

        </>
  )
}

export default Food