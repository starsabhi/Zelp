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
        <h1 className="businessListDiv">Business List</h1>
        <div className="businessListDiv">
        {businessList?.map(({id,name,image,city,state})=>(
            <div className="businessListDiv" key={id}>
                <h2>{name}</h2>
                <NavLink to={`business/${id}`}>
                <img className="businessListimage" src={image}/>
                </NavLink>
                <p>{city},{state}</p>
            </div>
        ))}
        </div>
        </>
    );
}
export default BusinessList;
