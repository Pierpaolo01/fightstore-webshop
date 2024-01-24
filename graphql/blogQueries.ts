export const BlogQuery = gql`
  query ($handle: String!) {
    blogs(first: 1, query: "news") {
      edges {
        node {
          articleByHandle(handle: $handle) {
            title
            image {
              url
            }
            contentHtml
            publishedAt
          }
        }
      }
    }
  }
`;
