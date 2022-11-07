import React from 'react';

const Blog = () => {
    return (
        <div>
             <div>
      <div>
        <h2 className='text-center text-sky-500 font-serif text-5xl mt-5'>FAQ</h2>
      </div>
      
      <div >
      <div  className='justify-center justify-items-center grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-20 mb-35  gap-4  text-black '>
      <div data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="200" class="card  card-compact w-96 shadow-xl border-2 border-sky-300">
  
  <div  class="card-body">
    <h2 class="card-title">Difference between SQL and NoSQL</h2>
    <p>* SQL is generally used in relational database management system. NoSQl is used for non-relational distributed database system.<br></br>

* In SQL structured data can be stored data can be stored in tables. On the other hand  NoSQL using JSON data, un-structured data can be stored. <br></br>

* The schemas are static in SQL. The schemas are and dynamic in  NoSQL.<br></br>

* SQL schemas are rigid and bound to relationships. NoSQL Schemas are non-rigid, They are flexible.<br></br>

* SQL is  helpful to design complex queries. But  NoSQL has no interface to prepare complex query.
</p>
    
  </div>
</div>
<div class="card  card-compact w-96  shadow-xl border-2 border-sky-300">
  
  <div class="card-body">
    <h2 class="card-title">What is the purpose of jwt and how does it work</h2>
    <p>JWT also known as JSON web token provides you a way of representing claims to transferred between two parties. It is mainly used for authorization purpose not authentication. JWT consists of there part first is header .Second is payload and third is the signature. The header and the payload are base 64 encoded strings. It can be decoded without any need for password. So anyone can read plane text format</p>
    
  </div>
</div>

    
      </div>
    
      </div>
      </div>
        </div>
    );
};

export default Blog;