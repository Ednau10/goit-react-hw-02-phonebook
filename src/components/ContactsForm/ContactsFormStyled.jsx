import styled from 'styled-components';

export const Form = styled.form`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Button = styled.button`
  border-radius: 40px;
  color: white;
  mix-blend-mode: difference;
  border-radius: 15px;
  width: 25%;
  background: #6666cc;
  padding: 15px;

  &:hover {
    background: #f37e92;
    width: 26%;
    font-weight: bold;
  }
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #6666cc;
  border-radius: 5px;
  margin: 5px;
  width: 90%;
`;

export const NumberInput = styled(Input)`
  width: 200px;
`;

export const Label = styled.label`
  padding: 10px;
  margin: 10px;
`;

export const FormContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;
