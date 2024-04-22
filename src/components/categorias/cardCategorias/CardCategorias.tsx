import React from 'react'
import { Link } from 'react-router-dom'
import Categoria from '../../../models/Categoria'

interface CardCategoriaProps {
  categoria: Categoria
}

function CardCategorias({categoria}: CardCategoriaProps) {
  return (
    <div className='border flex flex-col rounded-2xl overflow-hidden justify-between m-4'>
      <header className='py-2 px-6 bg-blue-custom text-white font-bold text-2xl'>Categoria</header>
      <p className='p-8 text-3xl bg-slate-200 h-full'>Descricao categoria:</p>
      <p className='p-8 text-3xl bg-slate-200 h-full'>{categoria.descricaoCategoria}</p>
      <div className="flex">
        <Link to='' className='w-full text-slate-100 bg-blue-custom hover:bg-blue-custom2 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarCategoria/${categoria.id}`} className='w-full text-slate-100 bg-red-custom hover:bg-red-custom2 flex items-center justify-center py-2'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardCategorias
