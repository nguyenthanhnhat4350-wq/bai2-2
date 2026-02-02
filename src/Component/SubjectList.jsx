import React from "react";
import "./SubjectList.css";

function SubjectList(props) {
  return (
    <div className="subject-container">
      <h2 className="subject-title">Danh sách môn học</h2>
      <ul className="subject-list">
        {props.subjects.map((item, index) => (
          <li className="subject-item" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SubjectList;
