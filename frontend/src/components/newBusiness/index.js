import {useState} from "react";
import {useDispatch} from "react-redux"
import { writeBusiness } from "../../store/business";

const NewBusiness = () => {
  const [name, setName] = useState('');
  const [ownerId, setOwnerId] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip_code, setZipcode] = useState('');
  const [phone_number, setPhone_Number] = useState('');
  const [image, setImage] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newBusiness = {
      name,
      ownerId,
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
    if(business) reset();
  }
  const reset = () =>{
    setName('');
    setOwnerId('');
    setCategory('');
    setDescription('');
    setAddress('');
    setCity('');
    setState('');
    setZipcode('');
    setPhone_Number('');
    setImage('')
  }

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
        </form>
      </div>
  );
 }
export default NewBusiness;
