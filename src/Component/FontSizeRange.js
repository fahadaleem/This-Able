import React from "react"



const FontSizeRange = (props)=>{
  console.log(props.fontSize)
  return(
  <form style={{marginLeft:"120px"}}>
        Font Size <span style={{fontSize:"12px", marginLeft:'5px'}}>A</span> <input type="range" min="12" max="36" value = {props.fontSize} onChange={props.handleChangeFontSize} /><span> A</span>
    </form>
  )
}


export default FontSizeRange