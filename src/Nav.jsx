import React, { useState } from "react";

const Nav = () => {

  const [isOpen, setIsOpen] = useState(false)
  
  const links = [
    { name:"Home", link:"#" },
    { name:"AMG", link:"#" },
    { name:"Brabus", link:"#" },
    { name:"Hofele", link:"#" },
    { name:"About", link:"#" },
  ]

  return(
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center md:justify-between bg-white py-4 md:px-10 px-7">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/2048px-Mercedes-Logo.svg.png" alt="" className="w-12 h-12 cursor-pointer" />
        <div onClick={() => setIsOpen(!isOpen)} className="text-3xl absolute top-6 right-4 cursor-pointer md:hidden">
          <ion-icon name={isOpen ? 'close' : 'menu'}></ion-icon>
        </div>
      


        <ul className={`flex flex-col items-center md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-3 bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:border-none border-t-2 border-slate-900 md:px-0 md:py-0 py-3 px-9 absolute trasnsition-all duration-500 md:static ${isOpen ? 'opacity-100 top-20' : 'top-[-200px] md:block opacity-0 md:opacity-100'}`}>
          {links.map((link, i) => {
            return(
              <a key={i} href={link.link} className="text-sm font-semibold text-slate-700 cursor-pointer hover:text-slate-900">
                {link.name}
              </a>
            )
          })}
          <button className="px-4 py-2 bg-slate-900 text-white rounded-xl border-2 border-slate-900 hover:bg-white hover:text-slate-900 duration-150 font-bold text-sm self-stretch">GET STARTED</button>
        </ul>
        
      </div>
    </div>
  )
}

export default Nav