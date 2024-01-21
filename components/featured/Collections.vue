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

// const collections = ref<Collection[]>([]);

const collections = computed<Collection[]>(() => {
  if (!result.value) {
    return [];
  }

  return result.value.collections.edges.map((edge) => edge.node);
});

const firstRowCollections = collections.value.slice(0, 3);
const secondRowCollections = collections.value.slice(3, 5);
</script>
