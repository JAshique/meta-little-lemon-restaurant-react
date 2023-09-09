import FooterImg from "../images/logos/littleLemonfooterLogo.png";

const Footer = () => {
  return (
    <>
      <footer className="pd lemon-primary-dark white row">
        <div className="row">
          <div className="col-full col-half col-3rd mb-5 foot-center">
            <img className="footer-logo" src={FooterImg} alt="Little lemon footer pic" />
          </div>
          {/* TODO: Replace DIV and update static text with Redux */}
          <div className="col-full col-half col-3rd mb-5 foot-center">
          <h4>In Trust, we build</h4>
          <p>Try Little Lemon</p>
          </div>
          <div className="col-full col-half col-3rd mb-5 foot-center">
            <h4>CONTACT US</h4>
            <address>
              123, Boulevard street,
              <br />
              Green Day, IL 00420
            </address>
            <a className="footer-block" href="tel:+11234567890">
              123&#41;&nbsp;456&#45;7890
            </a>
            <br />
            <a className="footer-block" href="mailto: CSR@littlelemon.com">
              contact@littlelemonreact.com
            </a>
          </div>
        </div>
        <div className="col-full foot-center">
          <p>&copy; 2023 Meta Little Lemon Restaurant. Built using React.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
