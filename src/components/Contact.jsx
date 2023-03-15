import { Fade } from "react-reveal"
export default function Contact() {
    return (
        <Fade duration={1600}>
        <div id='contact' className="contact--cont">
            <div className='title--photo'>
                <h1 className="cont--title">contact</h1>
                <img alt="" className='collage--contact' src='/maja-kontakt.png'></img>
            </div>
            <div className='contact--cred'>
                <p> Let's stay in touch like two peas in a pod. 
                    To make sure we never lose each other in the wild 
                    world of the web, here are my contact details.
                </p>
                <p><b>Instagram</b>  • <i><a rel="noreferrer" target='_blank' href='https://www.instagram.com/youngfiero/'>@youngfiero</a></i></p>
                <p><b>Linkedin</b>  •<i> <a rel="noreferrer" target='_blank' className='linkedin'href='https://bit.ly/li-maja-dubowska'>bit.ly/li-maja-dubowska</a></i></p>
                <p><b>Email</b>  •<i><a href = "mailto: dubowska.m@gmail.com"> dubowska.m@gmail.com</a></i></p>
            </div>
        </div>
        
        </Fade>
    )
}