function SubjectList(props) {
  return (
    <ul>
      {props.subjects.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default SubjectList;