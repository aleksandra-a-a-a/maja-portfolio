export default function Digital(props) {
  const { company, desc, img } = props.expDig;

  return (
    <div className="digital--card">
      <h3>{company}</h3>
      <img className="collage" src={img} />
      <p>{desc}</p>
      </div>
  );
}
