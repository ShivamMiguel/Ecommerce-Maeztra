import Vestido from "./vestido";

function Header3 (){
return(
    <div id="header3" className="  flex justify-center items-center  bg-white-900 w-[100%] h-[48px]">

        <ul className="flex text-black-700 mr-[118px] gap-[75px] ">
            <li className="text-yellow-900 flex gap-2 items-center font-bold"> <Vestido/> Novidades</li>
            <li>  Vestidos</li>
            <li>Roupas</li>
            <li>Sapatos</li>
            <li>Lingerie</li>
            <li>Acessórios</li>
            <li>OUTLET</li>
        </ul>

    </div>
)

}

export default Header3;