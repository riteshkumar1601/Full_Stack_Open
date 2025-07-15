const PersonForm = ({ newPerson, handleSubmit, handleFormChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        Name:
        <input
          value={newPerson.name}
          name="name"
          onChange={handleFormChange}
          required
        />
      </div>
      <div>
        Number:
        <input
          value={newPerson.number}
          name="number"
          onChange={handleFormChange}
          required
        />
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

export default PersonForm;





// const PersonForm = ({ newPerson, handleSubmit, handleFormChange }) => {
//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         name:
//         <input value={newPerson.name} name="name" onChange={handleFormChange} />
//       </div>
//       <div>
//         number:
//         <input
//           value={newPerson.number}
//           name="number"
//           onChange={handleFormChange}
//         />
//       </div>
//       <div>
//         <button type="submit">add</button>
//       </div>
//     </form>
//   );
// };

// export default PersonForm;
