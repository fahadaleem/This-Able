import React from "react"

const Button = (props)=>{
  return(
    <button onClick={props.handleChangeColor} className="color-btn" style={{backgroundColor:props.color}}> </button>
  )
}
const ChooseColorBtn = (props)=>{
  let colors = ['#522EC2','#3D02F5','#F2BF4E','#EEA01E','#C15F1E']

  return(
    <div className="choose-color-section text-center">
      {colors.map((cur,index)=><Button key={index} color={cur} handleChangeColor={props.handleChangeColor}/>)}
      <h4 className="text-center my-2 font-weight-normal">Colorblind-friendly</h4>
      </div>
  )
}



export default ChooseColorBtn