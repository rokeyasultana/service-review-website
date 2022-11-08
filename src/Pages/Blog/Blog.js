import React from 'react';
import { Helmet } from 'react-helmet-async';

const Blog = () => {
    return (
        <div>
             <Helmet>
        <title>Blog</title>
        </Helmet>
             <div>
      <div>
        <h2 className='text-center text-sky-500 font-serif text-5xl mt-5'>FAQ</h2>
      </div>
      
      <div >
      <div data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="200"   className='justify-center justify-items-center grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  mt-20 mb-35  gap-4  mb-10 text-black  '>
      <div 
            class="card  card-compact w-96 shadow-xl border-2 border-sky-300">
  
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
<div class="card  card-compact w-96  shadow-xl border-2 border-sky-300">
  
  <div class="card-body">
    <h2 class="card-title">What is the difference between javascript and NodeJS?</h2>
    <p>* JavaScript is a lightweight object oriented scripting language. Nodejs is not a language. It is a cross-platform, open-source, server side runtime environment.<br></br>

* Javascript is used to build dynamic HTML pages with interactive effects on a webpage, mobile Application, Games, and Server Application etc. NodeJs facilities JavaScript to be run on a server.<br></br>

* All browsers have in built javascript engines, which is why browsers can run the javascript codes of web pages. Nodejs uses V8 engine which enables it to parse and run javascript code.</p>
    
  </div>
</div>
<div class="card  card-compact w-96  shadow-xl border-2 border-sky-300">
  
  <div class="card-body">
    <h2 class="card-title">How does NodeJS handle multiple requests at the same time?</h2>
    <p>NodeJS Web Server maintains a limited Thread Pool to provide services to client requests. Multiple clients make multiple requests to the NodeJS server. NodeJS receives these requests and places them into the EventQueue .
NodeJS server has an internal component referred to as the EventLoop which is an infinite loop that receives requests and processes them. This EventLoop is single threaded. In other words, EventLoop is the listener for the EventQueue.</p>
    
  </div>
</div>

    
      </div>
    
      </div>
      </div>
        </div>
    );
};

export default Blog;