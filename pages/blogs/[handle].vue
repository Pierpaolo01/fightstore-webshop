<template>
  <UContainer class="y-padding">
    <div v-if="article" class="max-w-2xl mx-auto">
      <h1 class="text-3xl font-bold mb-4">{{ article.title }}</h1>
      <img
        v-if="article.image?.url"
        :src="article.image.url"
        class="w-full h-auto mb-6"
      />
      <div
        class="text-gray-700 mb-4 blog-content"
        v-html="article.contentHtml"
      />
      <p class="text-sm text-gray-500">
        Published on: {{ formatDate(article.publishedAt) }}
      </p>
    </div>
    <div v-else class="text-center">
      <p>Loading article...</p>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
import { BlogQuery } from "~/graphql/blogQueries";

const route = useRoute();

const { result, onResult } = useQuery(BlogQuery, {
  handle: route.params.handle,
});

const article = computed(() => {
  if (!result.value) return null;
  return result.value.blogs.edges[0].node.articleByHandle;
});

const formatDate = (dateString) => {
  const date = new Date(dateString);

  return date.toLocaleDateString("nl-NL");
};

const updateSeoMeta = () =>
  useSeoMeta({
    title: () => `${article.value?.title}`,
    description: () => `${article.value?.description}`,
    ogTitle: () => `${article.value?.title}`,
    ogDescription: () => `${article.value?.description}`,
    ogImage: () => `${article.value?.image ? article.value?.image.url : ""}`,
    twitterTitle: () => `${article.value?.title}`,
    twitterDescription: () => `${article.value?.description ?? ""}`,
    twitterImage: () =>
      `${article.value?.image ? article.value?.image.url : ""}`,
    twitterCard: "summary",
  });

onResult(() => {
  updateSeoMeta();
});

updateSeoMeta();
</script>

<style scoped>
/* Blog Content Styles */

:deep(.blog-content) {
  /* General text styles */
  line-height: 1.6;
  color: #333;
  font-family: "Open Sans", sans-serif;
}

:deep(.blog-content p) {
  margin-bottom: 1em;
}

:deep(.blog-content strong) {
  font-weight: bold;
}

:deep(.blog-content em) {
  font-style: italic;
}

:deep(.blog-content ol) {
  padding-left: 20px;
  list-style: decimal !important;
}

:deep(.blog-content ul) {
  padding-left: 20px;
  list-style: disc !important;
}

:deep(.blog-content ul li) {
  margin-bottom: 0.5em;
}

:deep(.blog-content ol li) {
  margin-bottom: 0.5em;
}

:deep(.blog-content a) {
  color: #3182ce;
  text-decoration: underline;
}

:deep(.blog-content [style*="text-align: right"]) {
  text-align: right;
}

:deep(.blog-content [style*="text-align: left"]) {
  text-align: left;
}

:deep(.blog-content [style*="text-align: center"]) {
  text-align: center;
}

:deep(.blog-content [style*="padding-left"]) {
  padding-left: 30px;
}

:deep(.blog-content [style*="color"]) {
  color: inherit; /* Override inline styles or specify a default */
}

:deep(.blog-content img) {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
}

:deep(.blog-content table) {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1em;
}

:deep(.blog-content th),
:deep(.blog-content td) {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

:deep(.blog-content blockquote) {
  border-left: 4px solid #4a5568; /* A shade of gray, you can choose a color that fits your theme */
  background-color: #f7fafc; /* Light background color for contrast */
  margin: 1.5em 0;
  padding: 0.5em 1em;
  font-style: italic;
  color: #2d3748; /* Darker text color for readability */
}

:deep(.blog-content blockquote p) {
  margin: 0;
}

/* Optional: Style for the author/citation if included */
:deep(.blog-content blockquote cite) {
  display: block;
  text-align: right;
  color: #718096; /* Slightly lighter color for the citation */
  font-style: normal;
  font-weight: bold;
}
</style>
