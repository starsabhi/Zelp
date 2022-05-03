import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux"
import { getAllbusinessess } from "../../store/business";

const BusinessList = () => {
    const dispatch = useDispatch();
    const businessList = useSelector((state)=>Object.values(state.business));
    console.log(businessList);
    useEffect(()=>{
        dispatch(getAllbusinessess());
    },[dispatch]);

    return(
        <>
        <h1>BusinessList</h1>
        {businessList?.map(({id,name})=>(
            <p key={id}>{name}</p>
        ))}
        </>
    );
}
export default BusinessList;
