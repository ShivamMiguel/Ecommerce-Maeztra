import { ArrowsCounterClockwise, GlobeHemisphereEast, House, HouseLine, Tag, TagChevron, Truck } from "phosphor-react";

function ComprarNaMaeztra(){
    return(
        <div className="w-[100%] flex flex-col justify-center items-center text-black-700 mt-3">
            <h1 className="text-base font-bold">Porque comprar na Maeztra?</h1>
            <div className="flex items-around mt-4 mb-3 gap-3">

                <div className="flex items-center rounded-[4px]  justify-center w-[250px] bg-white-700 h-[64px] gap-2  ">
                <GlobeHemisphereEast size={32} color="#050505" />
                    
                <div className=" flex flex-col  ">
                    <p className="text-sm font-bold">Produtos importados</p>
                    <p className="text-xs">Produto de Alta Qualidade</p>

                </div>
                </div>
                <div className="flex items-center justify-center w-[250px] bg-white-700 h-[64px] gap-2  ">
                <House size={32} color="#050505" />
                    
                <div className=" flex flex-col  ">
                    <p className="text-sm font-bold">Estoque no Brasil</p>
                    <p className="text-xs">Produtos mais perto de voce</p>

                </div>
                </div>
                <div className="flex items-center justify-center w-[250px] bg-white-700 h-[64px] gap-2  ">
                <ArrowsCounterClockwise size={25} color="#050505" />
                    
                <div className=" flex flex-col  ">
                    <p className="text-sm font-bold">Trocas Garantidas</p>
                    <p className="text-xs">Trocas em até 48 horas, veja as regras</p>

                </div>
                </div>
                <div className="flex items-center justify-center w-[250px] bg-white-700 h-[64px] gap-2  ">
                <Tag size={32} color="#050505" />
                    
                <div className=" flex flex-col   ">
                    <p className="text-sm font-bold">Ganhe 5% off</p>
                    <p className="text-xs">Pagando à vista no cartão</p>

                </div>
                </div>
                <div className="flex items-center justify-center w-[250px] bg-white-700 h-[64px] gap-2  ">
                <Truck size={32} color="#050505" />
                    
                <div className=" flex flex-col   ">
                    <p className="text-sm font-bold">Frete Gratís</p>
                    <p className="text-xs">Em compras acima de R$ 499,00</p>

                </div>
                </div>

                
                
                

            </div>
        </div>
    )
}

export default ComprarNaMaeztra;