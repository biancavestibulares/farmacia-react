import React from 'react'

function DeletarCategoria() {
  
  return (
    <div className='container w-1/3 mx-auto'>
      <h1 className='text-4xl text-center my-4'>Deletar categoria</h1>

      <p className='text-center font-semibold mb-4'>Você tem certeza de que deseja apagar a categoria a seguir?</p>

      <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
      <header className='py-2 px-6 bg-blue-custom text-white font-bold text-2xl'>Categoria</header>
      <p className='p-8 text-3xl bg-slate-200 h-full'>categoria</p>
      <div className="flex">
        <button className='text-slate-100 bg-red-custom hover:bg-red-custom2 w-full py-2' >Não</button>
        <button className='w-full text-slate-100 bg-blue-custom hover:bg-blue-custom2 flex items-center justify-center' >
          Sim
        </button>
      </div>
    </div>
    </div>
  )
}

export default DeletarCategoria