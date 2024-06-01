import './bposervicemenu.css';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux'
import { toggleBpoServiceMenu } from "./../../redux/store";
import { Link } from 'react-router-dom';


export default function BpoServiceMenu() {

  const menuVisible = useSelector((state) => state.isBpoServiceMenuVisible);
  const dispatch = useDispatch();

  return (
    <>
      {menuVisible && (
        <div className="wp-otr-bpomenu">
          <div className="wp-inr-bpomenu animate__animated animate__zoomIn">
            <div className="wp-cont-bpomenu">
              <Link onClick={() => dispatch(toggleBpoServiceMenu())}style={{ color: '#FFF' }} to='voice' className="wp-bpomenu-left">
                <i className="fa-solid fa-headset"></i>
                <p>Voice Services</p>
              </Link>
              <Link onClick={() => dispatch(toggleBpoServiceMenu())} style={{ color: '#FFF' }} to='nonvoice' className="wp-bpomenu-right">
                <i className="fa-regular fa-comments"></i>
                <p>Non-Voice Services</p>
              </Link>
            </div>
            <div className="bpomenu-cancel">
              <button onClick={() => dispatch(toggleBpoServiceMenu())} className='animate__animated animate__rubberBand'>❌</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
