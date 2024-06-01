import React, {
  useState,
  useEffect
} from 'react'
import './reviewask.css'
import Tailpiece from '../../components/tailpiece/Tailpiece'
import Reviewcard from '../../components/reviewcard/Reviewcard'
import Fetch from '../../resources/fetch';
import apiRoutes from '../../resources/apiUrls';
import store, { showAlert, setComments, setServices } from '../../redux/store';
import { useSelector } from 'react-redux';

export default function Reviewask() {
  const services = useSelector((state) => state?.services)
  const [commenterName, setCommenterName] = useState("");
  const [commentText, setCommentText] = useState("");
  const [serviceOption, setServiceOption] = useState(0);
  const [rating, setRating] = useState("1");
  useEffect(() => {
    fetchComments();
    fetchServices();
  }, [])
  function fetchComments() {
    Fetch(apiRoutes.COMMENTS, "get").then(
      (response) => {
        store.dispatch(setComments(response?.payload))
      }
    )
  }
  function fetchServices() {
    Fetch(apiRoutes.SERVICES, "get").then(
      (response) => {
        store.dispatch(setServices(response?.payload))
      }
    )
  }
  const comments = useSelector((state) => state?.comments)
  function submitComment(e) {
    console.log(commenterName, commentText, serviceOption, rating)
    e.preventDefault();
    if (
      commenterName !== ""
      && commentText !== ""
      && serviceOption !== ""
      && rating !== ""
    ) {
      Fetch(apiRoutes.COMMENTS, "post", JSON.stringify({
        "commenter_name": commenterName,
        "comment_text": commentText,
        "service_option": services?.[serviceOption]?.service_name,
        "rating": rating,
      }), "json").then(
        (response) => {
          if (response?.status) {
            fetchComments();
            setCommentText("")
            setCommenterName("")
            setServiceOption(serviceOption)
            setRating(rating)
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
  return (
    <>
      <div className="wp-otr-reviews">
        {comments.map((comment, index) => {
          return <Reviewcard
            key={index}
            stars={parseInt(comment.rating)}
            name={comment.commenter_name}
            service={comment.service_option}
            comments={comment.comment_text}
          />
        })}
      </div>
      <div className="wp-inr-review  animate__animated animate__fadeInUp">
        <h1>LEAVE US A COMMENT</h1>
        <form action="" method="post" onSubmit={submitComment} className='animate__animated animate__zoomIn'>
          <input
            type="text"
            name="name"
            value={commenterName}
            onChange={(e) => {
              setCommenterName(e.target.value)
            }}
            placeholder='Name'
            required
          />
          <div>
            <label>Service:</label>
            <select
              name="service"
              onChange={(e) => {
                setServiceOption(e.target.value)
              }}
            >
              {services?.map((service, index) => {
                return <option
                  key={index}
                  value={index}
                >{service.service_name}</option>
              })}
            </select>
          </div>
          <textarea
            name="comment"
            value={commentText}
            onChange={(e) => {
              setCommentText(e.target.value)
            }}
            placeholder='comment here...'
          ></textarea>
          <div>
            <label>Rating:</label>
            <select
              name="rating"
              onChange={(e) => {
                setRating(e.target.value)
              }}
              required
            >
              <option value="1">1 - Poor</option>
              <option value="2">2 - Below Average</option>
              <option value="3">3 - Average</option>
              <option value="4">4 - Good</option>
              <option value="5">5 - Excellent</option>
            </select>
          </div>
          <input type="submit" value="Submit Comment" />
        </form>
      </div>
      <Tailpiece />
    </>
  )
}
