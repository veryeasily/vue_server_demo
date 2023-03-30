<template>
  <h1>Welcome</h1>
  This page is:
  <ul>
    <li>Rendered to HTML.</li>
    <li>Interactive. <Counter /></li>
  </ul>
  <ul>
    <li class="flex" v-for="post in posts" :key="post.id">
      <div>
        <h2>{{ post.title }}</h2>
        <p>{{ post.content }}</p>
      </div>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { db } from "@lib/db"
import Counter from "@components/Counter.vue"

const posts = await db.post.findMany()
</script>
