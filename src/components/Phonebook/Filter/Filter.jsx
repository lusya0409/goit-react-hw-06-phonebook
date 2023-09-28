export const Filter = ({ filter, onChangeFilter }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        placeholder="Start to type"
        value={filter}
        onChange={evt => {
          onChangeFilter(evt.target.value);
        }}
      />
    </div>
  );
};
