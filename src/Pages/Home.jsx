import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'



function Home() {


  return (
    <>
    <div className="row">
        <div className="col">
            <img height={'680px'} width={'100%'} src="https://i1.wp.com/katiaortiz.com/wp-content/uploads/2020/08/header-photo-4-scaled.jpeg?w=1920&ssl=1" alt="" />
            <div className='text-center'style={{position:'absolute',top:'400px',left:'550px'}}>
            <h1 style={{fontSize:'60px'}} >Welcome to Tech World</h1>
           <Link to='/login'>
           <Button className='m-4'>Get Started</Button>
           </Link> 
            </div>
        </div>
    </div>
    </>
  )
}

export default Home