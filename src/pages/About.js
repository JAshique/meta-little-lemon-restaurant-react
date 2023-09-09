import "./About.css";
import AboutPic1 from "../images/logos/aboutus1.jpg";
import AboutPic2 from "../images/logos/aboutus2.jpg";

// TODO: Use Redux to replace static text
const About = () => {
  return (
    <>
      <section className="container my-3">
        <div className="row justify-center">
          <div className="col-md-6 col-sm-12 align-self-start pd">
            <h2 className="lemon-primary-lemon">Little Lemon</h2>
            <h3 className="emon-primary-dark">Chicago</h3>
            <p>
              Born and raised in Naples, Italy, Adrian and Leo are two Italian brothers who share a passion for authentic Italian dishes. Their passion for Italian cuisine started when their grandma introduced them to the chef lifestyle. Ever since then, they love cooking and enjoying the pleasure from the guests devouring their food. Soon, they wanted to pursue this professionally.
            </p>
            <p>
              We came to America to spread our love for authentic Italian dishes to the Americans. We came to Chicago a few years ago and wanted to open a reataurant which provides the best Italian dishes in the state of Illinois. We have a good rep with the community and every resident in Chicago would recommend our place.
            </p>
            <p>If you ever have a chance to visit Chicago, give us a shot. We promise you won't regret it.</p>
          </div>
          <div className="col-md-6 col-sm-12 text-center align-self-center">
            <div className="my-3">
              <img className="about-pic img-fluid" src={AboutPic1} alt="About us 1" />
            </div>
            <div>
              <img className="about-pic img-fluid" src={AboutPic2} alt="About us 2" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
