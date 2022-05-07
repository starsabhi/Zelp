import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux"
import { getAllbusinessess } from "../../store/business";
import "./BusinessList.css"
import { NavLink } from "react-router-dom";

const BusinessList = () => {
    const dispatch = useDispatch();
    const businessList = useSelector((state)=>Object.values(state.business));
    console.log(businessList);
    useEffect(()=>{
        dispatch(getAllbusinessess());
    },[dispatch]);



    return(
        <>

        <div className="businessListClass">
        {businessList?.map(({id,name,image,city,state})=>(
            <div  key={id} className="busniessClassArr">
                <div className="contentdiv">
                <h2 className="BusniessIndName">{name}</h2>
                <NavLink to={`business/${id}`}>
                <img className="businessListimage" src={image}/>
                </NavLink>
                <p className="CityandStateName">{city},{state}</p>
                </div>
            </div>
        ))}
        </div>
        </>
    );
}
export default BusinessList;
