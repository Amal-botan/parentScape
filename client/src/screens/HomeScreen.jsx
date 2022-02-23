import React from 'react';
import '../components/home.css';
import { Card } from '@material-ui/core';

function HomeScreen() {

  return (
    <div className='welcome'>
      <div className='container' style={{marginTop: '240px',  alignItems: 'center'}}>
      <Card id = 'homebox' elevation={6}>
          <h1 style={{fontSize: '80px', fontWeight: 300, marginBottom: '20px'}}>
            <svg style={{display: 'inline', marginTop: '15px'}}
              className='icon'
              xmlns='http://www.w3.org/2000/svg'
              width='70'
              height='70'
              fill='currentColor'
              class='bi bi-geo-alt'
              viewBox='0 0 16 16'
            >
 
            </svg>
            ParentScape
          </h1>
          <h1 style={{marginTop: '20px', marginBottom: '20px', fontWeight: 300}}>It takes a village to raise a child.</h1>
          <form className='flex-form' style={{left: '30%'}}>
           
          </form>
          </Card>
      
       
        <div className='covertwo' >

        </div>
      </div>
    </div>
  );
}

export default HomeScreen;