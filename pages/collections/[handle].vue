<template>
  <UContainer class="y-padding space-y-28" v-if="collection">
    <div class="space-y-5">
      <h2>{{ collection.title }}</h2>
      <p>
        {{ collection.description }}
      </p>
    </div>
    <!-- TODO implemnent proper page load -->
    <div class="grid laptop:grid-cols-12" v-if="filters">
      <div class="col-span-3 px-8 divide-y space-y-4 hidden laptop:block">
        <FilterPrice
          v-model:activeFilters="activeFilters"
          :filters="filters"
          @addFilter="addActiveFilter($event)"
        />
        <FilterSize
          v-if="filters.find((filter) => filter.id === 'filter.v.option.maat')"
          :filters="filters"
          :activeFilters="activeFilters"
          @addFilter="activeFilters.push($event)"
          @remove-filter="
            activeFilters.splice(
              activeFilters.findIndex(
                (filter) => JSON.stringify(filter) === JSON.stringify($event)
              ),
              1
            )
          "
        />
        <FilterColor
          v-if="filters.find((filter) => filter.id === 'filter.v.option.kleur')"
          :filters="filters"
          :activeFilters="activeFilters"
          @addFilter="activeFilters.push($event)"
          @remove-filter="
            activeFilters.splice(
              activeFilters.findIndex(
                (filter) => JSON.stringify(filter) === JSON.stringify($event)
              ),
              1
            )
          "
        />
        <FilterOunce
          v-if="
            filters.find((filter) => filter.id === 'filter.v.option.grootte')
          "
          :filters="filters"
          :activeFilters="activeFilters"
          @addFilter="activeFilters.push($event)"
          @remove-filter="
            activeFilters.splice(
              activeFilters.findIndex(
                (filter) => JSON.stringify(filter) === JSON.stringify($event)
              ),
              1
            )
          "
        />
        <FilterMaterial
          v-if="
            filters.find((filter) => filter.id === 'filter.v.option.materiaal')
          "
          :filters="filters"
          :activeFilters="activeFilters"
          @addFilter="activeFilters.push($event)"
          @remove-filter="
            activeFilters.splice(
              activeFilters.findIndex(
                (filter) => JSON.stringify(filter) === JSON.stringify($event)
              ),
              1
            )
          "
        />
        <FilterAvilable
          v-if="filters.find((filter) => filter.id === 'filter.v.availability')"
          :filters="filters"
          :activeFilters="activeFilters"
          @addFilter="activeFilters.push($event)"
          @remove-filter="
            activeFilters.splice(
              activeFilters.findIndex(
                (filter) => JSON.stringify(filter) === JSON.stringify($event)
              ),
              1
            )
          "
        />
      </div>
      <div class="laptop:col-span-9 space-y-6">
        <SearchBar
          v-model="productSearch"
          v-model:modelColumns="productColumns"
          :productCount="collection.products.length"
        >
          <div class="divide-y space-y-4 px-3">
            <FilterPrice
              v-model:activeFilters="activeFilters"
              :filters="filters"
              @addFilter="addActiveFilter($event)"
            />
            <FilterSize
              v-if="
                filters.find((filter) => filter.id === 'filter.v.option.maat')
              "
              :filters="filters"
              :activeFilters="activeFilters"
              @addFilter="activeFilters.push($event)"
              @remove-filter="
                activeFilters.splice(
                  activeFilters.findIndex(
                    (filter) =>
                      JSON.stringify(filter) === JSON.stringify($event)
                  ),
                  1
                )
              "
            />
            <FilterColor
              v-if="
                filters.find((filter) => filter.id === 'filter.v.option.kleur')
              "
              :filters="filters"
              :activeFilters="activeFilters"
              @addFilter="activeFilters.push($event)"
              @remove-filter="
                activeFilters.splice(
                  activeFilters.findIndex(
                    (filter) =>
                      JSON.stringify(filter) === JSON.stringify($event)
                  ),
                  1
                )
              "
            />
            <FilterOunce
              v-if="
                filters.find(
                  (filter) => filter.id === 'filter.v.option.grootte'
                )
              "
              :filters="filters"
              :activeFilters="activeFilters"
              @addFilter="activeFilters.push($event)"
              @remove-filter="
                activeFilters.splice(
                  activeFilters.findIndex(
                    (filter) =>
                      JSON.stringify(filter) === JSON.stringify($event)
                  ),
                  1
                )
              "
            />
            <FilterMaterial
              v-if="
                filters.find(
                  (filter) => filter.id === 'filter.v.option.materiaal'
                )
              "
              :filters="filters"
              :activeFilters="activeFilters"
              @addFilter="activeFilters.push($event)"
              @remove-filter="
                activeFilters.splice(
                  activeFilters.findIndex(
                    (filter) =>
                      JSON.stringify(filter) === JSON.stringify($event)
                  ),
                  1
                )
              "
            />
            <FilterAvilable
              v-if="
                filters.find((filter) => filter.id === 'filter.v.availability')
              "
              :filters="filters"
              :activeFilters="activeFilters"
              @addFilter="activeFilters.push($event)"
              @remove-filter="
                activeFilters.splice(
                  activeFilters.findIndex(
                    (filter) =>
                      JSON.stringify(filter) === JSON.stringify($event)
                  ),
                  1
                )
              "
            />
          </div>
        </SearchBar>
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
import { CollectionQuery, type Collection } from "~/graphql/collectionsQueries";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";

const productSearch = ref("");
const productColumns = ref(3);
const activeFilters = ref<any[]>([]);

const route = useRoute();

const { result, loading, refetch } = useQuery(CollectionQuery, {
  handle: route.params.handle,
  filters: [] as any[],
});

const collection = computed(() => {
  if (!result.value) return;

  return {
    ...result.value.collection,
    products: result.value.collection.products.edges.map((edge) => edge.node),
  };
});

const filters = ref();

watch(
  result,
  (value) => {
    if (!value) return;

    filters.value = value.collection.products.filters;
  },
  { deep: true, immediate: true }
);

const addActiveFilter = (filter) => {
  activeFilters.value.push(filter);
};

const debounceRefetch = useDebounce(() => {
  refetch({
    handle: route.params.handle,
    filters: activeFilters.value.map((filter) => {
      delete filter.id;
      return filter;
    }),
  });
}, 1000);

watch(
  activeFilters,
  () => {
    debounceRefetch();
  },
  { deep: true }
);
</script>
