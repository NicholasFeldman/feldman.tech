<template>
  <v-container>
    <p class="text-h4">Upcoming Blog Posts</p>
    <v-row>
      <v-col v-for="post in posts" :key="post.title">
        <v-card>
          <v-img :src="post.image" />
          <v-card-title>{{ post.title }}</v-card-title>
          <v-card-text>{{ post.text }}</v-card-text>
          <v-card-actions v-if="post.links">
            <v-spacer />
            <v-btn
              v-for="link in post.links"
              :key="link.title"
              text
              color="primary"
              :href="link.href"
              target="_blank"
            >
              {{ link.title }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
export default {
  name: 'UpcomingBlogPosts',
  data() {
    return {
      posts: [
        {
          title: 'Diving Into Git Internals - Objects',
          image: './images/objects-cover.png',
          text: `
           In this post, I will dive into the nitty gritty of how git stores
           files internally. I will explain the file structure, types of binary
           files, and recount my experiences in creating entire git histories by
           manually hashing and writing objects, and developing a library to
           facilitate this.
           `,
        },
      ],
    }
  },
}
</script>
