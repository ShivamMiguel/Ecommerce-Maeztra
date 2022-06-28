import { CaretLeft, CaretRight } from "phosphor-react";

function Background (){
    return(
        <div className="bg-modelo bg-cover w-[100%] h-[540px] flex justify-around items-center">
            <div>
                <h1><CaretLeft size={32 } color="#353535"/></h1>
            </div>
                <div className="flex flex-col gap-3">
                    <div className="flex flex-col mr-[500px] mt-[105px]   gap-3">
                         <h1 className="text-[40px]">Promocões de Outono</h1>
                   <h3 className="text-[20px]">Confiras os melhores looks para combinar <br /> com voce nesse Outono</h3>
                   <button className="bg-yellow-900 w-[128px] h-[48px] rounded-lg ml-[-14px] ">Conferir</button>
                    </div>
                  
                   <div className="flex gap-4 mt-[160px] ml-[450px]">
                    <button className="bg-yellow-900 w-4 h-4 rounded-full"></button>
                    <button className="border border-yellow-900   w-4 h-4 rounded-full"></button>
                    <button className="border border-yellow-900   w-4 h-4 rounded-full"></button>
                    <button className="border border-yellow-900   w-4 h-4 rounded-full"></button>
                    <button className="border border-yellow-900   w-4 h-4 rounded-full"></button>
                    
                   </div>

                </div>
                <div>
                    <h1><CaretRight size={32} color="#353535"/></h1>
                </div>
        </div>
    )
}

export default Background;