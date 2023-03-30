<script setup lang="ts">
import { inject } from "vue"
import { db } from "@lib/db"
import { User } from "@prisma/client"

const pageContext: any = inject("pageContext")
const id = parseInt(pageContext.routeParams.userid, 10)
const users: User[] = await db.$queryRaw`SELECT * FROM User WHERE id = ${id}`
const user = users[0] || null

if (!user) {
  throw new Error("User not found")
}
</script>

<template>
  <div class="flex">
    <h1 class="text-lg font-bold">User Detail Page</h1>
    <p>Name: {{ user.name }}</p>
  </div>
</template>
