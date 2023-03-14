
export default function Internships(props) {
    const { title, company, desc } = props.expIntern
    return (
        <div className="intern--card">
                    <h3><i>{ title }</i> • { company }</h3>
                    <p>{ desc }</p>
            </div>        
    )
}