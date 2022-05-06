import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getOneBusiness, removeBusiness} from "../../store/business"
import { NavLink,Redirect,useHistory } from "react-router-dom";
import "./Businessdetails.css"
import { getReviews, writeReview, updateReview, deleteReview } from "../../store/reviews";
// import EditBusiness from "../EditBusiness/index";

const Businessdetails = () => {
    const [form , setFrom] = useState(false);
    const [answer, setAnswer] = useState("");
    const [rating, setRating] = useState("2")
    const [editrRviewform, setEditrRviewform ] = useState(false)


    let history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const url = window.location.pathname
    // console.log(window.location.pathname)
    const Arr = url.split("/")
    const id = Arr.at(-1)

    // console.log(id,"*************")
    const {business} = useSelector((state)=> state);
    const {review} = useSelector((state)=> state);
    // console.log(sessionUser.id,"*****#######", business.ownerId);


    const reset = () => {
        setAnswer("")
    }



    useEffect(()=>{
        dispatch(getOneBusiness(id))
        // console.log(getOneBusiness(businessId))
    },[dispatch]);

    useEffect(()=>{
        dispatch(getReviews(id))
    },[dispatch]);





    const handleEdit = () => {
        history.push(`/${business.id}/edit`)
    }

    const handleDelete = (e) => {
        console.log("IS THIS WORKING*******Handler")
        const { id } = business;
        dispatch(removeBusiness(id));
        console.log("IS THIS WORKING*************")
        if(removeBusiness){
            history.push("/")
        }
    }


    // const handleReviewDelete = (e) => {
    //     const { id } = review;
    //     console.log(id, review, "THIS IS WORKING IN MORNING NEW SEASON OF NFL ")
    //     dispatch(deleteReview(id));
    //     if(deleteReview){
    //         console.log("Review DELETE working ")
    //     }
    // }


    const handleSubmitReview = async(e) => {
        e.preventDefault();
        const newReview = {
            userId:sessionUser.id,
            businessId:business.id,
            rating,
            answer
        }

        const review = await dispatch(writeReview(newReview));
        if(review){
            console.log("THIS WORKED AS WELL AS I THINK")
            setFrom(false);
            dispatch(getReviews(id));
            reset();
            // window.location.reload();
        }
    }


    // const handleEditReview = async(e) => {
    //     e.preventDefault();
    //     const newReview = {
    //         userId:sessionUser.id,
    //         businessId:business.id,
    //         rating,
    //         answer
    //     }
    //     const review = await dispatch(updateReview(newReview));
    //     if(review){
    //         console.log("THIS WORKED AS WELL AS I THINK")
    //         setEditrRviewform(false);
    //         dispatch(getReviews(id));
    //         reset();
    //     }
    // }





    const [editanswer, setEditAnswer] = useState(review)
    console.log(review.reviews,"&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&")




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

            <button onClick={()=>setFrom(true)}>Write A review</button>
            {(form)? <form onSubmit={handleSubmitReview}>
                <input
                type='text'
                onChange={(e)=>setAnswer(e.target.value)}
                value={answer}
                placeholder="answer"
                name="answer"
                ></input>
                <button>Submit</button>
            </form> : <></>}

            <h2>Reviews</h2>

            <div>
            {(review.reviews)?.map(ele => (
                <>

            <p>{ele.answer}</p>
            <NavLink to={`/review/${business.id}/${ele.id}`}>
                EDIT OR DELETE
            </NavLink>
               </>
            ))}
            </div>

        </>
    );
 }
export default Businessdetails;
