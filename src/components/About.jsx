import Fade from 'react-reveal/Fade';
import Typewriter from 'typewriter-effect';


export default function About() {
    return (
        <Fade duration={1800}>
            <div className='about--me'>
                <div className='about--me--desc'>
                    <Typewriter
                        options={{
                            strings: ['I am a digital content creator.', 'I create.', 'I write.', 'I promote.', "My name is Maja."],
                            autoStart: true,
                            loop: true,
                            wrapperClassName: "hello",
                            delay: 80
                        }}/>
                        <p>I am a graduate of Art Mediation with extensive experience in <b>production</b> and <b>promotions</b> of exhibitions, events, and <b>marketing </b>activities. My passion lies in <b>art, fashion, and social media</b>, and I strive to combine them in my work. As a social media manager, I have experience working on both niche cultural projects and commissions for large corporations. <b>Creativity</b> and <b>compelling</b> copywriting are my strengths.</p>
                </div>
                <div >
                <img alt="" className='collage--main' src='/maja-kolaz.png'></img>
                </div>
            </div>
        </Fade>
    )
}