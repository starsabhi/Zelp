import "./Home.css"
import BusinessList from "../BusinessList";
function Home() {
return (
    <div>
        <div id="CenterNameforHome">
            <div className="CenterNameforHomeh2Class">
                <span id="spanForName">
                    Zelp
                </span>
            </div>
            <p id="infoForWebsite">
                Zelp Connects People with great local Restaurants
            </p>
        </div>
        {/* <img className="homepageImg" src="https:/s3-media0.fl.yelpcdn.com/assets/srv0/yelp_large_assets/a2a6dfbdce53/assets/img/home/hero_photos/Y52KtIDZeG8aAMBaLIjSlQ.jpg" /> */}
        <BusinessList/>
    </div>
);
}


export default Home;
