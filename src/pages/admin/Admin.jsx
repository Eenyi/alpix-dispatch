import { removeToken } from '../../resources/authHelper'
import { useDispatch } from 'react-redux'
import React, {
  useState,
  useEffect,
  useRef
} from 'react'
import './admin.css'
import logo from './../../asset/logo.png'
import Sliderimg from '../../components/itemwithdeleteicon/Itemwithdeleteicon'
import ServiceItem from '../../components/itemwithdeleteicon/ServiceItem'
import Deletereview from '../../components/deletereview/Deletereview'
import Customerinteractioncard from '../../components/interactioncard/Interactioncard'
import { useSelector } from 'react-redux'
import createFormData from '../../resources/formData'
import Fetch from '../../resources/fetch'
import apiRoutes from '../../resources/apiUrls'
import store, {
  showAlert,
  setAdminCreds,
  setComments,
  setMail,
  setRequests,
  setServices,
  setSliderPics,
  setTelephone
} from '../../redux/store'


export default function Admin() {
  const mail = useSelector((state) => state?.mail);
  const telephone = useSelector((state) => state?.telephone);
  const username = useSelector((state) => state?.username);
  const password = useSelector((state) => state?.password);
  const sliderPics = useSelector((state) => state?.sliderPics);
  const services = useSelector((state) => state?.services);
  const comments = useSelector((state) => state?.comments);
  const careerRequests = useSelector((state) => state?.careerRequests);
  const contactRequests = useSelector((state) => state?.contactRequests);
  const trialRequests = useSelector((state) => state?.trialRequests);
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [reTypedPassword, setReTypedPassword] = useState("");
  // const [contactAlert, setContactAlert] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newTelephone, setNewTelephone] = useState("");
  const [serviceName, setServiceName] = useState("");
  useEffect(() => {
    Fetch(apiRoutes.ADMIN_INFO, "get").then(
      (response) => {
        store.dispatch(setAdminCreds({
          username: response?.username,
          password: response?.password,
        }))
      }
    )
    getSliderImages();
    getContactInfo();
    getServices();
    getComments();
    getRequests();
  }, [])
  function getContactInfo() {
    Fetch(apiRoutes.CONTACT_INFO, "get").then(
      response => {
        store.dispatch(setTelephone(response?.telephone))
        store.dispatch(setMail(response?.mail))
      }
    )
  }
  function getSliderImages() {
    Fetch(apiRoutes.SLIDER_PIC + `?id=all`, "get").then(
      (response) => {
        store.dispatch(setSliderPics(response?.payload))
      }
    )
  }
  function getServices() {
    Fetch(apiRoutes.SERVICES, "get").then(
      response => {
        store.dispatch(setServices(response?.payload))
      }
    )
  }
  function getComments() {
    Fetch(apiRoutes.COMMENTS, "get").then(
      (response) => {
        store.dispatch(setComments(response?.payload))
      }
    )
  }
  function getRequests() {
    Fetch(apiRoutes.REQUESTS, "get").then(
      (response) => {
        store.dispatch(setRequests(response?.payload))
      }
    )
  }
  function submitAdminInfo(e) {
    e.preventDefault();
    if (
      newUsername !== ""
      && newPassword !== ""
      && newPassword === reTypedPassword
    ) {
      Fetch(apiRoutes.ADMIN_INFO, "post", JSON.stringify(
        { "username": newUsername, "password": newPassword }
      ), "json").then(
        (response) => {
          if (response?.status) {
            store.dispatch(setAdminCreds({
              username: response?.username,
              password: response?.password,
            }))
            store.dispatch(showAlert({
              alertDisplay: true,
              alertType: "message",
              alertText: response?.message
            }))
          }
          else {
            store.dispatch(showAlert({
              alertDisplay: true,
              alertType: "error",
              alertText: response?.error
            }))
          }
        }
      )
    }
  }
  function submitContactInfo(e) {
    e.preventDefault();
    if (newEmail !== "" && newTelephone !== "") {
      Fetch(apiRoutes.CONTACT_INFO, "post", JSON.stringify(
        { "mail": newEmail, "telephone": newTelephone }
      ), "json").then(
        (response) => {
          if (response?.status) {
            store.dispatch(setMail(newEmail))
            store.dispatch(setTelephone(newTelephone))
            store.dispatch(showAlert({
              alertDisplay: true,
              alertType: "message",
              alertText: response?.message
            }))
          }
          else {
            store.dispatch(showAlert({
              alertDisplay: true,
              alertType: "error",
              alertText: response?.error
            }))
          }
        }
      )
    }
  }
  var sliderImg = useRef(null);
  function submitSliderImage(e) {
    e.preventDefault();
    let form = createFormData({});
    var sliderPic = sliderImg.current.files[0];
    form.append("sliderPic", sliderPic);
    Fetch(apiRoutes.SLIDER_PIC, "post", form).then(
      (response) => {
        console.log(response)
        if (response?.status) {
          getSliderImages();
          store.dispatch(showAlert({
            alertDisplay: true,
            alertType: "message",
            alertText: response?.message
          }))
        }
        else {
          store.dispatch(showAlert({
            alertDisplay: true,
            alertType: "error",
            alertText: response?.error
          }))
        }
      }
    )
  }
  function submitServiceName(e) {
    e.preventDefault();
    if (serviceName !== "") {
      Fetch(apiRoutes.SERVICES, "post", JSON.stringify({
        "service_name": serviceName,
      }), "json").then(
        (response) => {
          if (response?.status) {
            getServices();
            setServiceName("");
            store.dispatch(showAlert({
              alertDisplay: true,
              alertType: "message",
              alertText: response?.message
            }))
          }
          else {
            store.dispatch(showAlert({
              alertDisplay: true,
              alertType: "error",
              alertText: response?.error
            }))
          }
        }
      )
    }
  }
  const dispatch = useDispatch();

  const logout = () => {
    removeToken("alpix_idm_token");
  }
  return (
    <>
      <div className="">
        <div className="wp-otr-admin animate__animated animate__fadeInUpBig">
          <div className="wp-admin-header">
            <img src={logo} alt="..." />
            <p>Alpix Admin</p>
            <i onClick={logout} className="fa-solid fa-right-from-bracket"></i>
          </div>
          <h6>Login Settings</h6>
          <div className='wp-admin-box'>
            <div className='wp-login-settings'>
              <p>Receive an OTP for Login </p>
              <button onClick={() => {
                store.dispatch(showAlert({
                  alertDisplay: true,
                  alertType: "message",
                  alertText: "Available in upcoming builds..."
                }))
              }}>OFF</button>
            </div>
            <div className="wp-admin-creds">
              <p>Change Info & Save</p>
              <form action="" method="post" onSubmit={submitAdminInfo}>
                <input
                  type="text"
                  placeholder={username}
                  name='username'
                  value={newUsername}
                  onChange={(e) => { setNewUsername(e.target.value) }}
                  required
                />
                <input
                  type="password"
                  placeholder={password}
                  name='password'
                  value={newPassword}
                  onChange={(e) => { setNewPassword(e.target.value) }}
                  required
                />
                <input
                  type="password"
                  placeholder={"Retype Password"}
                  name='retyped'
                  value={reTypedPassword}
                  onChange={(e) => { setReTypedPassword(e.target.value) }}
                  required
                />
                <input className='wp-admin-btn' type="submit" value="Change & Save" />
              </form>
            </div>
          </div>
          <h6>Email & Phone Number Settings</h6>
          <div className='wp-admin-box'>
            <div className="wp-admin-creds">
              <p>Change & Save will reflect everywhere on website</p>
              <form action="" method="post" onSubmit={submitContactInfo}>
                <input
                  type="text"
                  placeholder={mail}
                  name='mail'
                  value={newEmail}
                  onChange={(e) => { setNewEmail(e.target.value) }}
                  required
                />
                <input
                  type="text"
                  placeholder={telephone}
                  name='telephone'
                  value={newTelephone}
                  onChange={(e) => { setNewTelephone(e.target.value) }}
                  required
                />
                <input className='wp-admin-btn' type="submit" value="Change & Save" />
              </form>
            </div>
          </div>
          <h6>Home Slider Settings</h6>
          <div className='wp-admin-box'>
            <div className="wp-admin-creds">
              <p>Upload & Delete Home Slider Updates</p>
              <form action="" method="post" onSubmit={submitSliderImage}>
                <input
                  type="file"
                  name="sliderImage"
                  accept="image/x-png,image/gif,image/jpeg,image/jpg"
                  ref={sliderImg}
                />
                <input className='wp-admin-btn' type="submit" value="Upload" />
              </form>
            </div>
            <div className="wp-admin-creds">
              <br />
              <p>Existing Files</p>

              {sliderPics?.map((sliderPic, index) => {
                return <Sliderimg key={index} name={sliderPic.path} id={sliderPic._id.$oid} />
              })}
            </div>
          </div>
          <h6>Reviews Settings</h6>
          <div className='wp-admin-box'>
            <div className="wp-admin-creds">
              <p>Define services for reviews</p>
              <form action="" method="post" onSubmit={submitServiceName}>
                <input
                  type="text"
                  placeholder='Service Name'
                  value={serviceName}
                  onChange={(e) => {
                    setServiceName(e.target.value)
                  }}
                  required
                />
                <input className='wp-admin-btn' type="submit" value="Add" />
              </form>
            </div>
            <div className="wp-admin-creds">
              <br />
              <p>Services for reviews</p>
              {services?.map((service, index) => {
                return <ServiceItem
                  key={index}
                  name={service.service_name}
                  id={service._id.$oid}
                />
              })}
            </div>
            <div className="wp-admin-creds">
              <br />
              <p>Manage Reviews</p>
              <div className="wp-admin-review-container">
                {comments?.map((comment, index) => {
                  return <Deletereview
                    key={index}
                    id={comment._id.$oid}
                    rating={parseInt(comment.rating)}
                    name={comment.commenter_name}
                    service={comment.service_option}
                    comment={comment.comment_text}
                  />
                })}
              </div>
            </div>
          </div>
          <h6>Career Requests</h6>
          <div className='wp-admin-box'>
            <div className="wp-admin-creds">
              <div className="wp-admin-review-container">
                {careerRequests?.map((careerRequest, index) => {
                  return <Customerinteractioncard
                    key={index}
                    id={careerRequest._id.$oid}
                    name={careerRequest.requestee_name}
                    email={careerRequest.requestee_email}
                    company={careerRequest.requestee_company}
                    description={careerRequest.requestee_description}
                    css={careerRequest.read ? "wp-mark-as-done" : "wp-otr-del-review"}
                    read={careerRequest.read}
                    category={"career"}
                  />
                })}
              </div>
            </div>
          </div>
          <h6>Contact Requests</h6>
          <div className='wp-admin-box'>
            <div className="wp-admin-creds">
              <div className="wp-admin-review-container">
                {contactRequests?.map((contactRequest, index) => {
                  return <Customerinteractioncard
                    key={index}
                    id={contactRequest._id.$oid}
                    name={contactRequest.requestee_name}
                    email={contactRequest.requestee_email}
                    company={contactRequest.requestee_company}
                    description={contactRequest.requestee_description}
                    css={contactRequest.read ? "wp-mark-as-done" : "wp-otr-del-review"}
                    read={contactRequest.read}
                    category={"contact"}
                  />
                })}
              </div>
            </div>
          </div>
          <h6>Trial Requests</h6>
          <div className='wp-admin-box'>
            <div className="wp-admin-creds">
              <div className="wp-admin-review-container">
                {trialRequests?.map((trialRequest, index) => {
                  return <Customerinteractioncard
                    key={index}
                    id={trialRequest._id.$oid}
                    name={trialRequest.requestee_name}
                    email={trialRequest.requestee_email}
                    company={trialRequest.requestee_company}
                    description={trialRequest.requestee_description}
                    css={trialRequest.read ? "wp-mark-as-done" : "wp-otr-del-review"}
                    read={trialRequest.read}
                    category={"trial"}
                  />
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
