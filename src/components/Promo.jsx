import promoData from "../promoData"

export default function Promo(props) {

        const { title, company, desc, img } = props.expPromo
        
    return (
            
                    <div className='promo--card'>
                        <h3><i>{ title }</i> • { company }</h3> 
                        <img className='collage' src={ img }/>
                        <p>{ desc }</p>        
                    </div>
        
    )
}                    

