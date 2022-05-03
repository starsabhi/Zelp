// import { useEffect } from "react";
// import { useDispatch, useSelector} from "react-redux"
// import { getAllbusinessess } from "../../store/business";
// import "./BusinessList.css"

// const BusinessList = () => {
//     const dispatch = useDispatch();
//     const businessList = useSelector((state)=>Object.values(state.business));
//     console.log(businessList);
//     useEffect(()=>{
//         dispatch(getAllbusinessess());
//     },[dispatch]);



//     return(
//         <>
//         <h1>Business List</h1>
//         {businessList?.map(({id,name,image,city,state})=>(
//             <div>
//                 <h2 key={id}>{name}</h2>
//                 <img src={image}/>
//                 <p>{city},{state}</p>
//             </div>
//         ))}
//         </>
//     );
// }
// export default BusinessList;
