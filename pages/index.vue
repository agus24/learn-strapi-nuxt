<script lang="ts" setup>
const articles = useArticles();
const _home = useHome();
const homeData = ref(null);
const articleList = ref([]);
onMounted(() => {
  getAll();
})

async function getAll() {
  homeData.value = await _home.getAll();
  const output = await articles.getAll();
  articleList.value = output.data;
}

</script>

<template>
  <div>
    <h1>{{ homeData?.data.attributes.Header }}</h1>
    <p>{{ homeData?.data.attributes.About }}</p>
    <ul>
      <li v-for="article in articleList" :key="article.id">
        <NuxtLink :to="'/articles/' + article.id">{{ article.attributes.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
