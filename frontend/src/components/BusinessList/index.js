import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllbusinessess } from '../../store/business';
import './BusinessList.css';
import { NavLink } from 'react-router-dom';

const BusinessList = () => {
  const dispatch = useDispatch();
  const businessList = useSelector((state) => Object.values(state.business));
  console.log(businessList);
  useEffect(() => {
    dispatch(getAllbusinessess());
  }, [dispatch]);

  return (
    <>
      <div className="businessListClass">
        {businessList?.map(({ id, name, image, city, state }) => (
          <div key={id} className="busniessClassArr">
            <NavLink to={`business/${id}`}>
              <div className="contentdiv">
                <div className="leftSIDEoFSIGNLEDIV">
                  <img className="businessListimage" src={image} />
                </div>
                <div className="rightSIDEoFSIGNLEDIV">
                  <h2 className="BusniessIndName">{name}</h2>
                  {/* <p className="CityandStateName">
                    {city},{state}
                  </p> */}
                </div>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    </>
  );
};
export default BusinessList;
