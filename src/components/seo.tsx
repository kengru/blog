/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const SEO: React.FC<SEOProps> = ({ description, lang, title }) => {
  const { site } = useStaticQuery<SEOData>(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            social {
              github
              linkedIn
              twitter
            }
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata.title;

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : ``}
      meta={[
        {
          name: `description`,
          property: undefined,
          content: metaDescription
        },
        {
          name: undefined,
          property: `og:title`,
          content: title
        },
        {
          name: undefined,
          property: `og:description`,
          content: metaDescription
        },
        {
          name: undefined,
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          property: undefined,
          content: `summary`
        },
        {
          name: `twitter:creator`,
          property: undefined,
          content: site.siteMetadata?.social?.twitter || ``
        },
        {
          name: `twitter:title`,
          property: undefined,
          content: title
        },
        {
          name: `twitter:description`,
          property: undefined,
          content: metaDescription
        }
      ]}
    />
  );
};

export default SEO;
