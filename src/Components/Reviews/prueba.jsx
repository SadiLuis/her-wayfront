import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { postReviews } from "../../../redux/actions/reviews.js";
import Swal from "sweetalert2";

//----------------------------------------------------------------

export default function Review({ productProductId }){
	const user = useSelector((state) => state.viajeUser?.UserId)
	const dispatch = useDispatch();
	const [review, setReview] = useState({
		score: "",
      	description: ""
	})

	function handleSubmit(e){
		
		console.log(productProductId)
		console.log(review.score)
		console.log(review.description)
		console.log(user)
		dispatch(postReviews({
			productProductId,
			score: review.score,
			description: review.description,
			userUsersId: user
		}))
		setReview({
      		score: "",
      		description: "",
		})
		Swal.fire({
	      icon: "success",
	      text: "Comentario agregado!",
	      showConfirmButton: false,
	      timer: 3000,
	    });
	}

	function handleChange(e){
		setReview({
			...review,
			[e.target.id] : e.target.value
		})
	}


	return(
		<div className="container">
		<h4>Deja aquí tu comentario</h4>
		<input type="number"
		id="score" 
		placeholder="califica el producto" 
		min="1"
		max="5"
		onChange={handleChange}
		required/>
		<textarea name="review"
		 id="description"
		 cols="30"
		 rows="10"
		 placeholder="comenta aquí.."
		 maxLength="130"
		 onChange={handleChange}
		 required />
		 <button type="submit" 
		 onClick={e=> handleSubmit(e)}>Add Comment</button>
		</div>
	)
}