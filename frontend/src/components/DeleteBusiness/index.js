import './DeleteBusiness.css';
import { removeBusiness } from '../../store/business';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
const DeleteBusiness = ({ business, closeModal }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const deleteConfirm = () => {
    const completed = dispatch(removeBusiness(business.id));
    if (completed) {
      history.push('/home');
    }
  };
  return (
    <>
      <div className="mainDivForDeleteModalB">
        <div className="warningSpanDiv">
          <span>Do you want to Delete your busiess from Zelp!</span>
        </div>
        <div className="buttonDivforDelteBE">
          <div>
            <button className="DelteBTNBE" onClick={() => deleteConfirm()}>
              Confirm
            </button>
          </div>
          <div>
            <button className="DelteBTNBECANCEL" onClick={closeModal}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteBusiness;
