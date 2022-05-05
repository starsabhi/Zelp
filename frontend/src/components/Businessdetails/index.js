import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getOneBusiness, removeBusiness} from "../../store/business"
import { NavLink,Redirect,useHistory } from "react-router-dom";
import "./Businessdetails.css"

// import EditBusiness from "../EditBusiness/index";

const Businessdetails = () => {

    // const [editBusinessForm, setEditbusinessForm] = useState(false);
    let history = useHistory();
    /////***************************************************************************************************************************** */
    const sessionUser = useSelector(state => state.session.user);

    // const {businessId} = useParams();
    // console.log(businessId)
    const dispatch = useDispatch();
    // console.log(window.location.pathname)
    const url = window.location.pathname
    console.log(url[url.length-1])
    const id = url[url.length-1];
    // console.log(businessId)
    const {business} = useSelector((state)=> state);
    // console.log(business)
    useEffect(()=>{
        dispatch(getOneBusiness(id))
        // console.log(getOneBusiness(businessId))
    },[dispatch]);

    console.log(sessionUser.id,"*****#######", business.ownerId);

    /////***************************************************************************************************************************** */


    // const getaForm = () => {
    //     return (
    //         <>
    //         <h1>Hello</h1>
    //         </>
    //         );
    //     }
    // //  const [getaForm, setAform] = useState(false)
    // let content = () => (<div>Hello</div>);


    // if(editBusinessForm){
    //     content = (
    //         <EditBusiness
    //         hideForm={() =>setEditbusinessForm(false)}/>
    //     )
    // }

    const handleEdit = () => {
        history.push(`/${business.id}/edit`)
    }

    const handleDelete = (e) => {
        console.log("IS THIS WORKING*******Handler")
        // e.preventDefault();
        const { id } = business;
        dispatch(removeBusiness(id));
        console.log("IS THIS WORKING*************")
        if(removeBusiness){
            history.push("/")
        }
    }


/////***************************************************************************************************************************** */

    return(
        <>
        {/* {console.log(content)} */}
            <div key={business.id}>
                <h2>{business.name}</h2>
                <img className="businessDetailimg" src={business.image}/>
                <p>Description:  {business.description}</p>
                <p>Phone Number:{business.phone_number}</p>
                <h3>{business.city},{business.state}</h3>

                {(sessionUser.id===business.ownerId) ? <button onClick={handleEdit}>Edit</button> : <></>}
                {(sessionUser.id===business.ownerId) ?<button onClick={()=>handleDelete()}>Delete</button>:<></>}
            </div>

        </>
    );
 }
export default Businessdetails;
