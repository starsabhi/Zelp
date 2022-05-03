import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getOneBusiness} from "../../store/business"
const Businessdetails = () => {
    const {businessId} = useParams();
    const dispatch = useDispatch();
    // console.log(businessId)
    const {business} = useSelector((state)=> state.business);
    // console.log(business)
    useEffect(()=>{
        dispatch(getOneBusiness(businessId))
        // console.log(getOneBusiness(businessId))
    },[dispatch]);

    return(
        <>
            <div>{business}</div>
        </>
    );
 }
export default Businessdetails;
