<template>
  <UContainer class="y-padding laptop:space-y-20 space-y-12" v-if="collection">
    <div class="space-y-5">
      <h2>{{ collection.title }}</h2>
      <p>
        {{ collection.description }}
      </p>
    </div>
    <div class="grid laptop:grid-cols-12" v-if="filters">
      <div class="col-span-3 pr-6 divide-y space-y-4 hidden laptop:block">
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
        <FilterFlavor
          v-if="filters.find((filter) => filter.id === 'filter.v.option.smaak')"
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
          @update:sorting="productSorting = $event"
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
            <FilterFlavor
              v-if="
                filters.find((filter) => filter.id === 'filter.v.option.smaak')
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
            class="card"
            v-for="product in collection.products"
            :key="product.id"
            :handle="product.handle"
            :title="product.title"
            :featuredImageUrl="product.featuredImage?.url"
            :minVariantPrice="product.priceRange?.minVariantPrice"
          />
        </div>
        <div v-if="!collection.products.length">
          <span class="font-semibold text-slate-500 text-center"
            >Er zijn geen producten gevonden in deze categorie</span
          >
        </div>
        <Pagination
          v-if="pageInfo.hasPreviousPage || pageInfo.hasNextPage"
          :pageInfo="pageInfo"
          @navigateNext="paginateNext($event)"
          @navigatePrevious="paginatePrev($event)"
        />
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
const productColumns = ref(2);
const activeFilters = ref<any[]>([]);

const route = useRoute();

const { result, refetch } = useQuery(CollectionQuery, {
  handle: route.params.handle,
  filters: [] as any[],
  before: undefined as string | undefined,
  after: undefined as string | undefined,
  first: 30 as number | undefined,
  last: undefined as number | undefined,
  sortKey: undefined as string | undefined,
  reversed: false,
});

const collection = computed(() => {
  if (!result.value) return;

  if (productSearch.value) {
    return {
      ...result.value.collection,
      products: result.value.collection.products.edges
        .filter((edge) => {
          return edge.node.title
            .toLowerCase()
            .includes(productSearch.value.toLocaleLowerCase());
        })
        .map((edge) => edge.node),
    };
  }

  return {
    ...result.value.collection,
    products: result.value.collection.products.edges.map((edge) => edge.node),
  };
});

const filters = ref();
const pageInfo = ref();
const beforeCursor = ref<string>();
const afterCursor = ref<string>();
const productSorting = ref({ sortKey: undefined, reversed: false });

watch(
  productSorting,
  () => {
    refetch({
      handle: route.params.handle,
      filters: activeFilters.value.map((filter) => {
        delete filter.id;
        return filter;
      }),
      before: beforeCursor.value,
      after: afterCursor.value,
      first: 30,
      last: undefined,
      ...productSorting.value,
    });
  },
  { deep: true }
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
    before: beforeCursor.value,
    after: afterCursor.value,
    first: 30,
    last: undefined,
    ...productSorting.value,
  });
}, 1000);

watch(
  activeFilters,
  () => {
    debounceRefetch();
  },
  { deep: true }
);

const paginatePrev = (cursor?: string) => {
  afterCursor.value = undefined;
  beforeCursor.value = cursor;

  refetch({
    handle: route.params.handle,
    filters: activeFilters.value.map((filter) => {
      delete filter.id;
      return filter;
    }),
    before: beforeCursor.value,
    after: afterCursor.value,
    first: undefined,
    last: 30,
    ...productSorting.value,
  });
};

const paginateNext = (cursor?: string) => {
  beforeCursor.value = undefined;
  afterCursor.value = cursor;

  refetch({
    handle: route.params.handle,
    filters: activeFilters.value.map((filter) => {
      delete filter.id;
      return filter;
    }),
    before: beforeCursor.value,
    after: afterCursor.value,
    first: 30,
    last: undefined,
    ...productSorting.value,
  });
};

const updateSeoMeta = () =>
  useSeoMeta({
    title: () => `${collection.value?.title}`,
    description: () => `${collection.value?.description}`,
    ogTitle: () => `${collection.value?.title}`,
    ogDescription: () => `${collection.value?.description}`,
    ogImage: () =>
      `${collection.value?.image ? collection.value.image.url : ""}`,
    twitterTitle: () => `${collection.value?.title}`,
    twitterDescription: () => `${collection.value?.description ?? ""}`,
    twitterImage: () =>
      `${collection.value?.image ? collection.value.image.url : ""}`,
    twitterCard: "summary",
  });

updateSeoMeta();

watch(
  result,
  (value) => {
    if (!value) return;

    filters.value = value.collection.products.filters;
    pageInfo.value = value.collection.products.pageInfo;
    updateSeoMeta();
  },
  { deep: true, immediate: true }
);

useHead({
  script: [
    {
      children: `(function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:3852225,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
    },
    {
      children: `window._mfq = window._mfq || [];
        (function() {
          var mf = document.createElement("script");
          mf.type = "text/javascript"; mf.defer = true;
          mf.src = "//cdn.mouseflow.com/projects/7d391ec4-5e29-4558-90e2-a987891e7c8c.js";
          document.getElementsByTagName("head")[0].appendChild(mf);
        })()`,
    },
  ],
});
</script>

<style scoped>
:deep(.card) {
  @apply h-[350px] w-full;

  @media tablet {
    @apply h-[220px];
  }
}
</style>
