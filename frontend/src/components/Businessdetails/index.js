import { useEffect, useState } from 'react';
import { Route, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOneBusiness, removeBusiness } from '../../store/business';
import { NavLink, Redirect, useHistory } from 'react-router-dom';
import './Businessdetails.css';
import MainModal from '../MainModal';
import DeleteBusiness from '../DeleteBusiness';

const Businessdetails = () => {
  let history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const new123 = useParams();
  const id = new123.businessId;
  console.log(id, '*************');
  const { business } = useSelector((state) => state);
  // console.log(business);

  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    dispatch(getOneBusiness(id)).then(() => setLoaded(true));
  }, [dispatch]);

  const gotoEditPage = () => {
    history.push(`/${business.id}/edit`);
  };

  //___________________________________________________________

  //Delete  Buniess MODAL
  const [DeleteBModal, setDeleteEBModal] = useState(false);
  const openEditSongModal = () => {
    if (DeleteBModal) return; // do nothing if modal already showing
    setDeleteEBModal(true); // else open modal
    document.getElementById('root').classList.add('overflow');
  };
  const closeEditSongModal = () => {
    if (!DeleteBModal) return; // do nothing if modal already closed
    setDeleteEBModal(false); // else close modal
    // disable page scrolling:
    document.getElementById('root').classList.remove('overflow');
  };

  const DeleteEntire = () => {
    openEditSongModal();
  };
  //___________________________________________________________

  return (
    <>
      {loaded && (
        <>
          <MainModal showModal={DeleteBModal} closeModal={closeEditSongModal}>
            <DeleteBusiness
              business={business}
              // sessionUser={sessionUser}
            />
          </MainModal>
          <div className="GridMainDivwithImages">
            <div
              className="fistIMGGridDIV"
              style={{ backgroundImage: `url(${business.image})` }}
            ></div>
            <div
              className="fistIMGGridDIV2"
              style={{ backgroundImage: `url(${business.image1})` }}
            ></div>
            <div
              className="fistIMGGridDIV3"
              style={{ backgroundImage: `url(${business.image2})` }}
            ></div>
            <div
              className="fistIMGGridDIV4"
              style={{ backgroundImage: `url(${business.image3})` }}
            ></div>
            <div className="leftSideAllimageGrid">
              <div className="innnerInfoDivforGridName">
                <div>
                  <h1 className="NameOfBusniess">{business.name}</h1>
                </div>
                <div>
                  <span className="spancatogorySpanDiv">
                    {business.category}
                  </span>
                </div>
                <div className="buttosforEditandDelete">
                  {sessionUser?.id === business?.ownerId ? (
                    <>
                      <div>
                        <button
                          className="EditBusniessDetailTOGOpage"
                          onClick={() => gotoEditPage()}
                        >
                          Edit
                        </button>
                        <button
                          className="EditBusniessDetailTOGOpage"
                          onClick={() => DeleteEntire()}
                        >
                          delele
                        </button>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default Businessdetails;
