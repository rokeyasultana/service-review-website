import React, { useContext} from 'react';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';


const AddService = () => {
    useTitle('Add services')
    const {user} = useContext(AuthContext);


  
    const handleAddService = event => {

        event.preventDefault();

        const form = event.target;
        const title = form.title.value;;
        const email = user?.email || 'unregistered';
        const price = form.price.value;
        const description = form.description.value;
        const image = form.image.value;

        console.log(title,email,price,description,image);

        const services = {
            title,email,price,description,image
           }

           const url = `https://service-review-server-sable.vercel.app/services`
       
        fetch(url,{
            method:"POST",
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(services)
        }).than(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledge){
                alert('Service Added');
  
                form.reset();
            }
        })
        .catch(err=>console.log(err));
    }


    

    return (
        <div>
             <div data-aos="fade-up" data-aos-duration="1500" className=' ml-10 w-50  mt-5 mb-5 '>
        
        <div class="flex mx-auto  card w-96 bg-base-100 shadow-xl ">
  <div class="card-body">
  <h2 className='text-center text-sky-400 text-3xl mb-5'> Add Service</h2>

    <form className='flex-auto' onSubmit={handleAddService}>

    <input name='title' type="text"  placeholder="Title" class="input border-1 border-sky-300 w-full max-w-xs mb-2" />

           <input   name='description' type="text" placeholder="Description" class="input border-1 border-sky-300   w-full max-w-xs mb-2" />
           
           <input name='price' type="number" placeholder="Price"  class="input w-full border-1 border-sky-300  max-w-xs mb-2" />

           <input name= 'image' type="text"  placeholder="Image url" class="input border-1 border-sky-300 w-full max-w-xs mb-2"  />

           <div class="text-center mx-auto">
      <button type="submit" class="btn btn-info">Add Service</button>
    </div>
          
       </form>
    
  </div>
</div>
       
    </div>
        </div>
    );
};

export default AddService;