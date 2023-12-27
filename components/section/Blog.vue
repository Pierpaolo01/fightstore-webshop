<template>
  <UContainer>
    <UCard>
      <template #header>
        <SectionHeading label="laatse nieuws" />
      </template>
      <div class="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3">
        <BlogCard
          v-for="article in articles"
          :key="article.id"
          :id="article.id"
          :title="article.title"
          :imageUrl="article.image?.url"
        />
      </div>
    </UCard>
  </UContainer>
</template>

<script setup lang="ts">
const articlePagination = ref(3);
const query = gql`
  {
    blogs(first: 10, query: "news") {
      edges {
        node {
          title
          articles(first: ${articlePagination.value}) {
            edges {
              node {
                id
                title
                image {
                  url
                }
              }
            }
          }
        }
      }
      pageInfo {
        hasNextPage
      }
    }
  }
`;

type Article = {
  id: string;
  title: string;
  image?: {
    url: string;
  };
};

const { result } = useQuery(query);

const articles = computed<Article[]>(() => {
  if (!result.value || !result.value.blogs.edges.length) return [];

  return (
    result.value.blogs.edges
      .find((edge) => edge.node.title === "News")
      ?.node.articles.edges.map((edge) => edge.node) ?? []
  );
});

const pagination = computed(() => {
  if (!result.value || !result.value.blogs.pageInfo) return;

  return result.value.blogs.pageInfo.hasNextPage;
});
</script>
