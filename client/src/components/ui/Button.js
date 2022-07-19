import styled from "styled-components";

const StyledButton = styled.button`
  text-align: center;
  box-shadow: 1px 1px 3px 1px #c4c4c4;
  border-radius: 10px;
  width: 250px;
  height: 3rem;
  padding: 0;
  margin: 40px 0 60px 0;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.textColor};

  &:hover {
    cursor: pointer;
  }
`;

function ButtonUI(props) {
    const {title, textColor} = props

    return (
        <StyledButton textColor={textColor}>{title}</StyledButton>
    )
};

export default ButtonUI;