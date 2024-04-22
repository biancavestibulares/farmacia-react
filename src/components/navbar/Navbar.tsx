import React from 'react';

function Navbar() {
    return (
        <div className='w-full bg-green-custom2 text-white py-4'>
            <div className="container flex justify-between items-center">
                <div className='text-2xl font-bold uppercase ml-4'>Bianca Health Point</div>

                <div className='flex gap-4 mr-4'>
                    <div className='hover:underline'>Produtos</div>
                    <div className='hover:underline'>Categorias</div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
