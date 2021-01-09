import React from 'react';
import { graphql, PageProps } from 'gatsby';

import BlogScreen from '../components/screens/BlogScreen';
import { BlogPageQuery } from './__generated__/BlogPageQuery';

interface BlogProps extends PageProps {
  data: BlogPageQuery,
}

export const query = graphql`
  query BlogPageQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      nodes {
        id
        timeToRead
        excerpt(pruneLength: 300, format: PLAIN)
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "DD MMMM, YYYY")
        }
      }
    }
  }
`;

const Blog = (props: BlogProps): React.ReactElement => {
  const { data } = props;

  return (
    <BlogScreen posts={data} />
  );
};

export default Blog;
