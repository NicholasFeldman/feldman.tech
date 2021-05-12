<template>
  <v-container>
    <p class="text-h4">Projects</p>
    <v-row>
      <v-col v-for="project in projects" :key="project.title" md="6" sm="12">
        <v-card>
          <v-img :src="project.image" />
          <v-card-text>{{ project.text }}</v-card-text>
          <v-card-actions v-if="project.links">
            <v-spacer />
            <v-btn
              v-for="link in project.links"
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
  name: 'Projects',
  data() {
    return {
      projects: [
        {
          title: 'BetterRecords',
          image: './images/betterrecords.png',
          text: `
           In 2016, I took over maintaining a mod for the popular game Minecraft.
           I used this as an opportunity to learn Kotlin, and re-wrote the mod
           multiple times until I was at a level of proficiency in Kotlin I was
           comfortable with. Today, the mod creeps towards one million downloads,
           and is currently sitting at a little under 800,000.
           `,
          links: [
            {
              title: 'Github',
              href: 'https://github.com/NicholasFeldman/BetterRecords',
            },
          ],
        },
        {
          title: 'feldman.tech',
          image: './images/feldman.png',
          text: `
          This is my personal site, that I use to test new frameworks,
          techniques, etc. As such, it's often re-written.
          In it's current iteration, it is built with Nuxt.
          I plan on expanding to include a blog, where I can ramble on and
          create content to share my learnings and experiences.
          `,
          links: [
            {
              title: 'Github',
              href: 'https://github.com/NicholasFeldman/feldman.tech',
            },
          ],
        },
      ],
    }
  },
}
</script>
