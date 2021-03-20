declare const __PATH_PREFIX__: string;

type MarkdownRemark = {
  html: string;
  frontmatter: Frontmatter;
  excerpt: string;
  fields: Fields;
};

type Frontmatter = {
  title: string;
  description: string;
  date: string;
  tags: string;
};

type Fields = {
  slug: string;
};

type Social = {
  github: string;
  linkedIn: string;
  twitter: string;
};

type Author = {
  name: string;
  summary: string;
};

type SiteMetadata = {
  title: string;
  description: string;
  social: Social;
};

interface BlogPostData {
  site: {
    siteMetadata: {
      title: string;
    };
  };
  markdownRemark: MarkdownRemark;
  previous: MarkdownRemark;
  next: MarkdownRemark;
}

interface IndexData {
  site: {
    siteMetadata: {
      title: string;
    };
  };
  allMarkdownRemark: {
    nodes: MarkdownRemark[];
  };
}

interface SEOData {
  site: {
    siteMetadata: SiteMetadata;
  };
}

interface BioData {
  site: {
    siteMetadata: {
      author: Author;
      social: Social;
    };
  };
}

type Meta = {
  name?: undefined;
  content: string;
  property?: string;
};

interface SEOProps {
  description: string;
  lang?: string;
  title: string;
  meta?: Meta[];
}

interface LayoutProps {
  title: string;
  location: Location;
}

interface FloatingTagsProps {
  tags: string[];
}