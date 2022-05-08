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
    const [editrRviewform, setEditrRviewform ] = useState(false);
    const [deleteDyn, setDeleteDyn] = useState(false);
    const [hiddenForm , setHiddenForm] = useState(true);


    let history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const url = window.location.pathname
    // console.log(window.location.pathname)
    const Arr = url.split("/")
    const id = Arr.at(-1)

    console.log(id,"*************")
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


    const handleCanceledit = (e) => {
        e.preventDefault();
        setFrom(false)
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

    const anotherSubmit = (e) => {
        e.preventDefault();
        setDeleteDyn(true);
        setHiddenForm(false);
    }

    const anotherCancel = (e) => {
        e.preventDefault();
        setDeleteDyn(false);
        setHiddenForm(true);
    }

    console.log(review.reviews,"%%%%%%%%%%%%")

    // const [editanswer, setEditAnswer] = useState(review)
    // console.log(review.reviews,"&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&")




/////***************************************************************************************************************************** */

    return(
        <>
            <div id="businessDetailDivmain" key={business.id}>
                <div id="businessDetailPageContent">
                    <div id="businessDetailPageinnerContent">
                    <h2 id="businessDPh2">{business.name}</h2>
                    <img className="businessDetailimg" src={business.image}/>
                    <p>Description:  {business.description}</p>
                    <p>Phone Number: {business.phone_number}</p>
                    <h3>Address:{business.address}, {business.city},{business.state}</h3>
                    </div>
                <div>
                {((sessionUser?.id===business.ownerId)&&(hiddenForm)) ? <button id="businessDPeditBtn" onClick={handleEdit}>Edit</button> : <></>}
                {((sessionUser?.id===business.ownerId)&&(hiddenForm)) ?<button id="businessDPdeletBtn" onClick={anotherSubmit}>Remove</button>:<></>}
                {(deleteDyn) ?
                    <>
                    <h3 id="HiddentFormForDeleteConfo">This will permanetly Delete your business from Zelp</h3>
                        <div id="hiddentformconfomationDiv">
                            <button id="finalDeleteconfoBtn" onClick={handleDelete}>Delete</button>
                            <button id="finalDeleteconfoBtnCancel" onClick={anotherCancel}>Cancel</button>
                        </div>
                    </>
                    :<></>}
                </div>
                </div>
            </div>

            <div id="reviewBtnForBDhiddenorNot">
                {(sessionUser) ? <button id="addReviewForBD" onClick={()=>setFrom(true)}>Write A review</button>:<></>}
            </div>
            {(form)? <form onSubmit={handleSubmitReview}>
                <input id="allInputforCreateBinDetailpage"
                type='text'
                onChange={(e)=>setAnswer(e.target.value)}
                value={answer}
                placeholder="answer"
                name="answer"
                ></input>
                <div>
                <button id="businessDPeditBtn">Submit</button>
                <button id="businessDPeditBtn" onClick={handleCanceledit}>Cancel</button>
                </div>
            </form> : <></>}


            <h2>Reviews</h2>
            <div>
                {(review?.reviews)?.map(ele => (
                    <>
                        <p>{ele.answer}</p>
                        {(sessionUser?.id===ele.userId) ?
                        <NavLink to={`/review/${business.id}/${ele.id}`}>
                            DELETE
                        </NavLink> : <></>
                        }
                </>
                ))}
            </div>

        </>
    );
 }
export default Businessdetails;
