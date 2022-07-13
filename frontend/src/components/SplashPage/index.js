import { NavLink } from 'react-router-dom';
import Footer from '../Footer';
import './SplashPage.css';
function SplashPage() {
  return (
    <>
      <div className="splashPage">
        <div className="mainDivForSP">
          <div className="leftSideofSplashPAge">
            <div className="splashPageinnerText">
              <div className="welcomeDiv">Welcome to Zelp!</div>
              <span className="smallinfoForSLPASH">
                Join our network by adding your business!!
              </span>
              <div className="innerZelpBUTN">
                <NavLink to="/">
                  <button className="innerZelpBUTNREAL">Our Restaurants</button>
                </NavLink>
              </div>
            </div>
            {/* <div className="innerZelpBUTNREAL1255">Our Restaurants</div> */}
          </div>
          <div className="rightSideofSplashPAge"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SplashPage;
