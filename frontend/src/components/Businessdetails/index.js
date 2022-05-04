import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getOneBusiness} from "../../store/business"

const Businessdetails = () => {
    // const {businessId} = useParams();
    // console.log(businessId)
    const dispatch = useDispatch();
    // console.log(window.location.pathname)
    const url = window.location.pathname
     console.log(url[url.length-1])
    const id = url[url.length-1];
    // console.log(businessId)
    const {business} = useSelector((state)=> state);
    console.log(business)
    useEffect(()=>{
        dispatch(getOneBusiness(id))
        // console.log(getOneBusiness(businessId))
    },[dispatch]);

    return(
        <>
            {/* <div key={business.id}>
                <h2>{business.name}</h2>
                <img src={business.image}/>
                <p>{business.city},{business.state}</p>
            </div> */}

        </>
    );
 }
export default Businessdetails;
