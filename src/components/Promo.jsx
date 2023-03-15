
import { useState } from 'react'

export default function Promo(props) {

        const { title, company, desc, img } = props.expPromo
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
                        className='promo--box'>
                        <h3><i>{ title }</i> • { company }</h3> 
                        <img alt="" className='collage' src={ img }/>
                        {isHovering && (<p>{ desc }</p> )}       
                    </div>
        
    )
}                    

