import * as React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import _ from "lodash";

import FloatingTags from "./floatingTags";

const Layout: React.FC<LayoutProps> = ({ location, title, children }) => {
  let header;
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    );
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    );
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <nav>
        <StaticQuery<LayoutData>
          query={graphql`
            query GetPosts {
              allMarkdownRemark(
                sort: { fields: [frontmatter___date], order: DESC }
              ) {
                nodes {
                  excerpt
                  fields {
                    slug
                  }
                  frontmatter {
                    date(formatString: "MMMM DD, YYYY")
                    title
                    description
                    tags
                  }
                }
              }
            }
          `}
          render={data => {
            const posts = data.allMarkdownRemark.nodes;
            const uniqueTags = _.uniq(
              _.flatten(posts.map(post => post.frontmatter.tags.split(" ")))
            ).sort();
            return <FloatingTags tags={uniqueTags} />;
          }}
        />
      </nav>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  );
};

export default Layout;
