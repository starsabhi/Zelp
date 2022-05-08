import gitLogo from "../../images/githubLogo.png"
import linkedLogo from "../../images/linkedin.png"
import "./Footer.css"

const Footer = () => {
    return (
    <div id="footermainDiv">
       <img id="linkedLogo" src={linkedLogo}></img>
       <img id="githubLogo" src={gitLogo}></img>
       <span id="pElementforDev">developed by: Abhishek Bornak</span>
    </div>
    );
}

export default Footer;
