import { Fade } from "react-reveal";

export default function Skills(props) {
  const { title, desc, img } = props.skillSet;
  return (
    <>
      <Fade duration={1800}>
        <div className="skill--box">
          <img alt="" src={img}></img>
          <h2>{title}</h2>
          <p>{desc}</p>
        </div>
      </Fade>
    </>
  );
}
