function Listas (){
    return(
        <div id="listas" className="flex justify-around text-black-700 mb-10">
            <div className="flex flex-col gap-8">
                <span className="text-base font-bold">Informações</span>
                <ul className="flex flex-col gap-8 text-xs">
                    <li>Quem Somos</li>
                    <li>Prazo de Envio</li>
                    <li>Trocas e Devolucões</li>
                    <li>Promocões e Cupons</li>
                </ul>

            </div>
           
            <div className="flex flex-col gap-8">
                <span className="text-base font-bold">Minha Conta</span>
                <ul className="flex flex-col gap-8 text-xs">
                    <li>Minha conta</li>
                    <li>Meus pedidos</li>
                    <li>Cadastre-se</li>
                   
                </ul>

            </div>

            <div className="flex flex-col gap-8">
                <span className="text-base font-bold">Onde nos Encontrar</span>
                <ul className="flex flex-col gap-8 text-xs">
                    <li>Lojas</li>
                    <li>Endereco</li>
                    
                </ul>

            </div>
           
           

          
           
        </div>

    )
}

export default Listas;