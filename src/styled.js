import styled from 'styled-components'

export const StyledDiv = styled.div`
    background-color: lightpink;
    border: 2px solid crimson;


    h2{
        text-align: center;
        color: crimson;
    }
    p{
        color: crimson;
        text-align: center;
    }
`
export const StyledCabecalho = styled.div`
    background-color: crimson;
    color: white;
    text-align: center;
`
export const Button = styled.button`
    background-color: ${(props) => props.$isOn ? "black" : "lightpink"};
    border-radius: 10px;
    padding: 5px;
    color: white;
    border: none;
`