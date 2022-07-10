import React from 'react';

const Login = () => {
  return (
    <div class="min-h-screen bg-gray-100 text-gray-800 antialiased px-4 py-6 flex flex-col justify-center sm:py-12">
        <div class="relative py-3 sm:max-w-xl mx-auto text-center">
            <span class="text-2xl font-light">Inicio de sesión</span>
          <div class="relative mt-4 bg-white shadow-md sm:rounded-lg text-left">
            <div class="h-2 bg-indigo-500 rounded-t-md"></div>
                <div class="py-6 px-8">
                <label class="block font-semibold">Usuario o Email</label>
                <input type="text" placeholder="Email" class=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-500 rounded-md"/>
                 <label class="block mt-3 font-semibold">Contraseña</label>
                  <input type="password" placeholder="Contraseña" class=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-500 rounded-md"/>
                  <div class="flex justify-between items-baseline">
                    <button class="mt-4 bg-indigo-500 text-white py-2 px-6 rounded-lg">Iniciar</button>
                  <a href="#" class="ml-2 text-sm hover:underline">¿Olvidaste tu contraseña?</a>
                 </div>
                </div>
          </div>
        </div>
    </div>
  )
}

export default Login