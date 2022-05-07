import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux"
import { writeBusiness } from "../../store/business";
import {Redirect,useHistory} from "react-router-dom"
import logo from "../../images/logo.png"
import "./NewBusiness.css"
import navLogoZelp from '../../images/navLogoZelp.png'



const NewBusiness = () => {
  const [name, setName] = useState('');
  // const [ownerId, setOwnerId] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip_code, setZipcode] = useState('');
  const [phone_number, setPhone_Number] = useState('');
  const [image, setImage] = useState('');
  const [validationErrors, setValidationErrors] = useState([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  useEffect(()=>{
    let errors = [];
    if(!name.length) errors.push("Please Enter Valid Name")
    if(!category.length) errors.push("Please Enter Valid category")
    if(!description.length) errors.push("Please Enter Valid description")
    if(!address.length) errors.push("Please Enter Valid address")
    if(!city.length) errors.push("Please Enter Valid city")
    if(!state.length) errors.push("Please Enter Valid state")
    if(!zip_code.length) errors.push("Please Enter Valid zip code")
    if(!phone_number.length) errors.push("Please Enter Valid phone number")
    if(!image.length) errors.push("Please Enter Valid image")
    setValidationErrors(errors)
  },[name,category,description,address,city,state,zip_code,phone_number,image])




  const sessionUser = useSelector(state => state.session.user);
  // console.log(sessionUser.id);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setHasSubmitted(true)

    if(validationErrors.length) return alert(`Cannot Submit`);

    const newBusiness = {
      name,
      ownerId:sessionUser.id,
      category,
      description,
      address,
      city,
      state,
      zip_code,
      phone_number,
      image
    }

    const business = await dispatch(writeBusiness(newBusiness));
    console.log(business);
    if(business) {
      history.push("/")
    }
  }
  if(!sessionUser){
    console.log("HEllo without user**************")
    return (
      <>
    <Redirect to="/signup"></Redirect>
    </>
    );
  }

  else{
    console.log("HEllo wokring*********")

  return (
      <div className="inputBox">
        <h1>Create Business</h1>
        <form onSubmit={handleSubmit}>
        <img className='navbarLogo' src={navLogoZelp}></img>
          <h2>Form to Create your Own Busniess</h2>
        {(setValidationErrors.length && hasSubmitted) ?
          <div id="ErrorDiv">
            <ul>
              {validationErrors.map(error => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          </div>
          :<></>
        }
          <label>
          Name :
          <input
          type='text'
          onChange={(e)=>setName(e.target.value)}
          value={name}
          placeholder="Name"
          name="name"
          ></input>
          </label>

          <input
          type='text'
          onChange={(e)=>setCategory(e.target.value)}
          value={category}
          placeholder="Category"
          name="category"
          ></input>
          <textarea
          type='text'
          onChange={(e)=>setDescription(e.target.value)}
          value={description}
          placeholder="Description"
          name="description"
          ></textarea>
          <input
          type='text'
          onChange={(e)=>setAddress(e.target.value)}
          value={address}
          placeholder="Address"
          name="address"
          ></input>
          <input
          type='text'
          onChange={(e)=>setCity(e.target.value)}
          value={city}
          placeholder="City"
          name="city"
          ></input>
          <input
          type='text'
          onChange={(e)=>setState(e.target.value)}
          value={state}
          placeholder="State"
          name="state"
          ></input>
          <input
          type='text'
          onChange={(e)=>setZipcode(e.target.value)}
          value={zip_code}
          placeholder="Zip Code"
          name="zip_code"
          ></input>
          <input
          type='text'
          onChange={(e)=>setPhone_Number(e.target.value)}
          value={phone_number}
          placeholder="Phone Number"
          name="Phone Number"
          ></input>
          <input
          type='text'
          onChange={(e)=>setImage(e.target.value)}
          value={image}
          placeholder="Image"
          name="image"
          ></input>
          <button>Submit</button>
        </form>
      </div>
  );
  }
}
export default NewBusiness;
