import React, { useEffect } from "react";
import { PageProps, graphql } from "gatsby";

import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";

const Portfolio: React.FC<PageProps<IndexData>> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title || `Title`;

  useEffect(() => {
    const projects = async () => {
      const items = fetch(``);
    };
  }, []);

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Portfolio" description="portfolio of projects" />
      <Bio />
    </Layout>
  );
};

export default Portfolio;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
