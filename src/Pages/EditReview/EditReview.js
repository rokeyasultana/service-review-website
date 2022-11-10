import React from 'react';
import { useLoaderData } from 'react-router-dom';

const EditReview = () => {
    const reviewEdit=useLoaderData();
    const handleEdit=event=>{

        event.preventDefault();
        const form = event.target;
        const review = event.form.value;
       
        console.log(review);
        const reviews = {
         
          review
        
        };
        console.log(reviews);
        fetch(`https://service-review-server-sable.vercel.app/reviews/${reviewEdit._id}`,{
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
    
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.matchedCount || data.modifiedCount){
           alert('review edited successfully')
          }
          
          console.log(data)})
    
    }
    return (
        <div>
             <div className="my-10 p-4 ">
        <form
        onSubmit={handleEdit}
          className=""
        >
         <input name="review" type="text" placeholder="Type here" class="input w-full max-w-xs" />
         <input name="review"   defaultValue={reviewEdit.review} type="text" placeholder="Type here" class="input w-full max-w-xs" />
  
          <button type="submit">Edit  Reviews</button>
        </form>
      </div>
        </div>
    );
};

export default EditReview;