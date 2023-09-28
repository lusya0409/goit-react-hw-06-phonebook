import styled from 'styled-components';

export const List = styled.ul`
  margin-bottom: ${props => props.theme.spasing(10)};
  padding: ${props => props.theme.spasing(4)};
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: ${props => props.theme.spasing(2)};

  border-bottom: 1px solid ${props => props.theme.colors.gray};
`;

export const ButtonDlt = styled.button`
  padding: ${props => props.theme.spasing(2)};
  margin: 0;
  border: none;

  color: ${props => props.theme.colors.green};

  &:hover {
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.red};
  }
`;
