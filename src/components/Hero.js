import { Link } from "react-router-dom";

// TODO: Replace static text with Redux info
const Hero = () => {
  return (
    <section id="hero" className="container mb-3">
      <div className="info white pd pdr-65p">
        <h1 className="lemon-primary-lemon">Little Lemon Restaurant</h1>
        <h2>Chicago</h2>
        <p>We are a family owned Mediterranean restaurant, focused on mostly traditional recipes served with a modern twist.</p>
        <Link className="txt-dec-none" to="reserve">
          <button className="reserve-btn">Reserve</button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
