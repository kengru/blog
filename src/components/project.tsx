import * as React from "react";
import Skeleton from "react-loading-skeleton";

const Project = (props: Project) => {
  const { name, img, desc, code, live } = props;

  return (
    <div className="project">
      <div className="data">
        {img ? (
          <img src={img} alt={name}></img>
        ) : (
          <Skeleton height={200} width={200} />
        )}
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
    </div>
  );
};

export default Project;
