const Persons = ({ filterStr, allPersons, handleRemove }) => {
  const validPersons = Array.isArray(allPersons) ? allPersons : [];

  const filtered = validPersons.filter((person) =>
    person.name.toLowerCase().includes(filterStr.toLowerCase().trim())
  );

  const personsToShow = filterStr.trim() === "" ? validPersons : filtered;

  return (
    <div>
      {personsToShow.map((person) => (
        <p key={person.id}>
          {person.name} {person.number}{" "}
          <button onClick={() => handleRemove(person.id, person.name)}>
            Delete
          </button>
        </p>
      ))}
    </div>
  );
};

export default Persons;





// const Persons = ({ filterStr, allPersons, handleRemove }) => {  
//   const validPersons = Array.isArray(allPersons) ? allPersons : [];

//   const filteredPersons = validPersons.filter((person) =>
//     person.name.toLowerCase().includes(filterStr.toLowerCase().trim())
//   );

//   const personsToShow =
//     filterStr.trim().length === 0 ? validPersons : filteredPersons;

//   return (
//     <div>
//       {personsToShow.map((person) => (
//         <p key={person.id}>
//           {person.name} {person.number}{' '}
//           <button onClick={() => handleRemove(person.id, person.name)}>
//             delete
//           </button>
//         </p>
//       ))}
//     </div>
//   );
// };

// export default Persons;


// const Persons = ({ filterStr, allPersons, handleRemove }) => {
//   const filteredPersons = () => {
//     return allPersons.filter((person) =>
//       person.name.toLowerCase().includes(filterStr.toLowerCase().trim())
//     );
//   };

//   const persons =
//     filterStr.trim().length === 0 ? allPersons : filteredPersons();

//   return (
//     <div>
//       {persons.map((person) => (
//         <p key={person.id}>
//           {person.name} {person.number}
//           <button onClick={() => handleRemove(person.id, person.name)}>
//             delete
//           </button>
//         </p>
//       ))}
//     </div>
//   );
// };

// export default Persons;
