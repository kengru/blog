import * as React from "react";
import { Link } from "gatsby";

const FloatingTags = (props: FloatingTagsProps) => {
  const { tags } = props;

  return (
    <div className="floatingTags">
      <h2>Tags</h2>
      <ul style={{ listStyle: `none` }}>
        {tags.map(tag => (
          <li key={tag}>
            <Link to={`/${tag}`} activeStyle={{ fontWeight: 600 }}>
              {tag}
            </Link>
          </li>
        ))}
      </ul>
      <Link to={"/portfolio"} style={{ fontSize: "18px" }}>
        Projects
      </Link>
    </div>
  );
};

export default FloatingTags;
