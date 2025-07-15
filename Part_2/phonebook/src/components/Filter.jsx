const Filter = ({ filterStr, handleChangeFilter }) => {
  return (
    <div>
      Filter shown with:{" "}
      <input value={filterStr} onChange={handleChangeFilter} />
    </div>
  );
};

export default Filter;





// const Filter = ({ filterStr, handleChangeFilter }) => {
//   return (
//     <div>
//       filter shown with
//       <input value={filterStr} onChange={handleChangeFilter} />
//     </div>
//   );
// };

// export default Filter;
