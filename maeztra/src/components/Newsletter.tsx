function NewsLetter(){
    return(

        <div id="News" className="w-[100%] flex justify-center h-20 items-center gap-11 mb-10 border">

         
                <span className="text-black-700 font-bold text-[24px] sm:text-xs md:text-2xl text-sans">Receba Nossa Newsletter</span>

                 
            <div id="divNews" className="flex  justify-center items-center">

            <input id="inputNews" className="  w-[400px]  h-[40px] px-4  text-black-700 border border-black-700 rounded-[4px] bg-white-900" type="search" name=""  placeholder="Digite seu email"/>
            <button id="buttonNews" className="bg-yellow-900 w-[128px] h-[40px] rounded-[4px] ml-[-14px] ">Enviar</button>



</div>
              
           
        </div>

    )
}

export default NewsLetter;