import React, { useState } from 'react'


function Background() {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [bmi, setBmi] = useState("")
  const [status, setStatus] = useState('BODY MASS INDEX')
  
 const [mystyle, setMystyle] = useState({
   color : 'white'
  
 })

  const calcute =()=>{
   const hei2 = height /100;
   const result = (weight/(hei2*hei2)).toFixed(2);
   setBmi(result)
   let bmistatus = "";
   if(result < 18.5 ){
     bmistatus = "uderweight";
    setMystyle({color : '#f0190a'})
   }
   else if(result >= 18.5 && result <= 24.9){
     bmistatus = "Healthy";
     setMystyle({color : '#67f757'})
   }
   else if(result >= 25 && result <= 29.9){
     bmistatus = "Overweight"
     setMystyle({color : '#f7f12d'})
   }
   else{
     bmistatus ="Obese"
     setMystyle({color : '#ff5252'})
   }
   setStatus(bmistatus)
  }
  const onsubmit=(stik)=>{
   stik.preventDefault();
  }
 
  return (
    <>
    <div className='w-full h-screen bg-zinc-800' >
    <h1 className={`uppercase text-zinc-100  w-[370px] bgtext font-bold  left-[55%] relative top-6  text-[200px] `} style={mystyle} >bmi</h1> 
    <h2 className='uppercase  relative   w-[500px] suptext text-zinc-800 relative flex justify-center text-[40px] top-5 left-[49.40%]' style={mystyle}>{bmi} {status}</h2>


    <div className='w-[351px] text-white  border flex item-center justify-center rounded-[10px]  relative bottom-[30%]  left-8' >
          
          <form onSubmit={onsubmit} >
             
    <div className="mb-3 mt-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Height (CM) </label>
      <input type="number" value={height}  onChange={(e)=>{setHeight(e.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
     
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Weight (KG) </label>
      <input type="number" value={weight} onChange={(e)=>{setWeight(e.target.value)}} className="form-control" id="exampleInputPassword1"/>
    </div>
    
    <button type="submit" disabled={!weight || !height} onClick={calcute} className="btn btn-primary my-2">Submit</button>
  </form>
          </div>
  </div></>
  )
}

export default Background