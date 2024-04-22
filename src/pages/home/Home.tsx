import React from 'react';
import homeLogo from '../../assets/home.png'
import './Home.css';


function Home() {
    return (
        <>
        <div className="bg-green-custom flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Bianca Health Point</h2>
              <p className='text-xl'>Porque sua saúde merece o melhor cuidado</p>
  
              <div className="flex justify-around gap-4">
              
                <button className='rounded bg-white text-green-custom py-2 px-4'>Ver Produtos</button>
              </div>
            </div>
  
            <div className="flex justify-center ">
              <img src={homeLogo} alt="" className='w-2/3' />
      
            </div>
          </div>
        </div>
      
      </>
    );
}

export default Home;