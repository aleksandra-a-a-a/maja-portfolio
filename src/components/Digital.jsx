import React, { useState } from "react"


export default function Digital(props) {
  
  const { company, desc, img } = props.expDig;
  const [isHovering, setIsHovering] = useState(false);

        const handleMouseOver = () => {
            setIsHovering(true);
  };

        const handleMouseOut = () => {
            setIsHovering(false);
  };


  return (
    <div onMouseOver={handleMouseOver}
    onMouseOut={handleMouseOut}
    className="dig--box">
      <h3>{company}</h3>
      <img alt="" className="collage" src={img} />
       { isHovering && (<p>{desc}</p>) }
      </div>
     
  )
}
