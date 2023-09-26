<script lang="ts" setup>
import { marked } from 'marked';

const _article = useArticles();
const article = ref(null);
const route = useRoute();

onMounted(() => {
  find()
})

const content = computed(() => {
  return marked(article.value?.attributes.content ?? '');
})

async function find() {
  const result = await _article.get(route.params.id)
  console.log(result.data);

  article.value = result.data;
}
</script>

<template>
  <div v-if="article">
    <h1>{{ article.attributes.title }}</h1>
    <p v-html="content"></p>
  </div>
</template>
