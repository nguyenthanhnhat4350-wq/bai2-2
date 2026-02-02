import React from "react";
import "./SubjectList.css";

function SubjectList(props) {
  return (
    <div className="subject-container">
      <h2 className="subject-title">Danh sách môn học</h2>
      <ul className="subject-list">
        {props.subjects.map((subject, index) => (
          <li className="subject-item" key={index}>
            {subject}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SubjectList;
