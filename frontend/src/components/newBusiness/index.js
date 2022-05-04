import {useState} from "react";
import {useDispatch, useSelector} from "react-redux"
import { writeBusiness } from "../../store/business";
import {Redirect,useHistory} from "react-router-dom"


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
  const sessionUser = useSelector(state => state.session.user);
  // console.log(sessionUser.id);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

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
    if(business) reset();
  }
  const reset = () =>{
    setName('');
    setCategory('');
    setDescription('');
    setAddress('');
    setCity('');
    setState('');
    setZipcode('');
    setPhone_Number('');
    setImage('')
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
          <input
          type='text'
          onChange={(e)=>setName(e.target.value)}
          value={name}
          placeholder="Name"
          name="name"
          ></input>
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
