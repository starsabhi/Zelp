import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { updateBusiness } from '../../store/business';
import './EditBusiness.css';

function EditBusinessCard(newBusiness) {
  const id = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const [name, setName] = useState(newBusiness.newBusiness?.name);
  const [category, setCategory] = useState(newBusiness.newBusiness?.category);
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
  const [upimages, setImage] = useState(newBusiness.newBusiness?.image);
  console.log(upimages);
  const [errors, setErrors] = useState([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const sessionUser = useSelector((state) => state.session.user);

  useEffect(() => {
    let errors = [];
    const phoneError =
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i;
    const zipCodeError = /^[0-9]{5}(?:-[0-9]{4})?$/i;
    if (name.length > 5 && name.length < 20) {
      errors.push('Please Enter Valid Name');
    }
    if (category.length > 3 && category.length < 10) {
      errors.push('Please Enter Valid category');
    }
    if (description.length > 5 && description.length < 30) {
      errors.push('Please Enter Valid description');
    }
    if (address.length > 5 && address.length < 20) {
      errors.push('Please Enter Valid address');
    }
    if (city.length > 3 && city.length < 10) {
      errors.push('Please Enter Valid city');
    }
    if (state.length >= 2) errors.push('Please Enter Valid state. eg.TX/CA');
    if (
      !(
        upimages?.name?.includes('png') ||
        upimages?.name?.includes('svg') ||
        upimages?.name?.includes('jpeg')
      )
    ) {
      errors.push('Please Enter Valid image.eg. .png, . jpeg Files only');
    }
    if (!phoneError.test(phone_number))
      errors.push('Phone Number should be 10 Digit');
    if (!zipCodeError.test(zip_code))
      errors.push('Please Enter Valid Zip Code e.g.75080');
    setErrors(errors);
  }, [
    name,
    category,
    description,
    address,
    city,
    state,
    zip_code,
    phone_number,
    upimages,
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setHasSubmitted(true);
    if (errors.length) {
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
      image: upimages,
    };

    const business = await dispatch(
      updateBusiness(newBusiness, parseInt(id.businessId)).catch(
        async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        }
      )
    );
    if (business) {
      history.push(`/business/${business.id}`);
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    history.push(`/business/${parseInt(id.businessId)}`);
  };

  const updateFile = (e) => {
    const file = e.target.files[0];
    if (file) setImage(file);
  };

  if (!sessionUser) {
    alert('Please Sign-up or Log-in to Create new business');
    history.push('/signup');
  } else {
    return (
      <>
        <div className="inputBox">
          <div className="FORMContainerDivInner">
            <form className="formFOraddBusniess" onSubmit={handleSubmit}>
              <div className="Hh2BUsiessdetaildiv">
                <h2 className="h2BUsiessdetail">Update Business</h2>
              </div>
              {/* <div ref={ErrorsScroll} /> */}
              {errors.length && hasSubmitted ? (
                <div className="ErrorDiv2356">
                  <ul className="errorsForCreateUL2356">
                    {errors.map((error) => (
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
              <label>
                <input
                  className="inputTypeAWS"
                  type="file"
                  onChange={updateFile}
                  name="File"
                />
              </label>
              <div className="subNcanBtn365">
                <div>
                  <button className="createBsumbitBtn12">Submit</button>
                </div>
                <div className="leftBTNsubmission">
                  <button
                    className="createBsumbitBtn123"
                    onClick={handleCancel}
                  >
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
}

export default EditBusinessCard;
