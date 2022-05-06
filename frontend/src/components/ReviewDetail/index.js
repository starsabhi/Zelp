import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getOneBusiness, removeBusiness} from "../../store/business"
import { NavLink,Redirect,useHistory } from "react-router-dom";
import { getReviews,getOneReview, writeReview, updateReview, deleteReview } from "../../store/reviews";

const ReviewDetail = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);


    const url = window.location.pathname
    const Arr = url.split("/")
    const id = Arr.at(-1)

    useEffect(()=>{
        dispatch(getOneReview(id,BusinessId))
        // console.log(getOneBusiness(businessId))
    },[dispatch]);

    const state = useSelector(state => state)
    console.log(state.review,"THIS IS STATE##########$$$$$$$$$$$")

    const BusinessId = Arr.at(-2)
    console.log(BusinessId)







    // const handleReviewDelete = (e) => {
    //     const { id } = review;
    //     console.log(id, review, "THIS IS WORKING IN MORNING NEW SEASON OF NFL ")
    //     dispatch(deleteReview(id));
    //     if(deleteReview){
    //         console.log("Review DELETE working ")
    //     }
    // }

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



    return (
    <>
    <h1>HELLO WORLD</h1>
    </>
    )
}


export default ReviewDetail;
