<script setup lang="ts">
import { inject } from "vue"
import { db } from "@lib/db"

const pageContext: any = inject("pageContext")
const id = parseInt(pageContext.routeParams.userid, 10)
const user = await db.user.findFirst({ where: { id } })

if (!user) {
  throw new Error("User not found")
}
</script>

<template>
  <div style="flex">
    <h1>User Detail Page</h1>
    <p>Name: {{ user.name }}</p>
  </div>
</template>
