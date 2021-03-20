import React from "react";
import { PageProps, Link, graphql } from "gatsby";
import _ from "lodash";

import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";

const TagPostIndex: React.FC<PageProps<TagIndexData, TagIndexContext>> = ({
  data,
  location,
  pageContext
}) => {
  const siteTitle = data.site.siteMetadata.title || `Title`;
  const posts = data.allMarkdownRemark.nodes;

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="All posts" description="All posts" />
        <Bio />
        <p>No blog posts found. It's possible this tag does not exist.</p>
      </Layout>
    );
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={`${pageContext.tag ? pageContext.tag : "tag"} posts`}
        description={`${pageContext.tag ? pageContext.tag : "tag"} posts`}
      />
      <Bio />
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug;

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.frontmatter.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          );
        })}
      </ol>
    </Layout>
  );
};

export default TagPostIndex;

export const pageQuery = graphql`
  query BlogPostsByTag($tag: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { regex: $tag } } }
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
`;
