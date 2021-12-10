import React from "react";

const Block = ({ title, url, urlName }) => {
  return (
    <div className="block">
      <div className="title">{title}</div>
      <div className="url">
        <a href={url} target="_blank">
          {urlName}
        </a>
      </div>
    </div>
  );
};

export default Block;
