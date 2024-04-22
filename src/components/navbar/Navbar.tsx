import React from 'react';
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
    return (
        <div className='w-full bg-green-custom2 text-white py-4'>
            <div className="container flex justify-between items-center">
            <Link to='/home' className='text-2xl font-bold uppercase ml-4'>Bianca Health Point</Link>

                <div className='flex gap-4 mr-4'>
                    <Link to='/produtos' className='hover:underline'>Produtos</Link>
                    <Link to='/categorias' className='hover:underline'>Categorias</Link>
                    <Link to='/cadastroCategoria' className='hover:underline'>Cadastrar Categoria</Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
