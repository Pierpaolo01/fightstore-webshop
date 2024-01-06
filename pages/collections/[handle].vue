<template>
  <UContainer class="y-padding space-y-28" v-if="collection">
    <div class="space-y-5">
      <h2>{{ collection.title }}</h2>
      <p>
        {{ collection.description }}
      </p>
    </div>
    <div class="grid laptop:grid-cols-12">
      <div class="laptop:col-span-3">filters</div>
      <div class="laptop:col-span-9 space-y-6">
        <SearchBar
          v-model="productSearch"
          v-model:modelColumns="productColumns"
          :productCount="collection.products.length"
        />
        <div
          class="grid gap-4 place-items-center"
          :class="{
            'grid-cols-2': productColumns === 2,
            'grid-cols-3': productColumns === 3,
            'grid-cols-4': productColumns === 4,
          }"
        >
          <ProductCard
            class="w-full"
            v-for="product in collection.products"
            :key="product.id"
            :handle="product.handle"
            :title="product.title"
            :featuredImageUrl="product.featuredImage?.url"
            :minVariantPrice="product.priceRange.minVariantPrice"
          />
        </div>
      </div>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
import { useQuery } from "@vue/apollo-composable";
import { CollectionQuery } from "~/graphql/collectionsQueries";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";

const productSearch = ref("");
const productColumns = ref(2);

const route = useRoute();

const { result, loading } = useQuery(CollectionQuery, {
  handle: route.params.handle,
});

const collection = computed(() => {
  if (!result.value) return;

  return {
    ...result.value.collection,
    products: result.value.collection.products.edges.map((edge) => edge.node),
  };
});
</script>
