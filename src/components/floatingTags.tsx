import * as React from "react";
import { Link } from "gatsby";

const FloatingTags = (props: FloatingTagsProps) => {
  const { tags } = props;
  return (
    <div className="floatingTags">
      <h1>Tags</h1>
      <ol style={{ listStyle: `none` }}>
        {tags.map(tag => (
          <Link to={tag}>{tag}</Link>
        ))}
      </ol>
    </div>
  );
};

export default FloatingTags;
