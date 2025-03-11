import estilos from './fundamentos.module.css'
import { Botao } from '../componentes/Botao'
export function Fundamentos(){
    const mensagem = (texto)=> alert(`mensagem: ${texto}`);
    return(
        <div className={estilos.conteiner}>
            <p className={estilos.titulo}>Fundamentos</p>
            <div className={estilos.conteinerBotoes}>
                <Botao 
                titulo='luca'
                acao={()=> mensagem('Padrinho')}
                
                />
                <Botao 
                titulo='nicolly'
                acao={()=> mensagem('Eu')}/>

                <Botao 
                titulo='yasmim'
                acao={()=> mensagem('Amiga')}/>
                <Botao 
                titulo='sophia'
                acao={()=> mensagem('Amiga')}/>
                <Botao 
                titulo='guilherme'
                acao={()=> mensagem('Amigo')}/>
                <Botao 
                titulo='DS14'
                acao={()=> mensagem('Melhor sala')}/>
            </div>
        </div>
    )
}

//props são as formas de passar parametros 