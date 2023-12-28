<template>
  <UContainer class="y-padding">
    <UCard>
      <template #header>
        <SectionHeading label="laatse nieuws" />
      </template>
      <div
        class="grid grid-cols-1 gap-12 tablet:grid-cols-2 laptop:grid-cols-3"
      >
        <BlogCard
          v-for="article in articles"
          :key="article.id"
          :id="article.id"
          :title="article.title"
          :imageUrl="article.image?.url"
        />
      </div>

      <div class="w-full flex justify-center mt-12" v-if="pagination">
        <Button
          variant="outlined"
          size="md"
          color="black"
          label="Toon meer"
          class="hover:scale-105 duration-300"
          @click="loadMore"
        />
      </div>
    </UCard>
  </UContainer>
</template>

<script setup lang="ts">
const articlePagination = ref(3);

const query = gql`
  query GetBlogs($first: Int!) {
    blogs(first: 1, query: "news") {
      edges {
        node {
          title
          articles(first: $first) {
            edges {
              node {
                id
                handle
                title
                image {
                  url
                }
              }
            }
            pageInfo {
              hasNextPage
            }
          }
        }
      }
    }
  }
`;

type Article = {
  id: string;
  handle: string;
  title: string;
  image?: {
    url: string;
  };
};

const { result, refetch } = useQuery(query, {
  first: articlePagination,
});

const loadMore = () => {
  articlePagination.value += 3;
  refetch();
};

const articles = computed<Article[]>(() => {
  if (!result.value || !result.value.blogs.edges.length) return [];

  return (
    result.value.blogs.edges
      .find((edge) => edge.node.title === "News")
      ?.node.articles.edges.map((edge) => edge.node) ?? []
  );
});

const pagination = computed(() => {
  const blogs = result.value?.blogs.edges;
  if (!blogs || blogs.length === 0) return false;

  const articles = blogs[0].node.articles;
  return articles.pageInfo.hasNextPage;
});
</script>
