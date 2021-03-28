import React, { useEffect, useState } from "react";
import { PageProps, graphql } from "gatsby";

import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";

import { odin } from "../utils/odin";

const Portfolio: React.FC<PageProps<IndexData>> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title || `Title`;
  const [projects, setProjects] = useState<Project[]>([]);

  const getProjects = async () => {
    const items = await odin.get<OdinResponse<Project[]>>(`kengru/projects`);
    setProjects(items.data.data);
  };

  useEffect(() => {
    getProjects();
  }, [setProjects]);

  const displayedProjects =
    projects.length > 0
      ? projects.map(project => <div key={project.name}>{project.name}</div>)
      : null;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Portfolio" description="portfolio of projects" />
      <Bio />
      {displayedProjects}
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
