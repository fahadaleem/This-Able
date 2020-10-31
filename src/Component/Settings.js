import React, { useState } from "react";
import SettingLinks from "./SettingLinks";
import ChooseColorBtn from "./ChooseColorBtn";
import SelectedColorDiv from "./SelectedColorDiv";
import FontSizeRange from "./FontSizeRange"
import ReactDOM from "react-dom"



const Settings = () => {

  let [color, setColor] = useState('')

  let [fontSize, setFontSize] = useState('18px');

  const handleChangeColor = (e)=>{
    const chooseColor = e.target.style.backgroundColor;

    const arrayOfElements = ['button','p','h1','h2','h3','h4','h5','h6','a','li','span','div']

    color = chooseColor;
    setColor(color)
    arrayOfElements.map(cur=>{
      let elems = document.querySelectorAll(cur);
      elems = Array.prototype.slice.call(elems)
    elems.map(cur=>cur.style.color=color);
    //  return true;
    });
}

  const handleChangeFontSize = (e)=>{
    fontSize = e.target.value
    setFontSize(fontSize);
    const arrayOfElements = ['button','p','h1','h2','h3','h4','h5','h6','a','li','span','div']


    arrayOfElements.map(cur=>{
      let elems = document.querySelectorAll(cur);
      elems = Array.prototype.slice.call(elems)
    elems.map(cur=>cur.style.fontSize=fontSize+"px");
    //  return true;
    });
  }

  return (
    <div className="container">
      <h1 id="setting-title" className="px-4">
        Settings
      </h1>
      <div className="row border my-3 rounded shadow">
        <div className="col-lg-3 setting-link border-right p-0 left">
          <SettingLinks />
        </div>
        <div className="col-lg-9 p-4 right">
          <div className="row p-3 my-2">
            <div className="col-lg-6">
              <SelectedColorDiv color={color}/>
            </div>
            <div className="col-lg-6">
              <ChooseColorBtn handleChangeColor={handleChangeColor}/>
            </div>
          </div>
          <FontSizeRange fontSize={fontSize} handleChangeFontSize={handleChangeFontSize}  />
        </div>
      </div>
    </div>
  );
};

export default Settings;
