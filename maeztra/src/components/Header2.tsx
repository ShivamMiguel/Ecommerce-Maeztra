import { Handbag, Heart, User } from "phosphor-react";

import Logo from "./Logo";

function Header2 (){
    return(
        <div id="Header2" className="  w-full   h-[88px] bg-white-900 mt-[-20px]  flex  justify-around items-center ">
            
            <div>
               <img src="https://i.ibb.co/StZVfCx/logo-maeztra-novo.png" alt="" />
            </div>

          
            <div className="flex justify-center items-center">

                  <input className="  px-[24px] text-black-700  w-[500px] h-[40px] rounde-[10px] rounded-[10px] bg-white-700"  type="search" name="" id="" placeholder="O que voce busca?"/>
            <button className="bg-yellow-900 w-[128px] h-[40px] rounded-lg ml-[-14px] ">buscar</button>



            </div>

            <div className="flex justify-center items-center text-black-700">
                <ul className="flex justify-center items-center gap-6 ">
                    <li className="flex gap-2"> <User size={20}/>  Minha conta</li>
                    <li className="flex gap-2"> <Heart size={20}/>  Minha conta</li>
                    <li className="flex rounded-lg gap-2 justify-center border border-yellow-900 h-[40px] w-[128px] items-center "> <Handbag size={20}/>  Meu carrinho</li>
                </ul>

            </div>

        </div>
    )
}

export default Header2;