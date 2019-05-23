import styled from 'styled-components';

export const ButtonContainer = styled.button`
  background:transparent;
  border: 2px solid ${props => props.cartbtn ? "var(--mainYellow)" : "var(--lightBlue)"}; 
  color: ${props => props.cartbtn ? "var(--mainYellow)" : "var(--lightBlue)"};
  outline: none;
  font - family: Montserrat - Medium;
  padding: 10px;
  transition: all 0.5s ease;
  text-transform: capitalize;
  margin-left: ${props => props.cartbtn ? "15px" : "0"};
  margin-bottom: 5px;
  
    &: hover {
    background: ${props => props.cartbtn ? "var(--mainYellow)" : "var(--lightBlue)"};
    color: white;
    }

    &:focus {
      outline: none;
    }
`