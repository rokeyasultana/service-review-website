import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';

const AddService = ({service}) => {
    const {user} = useContext(AuthContext);
  
    const handlePlaceService = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const message = form.message.value;

        // const service = {
        //     service: ,
        //     serviceName:,
        //     price,
        //     customer: name,
        //     email,
        //     phone,
        //     message
        // }

        // if(phone.length > 10){
        //     alert('Phone number should be 10 characters or longer')
        // }
        // else{

        // }

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                    alert('Order placed successfully')
                    form.reset();
                    
                }
            })
            .catch(er => console.error(er));

    }


    

    return (
        <div>
             <div data-aos="fade-up" data-aos-duration="1500" className=' ml-10 w-50  mt-5 mb-5 '>
        
        <div class="flex mx-auto  card w-96 bg-base-100 shadow-xl ">
  <div class="card-body">
  <h2 className='text-center text-sky-400 text-3xl mb-5'> Add Service</h2>

    <form className='flex-auto' onSubmit={handlePlaceService}>
           
           <input type="text" placeholder="Description" class="input border-1 border-sky-300   w-full max-w-xs mb-2" />
           
           <input type="text" placeholder="Name" class="input border-1 border-sky-300 w-full max-w-xs mb-2" />
           <textarea type="text" class=" w-full max-w-xs mb-2 border-1 border-sky-300 " placeholder="Description" />
         
           <input type="number" placeholder="Price" class="input w-full border-1 border-sky-300  max-w-xs mb-2" />

           <input type="quantity" placeholder="Quantity" class="input  border-1 border-sky-300 w-full max-w-xs mb-2"   />

           
           <input type="text" placeholder="Supplier" class="input border-1 border-sky-300  w-full max-w-xs mb-2"  />

           <input type="text" placeholder="Photo url" class="input border-1 border-sky-300 w-full max-w-xs mb-2"  />

           
          
       </form>
    <div class="card-actions justify-end">
      <button type="submit" class="btn btn-secondary">Add Items</button>
    </div>
  </div>
</div>
       
    </div>
        </div>
    );
};

export default AddService;