<template>
  <UContainer class="y-padding" v-if="!loading">
    <UCard>
      <template #header>
        <SectionHeading label="uitgelichte categoriën" />
      </template>
      <div class="grid tablet:grid-cols-3 gap-4 mb-4">
        <FeaturedCollectionsCard
          v-for="collection in firstRowCollections"
          :image="collection.image"
          :title="collection.title"
          :handle="collection.handle"
        />
      </div>
      <div class="grid tablet:grid-cols-2 gap-4">
        <FeaturedCollectionsCard
          v-for="collection in secondRowCollections"
          :key="collection.id"
          :image="collection.image"
          :title="collection.title"
          :handle="collection.handle"
        />
      </div>
    </UCard>
  </UContainer>
</template>

<script setup lang="ts">
const query = gql`
  {
    collections(first: 5) {
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
    }
  }
`;

const { result, loading } = useQuery(query);

type Collection = {
  id: string;
  handle: string;
  title: string;
  image?: {
    url: string;
    altText: string;
  };
};

const firstRowCollections = ref<Collection[]>([]);
const secondRowCollections = ref<Collection[]>([]);

watch(
  result,
  () => {
    if (!result.value) return;

    const collections = result.value.collections.edges.map((edge) => edge.node);

    firstRowCollections.value = collections.slice(0, 3);
    secondRowCollections.value = collections.slice(3, 5);
  },
  { deep: true, immediate: true }
);
</script>
