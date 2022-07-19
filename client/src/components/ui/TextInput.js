import styled from "styled-components";
import { useState } from "react";

const StyledTextarea = styled.textarea`
    width: calc(100% - 32px);
    ${(props) => 
        props.height &&
        `
        height: ${props.height}px;
    `}
    padding: 16px;
    font-size: 16px;
    line-height: 20px;
    font-size: ${props => props.fontSize}px;
`;

function TextInput(props) {
    const { height, fontSize } = props;
    const [value, setValue] = useState('')

    const onChange = (event) => {
        setValue(event.target.value)
    }

    return (
        <StyledTextarea height={height} fontSize={fontSize} value={value} onChange={onChange}></StyledTextarea>
    )
}

export default TextInput;