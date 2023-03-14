import Digital from "./Digital.jsx";
import digitalData from "../digitalData.js";
import Promo from "./Promo.jsx";
import promoData from "../promoData.js";
import internData from "../internData.js";
import Internships from "./Internships.jsx";

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
    <div>
      <div className="experience--cont">
        <h1 className="cont--title">experience</h1>
        <i>
          <h2 className="exp--title"> digital marketing and social media.</h2>
        </i>
        <div className="digital--exp">{expDig}</div>
        <i>
          <h2>promotion, art production & event coordination.</h2>
        </i>
        <div className="promo--exp">
          {expPromo}
          <div className="promo--card">
            <h3>
              <i>W drodze</i> • TIFF Festiwal Rivers&Roads 2016
            </h3>
            <h3>
              <i>Skóra, w której żyję </i> • Group exhibition for Macondo Art
              Gallery
            </h3>
            <h3>
              <i>Interwencje/Mediacje</i> • Group exhibition for Art Mediation
              Department of Academy of Fine Arts
            </h3>
            <img className="collage" src="/art-kolaz.png"></img>
            <p>
              I was responsible for promoting art exhibitions, events and
              handmade products. I was managing the gallery's Instagram content
              ensuring that the messeging aligns with it's brand and values. I
              would collaborate with artits and curators to create engaging
              content and promotions to drive engagement with the gallery's
              audience. My efforts resulted in increased engagement, growth of
              the gallery's social media following, and a higher conversion rate
              of online visitors to in-person customers.
            </p>
          </div>
        </div>
        {/* <img className="divider" src="/div2.png"></img> */}
        <i>
          <h2>internships</h2>
        </i>
        <div className="intern--exp">{expIntern}</div>
      </div>
    </div>
  );
}
