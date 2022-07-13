import gitLogo from '../../images/githubLogo.png';
import linkedLogo from '../../images/linkedin.png';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footermainDiv">
      <div className="technologiesUSED">
        <span className="techSpan">JavaScript</span>
        <span className="techSpan">React</span>
        <span className="techSpan">Express.js</span>
        <span className="techSpan">Node.js</span>
        <span className="techSpan">HTML5</span>
        <span className="techSpan">CSS</span>
        <span className="techSpan">Git</span>
        <span className="techSpan">Heroku</span>
        <span className="techSpan">VScode</span>
        <span className="techSpan">NPM</span>
      </div>
      <div className="developerInfo">
        <div>Abhishek Bornak</div>
        <div className="overrideDIV">
          <div className="divforlgofooter">
            <img className="linkedLogo" src={linkedLogo} alt={linkedLogo}></img>
          </div>
          <div className="divforlgofooter">
            <img className="githubLogo" src={gitLogo} alt={gitLogo}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
