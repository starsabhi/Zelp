import {useState,useEffect} from "react";
import {useDispatch, useSelector} from "react-redux"
import { writeBusiness } from "../../store/business";
import {Redirect,useHistory, useParams} from "react-router-dom"
import { updateBusiness } from "../../store/business";
import "./EditBusiness.css"
import navLogoZelp from '../../images/navLogoZelp.png'


const EditBusiness = () => {
    const id = useParams();
    console.log(id, "This is current Busniess Id************************")
    const session = useSelector(state => state.business);
    const [name, setName] = useState(`${session.name}`);
    // const [ownerId, setOwnerId] = useState('');
    const [category, setCategory] = useState(`${session.category}`);
    const [description, setDescription] = useState(`${session.description}`);
    const [address, setAddress] = useState(`${session.address}`);
    const [city, setCity] = useState(`${session.city}`);
    const [state, setState] = useState(`${session.state}`);
    const [zip_code, setZipcode] = useState(`${session.zip_code}`);
    const [phone_number, setPhone_Number] = useState(`${session.phone_number}`);
    const [image, setImage] = useState(`${session.image}`);
    const [validationErrors, setValidationErrors] = useState([]);
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const sessionUser = useSelector(state => state.session.user);
    // console.log(sessionUser.id);
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(()=>{
      let errors = [];
      const phoneError = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i ;
      // const stateError = /^(?:(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]))$$/i;
      const zipCodeError = /^[0-9]{5}(?:-[0-9]{4})?$/i

      if(!name.length) errors.push("Please Enter Valid Name")
      if(!category.length) errors.push("Please Enter Valid category")
      if(!description.length) errors.push("Please Enter Valid description")
      if(!address.length) errors.push("Please Enter Valid address")
      if(!city.length) errors.push("Please Enter Valid city")
      if(!state.length) errors.push("Please Enter Valid state")
      if(!zip_code.length) errors.push("Please Enter Valid zip code")
      if(!phone_number.length) errors.push("Please Enter Valid phone number")
      if(!image.length) errors.push("Please Enter Valid image")
      if(!phoneError.test(phone_number)) errors.push("Phone Number should be 10 Digit")
      if(!zipCodeError.test(zip_code)) errors.push("Please Enter Valid Zip Code e.g.75080")
      // if(!stateError.test(state)) errors.push("Please Enter Valid state")
      setValidationErrors(errors)
    },[name,category,description,address,city,state,zip_code,phone_number,image])






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

      const business = await dispatch(updateBusiness(newBusiness,id));
      console.log(business,"Updating Busniesss Completed");
      if(business){
          history.push(`/business/${business.id}`)
      }
    }

    const handleCancel = (e) => {
      e.preventDefault();
      history.push(`/business/${id}`)
    }


  return (
      <div className="inputBox">
        <form onSubmit={handleSubmit}>
        <img className='navbarLogo' src={navLogoZelp}></img>
        <h2>Update Business</h2>
        {(setValidationErrors.length && hasSubmitted) ?
          <div id="ErrorDiv">
            <ul id="errorsForCreateUL">
              {validationErrors.map(error => (
                <li id="ErrorsCreateBusinessform" key={error}>{error}</li>
              ))}
            </ul>
          </div>
          :<></>
        }

          <label>Name of Your Restaurant</label>
          <input className="allInputforCreateB"
          type='text'
          onChange={(e)=>setName(e.target.value)}
          value={name}
          placeholder="Name"
          name="name"
          ></input>

          <label>Category</label>
          <input className="allInputforCreateB"
          type='text'
          onChange={(e)=>setCategory(e.target.value)}
          value={category}
          placeholder="Category"
          name="category"
          ></input>

          <label>Description</label>
          <textarea className="textAreaforCreateB"
          type='text'
          onChange={(e)=>setDescription(e.target.value)}
          value={description}
          placeholder="Description"
          name="description"
          ></textarea>

          <label>Address</label>
          <input className="allInputforCreateB"
          type='text'
          onChange={(e)=>setAddress(e.target.value)}
          value={address}
          placeholder="Address"
          name="address"
          ></input>

          <label>City</label>
          <input className="allInputforCreateB"
          type='text'
          onChange={(e)=>setCity(e.target.value)}
          value={city}
          placeholder="City"
          name="city"
          ></input>

          <label>State</label>
          <input
          type='text' className="allInputforCreateB"
          onChange={(e)=>setState(e.target.value)}
          value={state}
          placeholder="State"
          name="state"
          ></input>

          <label>Zip Code</label>
          <input className="allInputforCreateB"
          type='text'
          onChange={(e)=>setZipcode(e.target.value)}
          value={zip_code}
          placeholder="Zip Code"
          name="zip_code"
          ></input>

          <label>Phone Number</label>
          <input className="allInputforCreateB"
          type='text'
          onChange={(e)=>setPhone_Number(e.target.value)}
          value={phone_number}
          placeholder="Phone Number"
          name="Phone Number"
          ></input>

          <label>Image URL</label>
          <input className="allInputforCreateB"
          type='text'
          onChange={(e)=>setImage(e.target.value)}
          value={image}
          placeholder="Image"
          name="image"
          ></input>
          <div>
          <button className="createBsumbitBtn" id="createBsumbitBtnID">Submit</button>
          <button className="createBsumbitBtn" onClick={handleCancel}>Cancel</button>
          </div>
        </form>
      </div>
  );
}

export default EditBusiness;
