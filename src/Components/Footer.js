import "../css/footer.css";
import "../css/App.css";

function Footer() {
  return (
    <footer className="footer-div">
      <div className="footerGridItem">
        <h3 className="footerH3">Contact</h3>
        <p className="footerP">
          Phone: <a href="tel:385-999-1871">(385)-999-1871</a>
        </p>
        <p className="footerP">Fax: (801)-303-7083</p>
        <p className="footerP">
          Email: <a href="mailto:loans@troywarner.com">loans@troywarner.com</a>
        </p>
      </div>
      <div className="footerGridItem">
        <h3 className="footerH3">Realitor Info</h3>
        <p className="footerP">Troy Warner (NMLS #102983)</p>
        <p className="footerP">
          Regulated by the Colorado Divison of Real Estate NMLS #1843
        </p>
      </div>
      <div className="footerGridItem">
        <h3 className="footerH3">Address</h3>
        <p className="footerP">First Class Home Mortgage</p>
        <p className="footerP">
          <a
            href="https://goo.gl/maps/mVxoCpkP4fWAdnFt8"
            target="_blank"
            rel="noreferrer"
          >
            1206 S Jordan Pkwy Ste C, South Jordan, UT 84095
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
