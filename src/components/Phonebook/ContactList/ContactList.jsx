import { Item, List, ButtonDlt } from './ContactList.styled';

export const ContactList = ({ items, onDelete }) => {
  return (
    <List>
      {items.map(({ id, name, number }) => (
        <Item key={id}>
          <span>{name}</span> <span>{number}</span>
          <ButtonDlt onClick={() => onDelete(id)}>Delete</ButtonDlt>
        </Item>
      ))}
    </List>
  );
};
