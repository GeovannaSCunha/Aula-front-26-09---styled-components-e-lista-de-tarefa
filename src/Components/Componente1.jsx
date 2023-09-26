import { useState } from "react"
import { StyledDiv } from "../styled"
import { Button } from "../styled"



export default function Componente1(){
    const [tarefa, setTarefa] = useState('')
    const [todas, setTodas] = useState([])

    const anotarTarefa = (e)=>{
        setTarefa(e.target.value)
    }

    //... todas - desmembrar (scrad)(apagar o colchetes do array, para que nao fique um array dentro do outro)
    const inserirTarefa = ()=>{
        setTodas([...todas, tarefa])
        setTarefa('')
    }

    return(
        <>
            <StyledDiv>
                <h2>Exemplos</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, architecto.</p>
            </StyledDiv>
            <textarea onChange={anotarTarefa} value={tarefa}></textarea>
            <br />
            <Button $isOn={tarefa} onClick={inserirTarefa}>Anotar Tarefa</Button>
            <ul>
                {todas.map((tar,i)=> <li key={i}>{tar}</li>)}
            </ul>
        </>
    )
}

