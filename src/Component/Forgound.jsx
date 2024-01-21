// import React, { useState } from 'react'

// function Forgound() {
//    const [height, setHeight] = useState('')
//    const [weight, setWeight] = useState('')
//    const [bmi, setBmi] = useState("bmi calculater")
//    const [status, setStatus] = useState("")
   
//   const [mystyle, setMystyle] = useState({
//     color : 'red'
//   })

//    const calcute =()=>{
//     const hei2 = height /100;
//     const result = (weight/(hei2*hei2)).toFixed(2);
//     setBmi(result)
//     let bmistatus = "";
//     if(result < 18.5 ){
//       bmistatus = "uderweight";
//      setMystyle ({
//       color : 'green'
//      })
//     }
//     else if(result >= 18.5 && result <= 24.9){
//       bmistatus = "Healthy";
      
//     }
//     else if(result >= 25 && result <= 29.9){
//       bmistatus = "Overweight"
//     }
//     else{
//       bmistatus ="Obese"
//     }
//     setStatus(bmistatus)
//    }
//    const onsubmit=(stik)=>{
//     stik.preventDefault();
//    }
//   return (
//     <>
//     <div className='fixed  w-full h-screen bg-yellow text-white  top-0 left-0 '>

//         <div className='w-[351px]   border flex item-center justify-center rounded-[10px]  relative top-20  left-8' >
          
//         <form onSubmit={onsubmit} >
//             <h2 className='my-4 text-center uppercase font-xl' >{bmi} {status}</h2>
//   <div className="mb-3">
//     <label htmlFor="exampleInputEmail1" className="form-label">Height</label>
//     <input type="number" value={height}  onChange={(e)=>{setHeight(e.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
   
//   </div>
//   <div className="mb-3">
//     <label htmlFor="exampleInputPassword1" className="form-label">Weight</label>
//     <input type="number" value={weight} onChange={(e)=>{setWeight(e.target.value)}} className="form-control" id="exampleInputPassword1"/>
//   </div>
  
//   <button type="submit" disabled={!weight || !height} onClick={calcute} className="btn btn-primary my-2">Submit</button>
// </form>
//         </div>
//     </div>

//     </>
//   )
// }

// export default Forgound