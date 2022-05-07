import "./Home.css"
import BusinessList from "../BusinessList";
function Home() {
return (
    <div>
        <div id="CenterNameforHome">
            <h2 id="CenterNameforHomeh2">
                List of Restaurants
            </h2>
        </div>
        {/* <img className="homepageImg" src="https:/s3-media0.fl.yelpcdn.com/assets/srv0/yelp_large_assets/a2a6dfbdce53/assets/img/home/hero_photos/Y52KtIDZeG8aAMBaLIjSlQ.jpg" /> */}
        <BusinessList/>
    </div>
);
}


export default Home;
