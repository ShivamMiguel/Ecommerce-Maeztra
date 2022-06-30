import { CreditCard, FacebookLogo, InstagramLogo, LinkedinLogo, YoutubeLogo } from "phosphor-react";
import Maeztra from "./Maeztra";
import Vtex from "./Vtex";

function Footer1(){
    return(
       <div id="footer1" className="w-[100%] h-[85px] justify-between items-center flex  bg-black-700">
        <div id="redesSociais" className="flex gap-2 ml-10 items-center">
            <FacebookLogo size={32}/>
            <LinkedinLogo size={32}/>
            <InstagramLogo size={32}/>
            <YoutubeLogo size={32}/>

        </div>

        <div id="cards" className="flex gap-2 items-center">
            <CreditCard size={32}/>
            <CreditCard size={32}/>
            <CreditCard size={32}/>
            <CreditCard size={32}/>

        </div>
        
        <div  id="PoweredBy" className="flex flex-col">
            <div className="flex gap-2">
                    <span className="mr-4 text-xs">Powered By</span>
                    <span className="text-xs">Developed By</span>
            </div>

            <div className="flex mr-10 items-center">
            <Vtex/>
            <Maeztra/>
        </div>


        </div>

        
       </div>
    )
}

export default Footer1;