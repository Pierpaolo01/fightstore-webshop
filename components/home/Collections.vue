<template>
  <UContainer v-if="!loading">
    <UCard>
      <template #header>
        <div class="flex space-x-4">
          <div class="block min-h-full w-2 rounded bg-blue-500" />
          <h2 class="text-black uppercase">uitgelichte categoriën</h2>
        </div>
      </template>
      <div class="grid tablet:grid-cols-3 gap-4 mb-4">
        <HomeCollectionCard
          v-for="collection in firstRowCollections"
          :image="collection.image"
          :title="collection.title"
        />
      </div>
      <div class="grid tablet:grid-cols-2 gap-4">
        <HomeCollectionCard
          v-for="collection in secondRowCollections"
          :key="collection.id"
          :image="collection.image"
          :title="collection.title"
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
  title: string;
  image?: {
    url: string;
    altText: string;
  };
};

const collections = ref<Collection[]>([]);

watch(
  () => result.value,
  (newValue) => {
    if (newValue && newValue.collections) {
      collections.value = newValue.collections.edges.map((edge) => edge.node);
    }
  },
  { immediate: true }
);

const firstRowCollections = collections.value.slice(0, 3);
const secondRowCollections = collections.value.slice(3, 5);
</script>
