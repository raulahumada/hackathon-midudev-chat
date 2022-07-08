import React, {useEffect, useState} from 'react';

const ChatContainer = () => {

  const [contactos, setContactos] = useState([]);

  const getContactos = async () =>{
      const peticion = await fetch("https://reqres.in/api/users?page=2")
      const {data} = await peticion.json();

      setContactos(data);
      console.log(contactos);
  }

  useEffect(()=>{
      getContactos();
  },[]);
  
  return(
    <div className='conatiner flex-col'>
         {contactos.map(contacto=>{
                return(<div key={contacto.id} className='conatiner bg-white flex items-center justify-around my-4 mx-4 py-3 rounded-2xl'>
                            <div>
                                <img className='w-12 h-12 rounded-full' src={contacto.avatar}/> 
                            </div>
                            <div>
                              <div> <p className='font-bold'>{contacto.first_name} 
                            &nbsp;{contacto.last_name}</p></div>
                              <div><p className='italic'>Esto es un mensaje</p></div>
                            </div>
                            <div className='text-xs flex-col items-center text-center'>
                              <div className='w-full'>07:00 PM</div>
                              <div className='w-6 h-6 flex justify-center items-center text-base rounded-full bg-indigo-500 text-white float-right my-1'><p>4</p></div>
                            </div>
                       </div>)
            })}   
    </div>
  );
};

export default ChatContainer;
