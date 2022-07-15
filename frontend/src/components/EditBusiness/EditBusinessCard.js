import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory, useParams } from 'react-router-dom';
import { updateBusiness, getOneBusiness } from '../../store/business';
import './EditBusiness.css';

function EditBusinessCard(newBusiness) {
  const id = useParams();
  // console.log(typeof id.businessId);
  // console.log(newBusiness);
  const dispatch = useDispatch();

  const [name, setName] = useState(newBusiness.newBusiness?.name);
  console.log(name);

  const [category, setCategory] = useState(newBusiness.newBusiness?.category);
  // console.log(category);
  const [description, setDescription] = useState(
    newBusiness.newBusiness?.description
  );
  const [address, setAddress] = useState(newBusiness.newBusiness?.address);
  const [city, setCity] = useState(newBusiness.newBusiness?.city);
  const [state, setState] = useState(newBusiness.newBusiness?.state);
  const [zip_code, setZipcode] = useState(newBusiness.newBusiness?.zip_code);
  const [phone_number, setPhone_Number] = useState(
    newBusiness.newBusiness?.phone_number
  );
  const [image, setImage] = useState(newBusiness.newBusiness?.image);
  const [image1, setImage1] = useState(newBusiness.newBusiness?.image1);
  const [image2, setImage2] = useState(newBusiness.newBusiness?.image2);
  const [image3, setImage3] = useState(newBusiness.newBusiness?.image3);

  const [validationErrors, setValidationErrors] = useState([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const sessionUser = useSelector((state) => state.session.user);
  const history = useHistory();

  useEffect(() => {
    let errors = [];
    const phoneError =
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i;
    // const stateError = /^(?:(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]))$$/i;
    const zipCodeError = /^[0-9]{5}(?:-[0-9]{4})?$/i;

    if (!name?.length) errors.push('Please Enter Valid Name');
    if (!category?.length) errors.push('Please Enter Valid category');
    if (!description?.length) errors.push('Please Enter Valid description');
    if (!address?.length) errors.push('Please Enter Valid address');
    if (!city?.length) errors.push('Please Enter Valid city');
    if (!state?.length) errors.push('Please Enter Valid state');
    if (!zip_code?.length) errors.push('Please Enter Valid zip code');
    if (!phone_number?.length) errors.push('Please Enter Valid phone number');
    if (!image?.length) errors.push('Please Enter Valid image');
    if (!phoneError.test(phone_number))
      errors.push('Phone Number should be 10 Digit');
    if (!zipCodeError.test(zip_code))
      errors.push('Please Enter Valid Zip Code e.g.75080');
    // if(!stateError.test(state)) errors.push("Please Enter Valid state")
    setValidationErrors(errors);
  }, [
    name,
    category,
    description,
    address,
    city,
    state,
    zip_code,
    phone_number,
    image,
    image1,
    image2,
    image3,
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setHasSubmitted(true);
    if (validationErrors.length) {
      return alert(`Cannot Submit`);
    }

    const newBusiness = {
      name,
      ownerId: sessionUser.id,
      category,
      description,
      address,
      city,
      state,
      zip_code,
      phone_number,
      image,
      image1,
      image2,
      image3,
    };

    const business = await dispatch(
      updateBusiness(newBusiness, parseInt(id.businessId))
    );
    // console.log(business, 'Updating Busniesss Completed');
    if (business) {
      history.push(`/business/${business.id}`);
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    history.push(`/business/${parseInt(id.businessId)}`);
  };

  return (
    <>
      <div className="inputBox">
        <div className="FORMContainerDivInner">
          <form className="formFOraddBusniess" onSubmit={handleSubmit}>
            <div className="Hh2BUsiessdetaildiv">
              <h2 className="h2BUsiessdetail">Update Business</h2>
            </div>
            {/* <div ref={ErrorsScroll} /> */}
            {setValidationErrors.length && hasSubmitted ? (
              <div className="ErrorDiv2356">
                <ul className="errorsForCreateUL2356">
                  {validationErrors.map((error) => (
                    <li className="ErrorsCreateBusinessform" key={error}>
                      {error}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <></>
            )}
            <label className="lebalforAddBUSN">Name of Your Restaurant</label>
            <input
              className="allInputforCreateB2"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Name"
              name="name"
            ></input>

            <label className="lebalforAddBUSN">Category</label>
            <input
              className="allInputforCreateB2"
              type="text"
              onChange={(e) => setCategory(e.target.value)}
              value={category}
              placeholder="Category"
              name="category"
            ></input>

            <label className="lebalforAddBUSN">Description</label>
            <textarea
              className="textAreaforCreateB2"
              type="description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              placeholder="Description"
              name="description"
            ></textarea>

            <label className="lebalforAddBUSN">Address</label>
            <input
              className="allInputforCreateB2"
              type="text"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
              placeholder="Address"
              name="address"
            ></input>

            <label className="lebalforAddBUSN">City</label>
            <input
              className="allInputforCreateB2"
              type="text"
              onChange={(e) => setCity(e.target.value)}
              value={city}
              placeholder="City"
              name="city"
            ></input>

            <label className="lebalforAddBUSN">State</label>
            <input
              className="allInputforCreateB2"
              type="text"
              onChange={(e) => setState(e.target.value)}
              value={state}
              placeholder="e.g.TX/AZ"
              name="state"
            ></input>

            <label className="lebalforAddBUSN">Zip Code</label>
            <input
              className="allInputforCreateB2"
              type="text"
              onChange={(e) => setZipcode(e.target.value)}
              value={zip_code}
              placeholder="Zip Code"
              name="zip_code"
            ></input>

            <label className="lebalforAddBUSN">Phone Number</label>
            <input
              className="allInputforCreateB2"
              type="text"
              onChange={(e) => setPhone_Number(e.target.value)}
              value={phone_number}
              placeholder="phone number"
              name="Phone Number"
            ></input>

            <label className="lebalforAddBUSN">Image URL</label>
            <input
              className="allInputforCreateB2"
              type="text"
              onChange={(e) => setImage(e.target.value)}
              value={image}
              placeholder="Image URL"
              name="image"
            ></input>

            <label className="lebalforAddBUSN">Image 2 URL</label>
            <input
              className="allInputforCreateB2"
              type="text"
              onChange={(e) => setImage1(e.target.value)}
              value={image1}
              placeholder="Image URL"
              name="image"
            ></input>
            <label className="lebalforAddBUSN">Image 3 URL</label>
            <input
              className="allInputforCreateB2"
              type="text"
              onChange={(e) => setImage2(e.target.value)}
              value={image2}
              placeholder="Image URL"
              name="image"
            ></input>
            <label className="lebalforAddBUSN">Image 4 URL</label>
            <input
              className="allInputforCreateB2"
              type="text"
              onChange={(e) => setImage3(e.target.value)}
              value={image}
              placeholder="Image URL"
              name="image"
            ></input>
            <div className="subNcanBtn365">
              <div>
                <button className="createBsumbitBtn12">Submit</button>
              </div>
              <div className="leftBTNsubmission">
                <button className="createBsumbitBtn123" onClick={handleCancel}>
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditBusinessCard;
