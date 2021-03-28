import * as React from "react";

const Project = (props: Project) => {
  const { name, img, desc, code, live } = props;

  return (
    <div className="project">
      <div className="data">
        <img src={img} alt={name}></img>
        <div className="info">
          <span style={{ marginBottom: 5 }}>{name}</span>
          {code ? (
            <a href={code} target="_blank" rel="noopener noreferrer">
              Source
            </a>
          ) : null}
          {live ? (
            <a href={live} target="_blank" rel="noopener noreferrer">
              Live
            </a>
          ) : null}
        </div>
      </div>
      <p>{desc}</p>
    </div>
  );
};

export default Project;
