import {useState} from "react";
import {useDispatch, useSelector} from "react-redux"
import { writeBusiness } from "../../store/business";
import {Redirect,useHistory, useParams} from "react-router-dom"
import { updateBusiness } from "../../store/business";



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

      const business = await dispatch(updateBusiness(newBusiness,id));
      console.log(business,"Updating Busniesss Completed");
      if(business){
          history.push(`/${business.id}`)
      }
    }


  return (
      <div className="inputBox">
        <h1>Update Business</h1>
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

export default EditBusiness;
