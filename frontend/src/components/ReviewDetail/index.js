import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { NavLink,Redirect,useHistory } from "react-router-dom";
import { getReviews,getOneReview, writeReview, updateReview, deleteReview } from "../../store/reviews";

const ReviewDetail = () => {
    const thisState = useSelector((state)=> state.review)
    console.log(thisState,"AHOSCBASNCIPNSAPICNPASPCO")
    const [content, setContent] = useState(`${thisState.answer}`);
    console.log(content,"**********GEASNC")
    const [form, setForm] = useState(false);
    const [rating, setRating] = useState("2")
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);


    const url = window.location.pathname
    const Arr = url.split("/")
    const id = Arr.at(-1)

    useEffect(()=>{
        dispatch(getOneReview(id,BusinessId))
        // console.log(getOneBusiness(businessId))
    },[dispatch]);

    let review = useSelector(state => state.review)
    console.log(review,"THIS IS STATE##########$$$$$$$$$$$")

    const BusinessId = Arr.at(-2)
    // console.log(BusinessId)







    // const handleReviewDelete = (e) => {
    //     const { id } = review;
    //     dispatch(deleteReview(id));
    //     if(deleteReview){
    //         // console.log("Review DELETE working ")
    //     }
    // }

    // const handleEditReview = async(e) => {
    //     e.preventDefault();
    //     console.log( "THIS IS WORKING IN MORNING NEW SEASON OF NFL ")
    //     const newReview = {
    //         userId:sessionUser.id,
    //         businessId:BusinessId,
    //         rating,
    //         answer
    //     }
    //     console.log(newReview, "THIS IS WORKING IN MORNING NEW SEASON OF NFL ")
    //     const review = await dispatch(updateReview(newReview,id));
    //     console.log(review,"THIS IS WORKING IN MORNING NEW SEASON OF NFL ")
    //     if(review){
    //         console.log("THIS WORKED AS WELL AS I THINK")
    //         setForm(false);
    //         dispatch(getReviews(id));
            // reset();
    //     }
    // }


    // console.log(review.answer, "THSI IS ANSWER")
        // let currentAns = review.answer;
        // console.log(currentAns,"************")


        // const reset = () => {
        //     setAnswer("")
        // }


    return (
        <>
        <h1>Your Review</h1>
        <h2>{review.answer}</h2>
        <button onClick={()=>(setForm(true))}>Edit</button>
        <button >Delete</button>
                    {(form) ?
                        <form>
                            <input
                            type='text'
                            onChange={(e)=>setContent(e.target.value)}
                            value={content}
                            placeholder="answer"
                            name="answer"
                            ></input>
                            <button>Submit</button>
                            <button>Cancel</button>
                        </form>
                        :<></>}
    </>
    )
}


export default ReviewDetail;
