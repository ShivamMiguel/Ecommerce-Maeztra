import { Handbag, List, MagnifyingGlass } from "phosphor-react";

import Logo from "./Logo";
import LogoMob from "./LogoMob";
import Maeztra from "./Maeztra";
import Vtex from "./Vtex";

function HeaderMobile(){
    return(
        <div id="headerMob"   className="flex invisible items-center justify-around ">
           <List size={40}/>
           <LogoMob />
           <MagnifyingGlass size={40}/>
           <Handbag size={40}/>
        </div>
    )
}

export default HeaderMobile;

