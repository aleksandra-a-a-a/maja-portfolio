import Digital from "./Digital.jsx";
import digitalData from "../digitalData.js";
import Promo from "./Promo.jsx";
import promoData from "../promoData.js";
import internData from "../internData.js";
import Internships from "./Internships.jsx";
import Fade from "react-reveal/Fade";


export default function Experience() {
  const expDig = digitalData.map((expDig) => {
    return <Digital key={expDig.id} expDig={expDig} />;
  });
  const expPromo = promoData.map((expPromo) => {
    return <Promo key={expPromo.id} expPromo={expPromo} />;
  });
  const expIntern = internData.map((expIntern) => {
    return <Internships key={expIntern.id} expIntern={expIntern} />;
  });

  return (
    <Fade duration={1800}>
      <div id="exp" className="exp--con">
        <h1>in digital marketing</h1>
        <div className="digital--exp">{expDig}</div>

        <h1>in promotion and event coordination</h1>
        <div className="promo--exp">{expPromo}</div>
      </div>

      <h1>i also did internships</h1>
      <div className="intern--exp">{expIntern}</div>
    </Fade>
  );
}
