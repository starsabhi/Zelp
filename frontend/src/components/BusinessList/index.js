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
        <h1>Business List</h1>
        {businessList?.map(({id,name,image,city,state})=>(
            <div key={id}>
                <h2>{name}</h2>
                <NavLink to={`business/${id}`}>
                <img src={image}/>
                </NavLink>
                <p>{city},{state}</p>
            </div>
        ))}
        </>
    );
}
export default BusinessList;
