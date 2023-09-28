import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${props => props.theme.spasing(5)};
  gap: ${props => props.theme.spasing(2)};
  border-radius: ${props => props.theme.radii.sm};
  border: 1px solid ${props => props.theme.colors.green};
`;
export const StyledField = styled(Field)`
  padding: ${props => props.theme.spasing(1)};
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spasing(2)};
`;
export const ErrorMsg = styled(ErrorMessage)`
  color: ${props => props.theme.colors.red};
`;
export const ButtonAdd = styled.button`
  background-color: ${props => props.theme.colors.grey};
  padding: ${props => props.theme.spasing(2)};
  margin: 0;
  border: none;

  &:hover {
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.green};
  }
`;
