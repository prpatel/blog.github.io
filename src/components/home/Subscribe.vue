<template>
  <v-container
    id="subscribe"
    tag="section"
  >
    <base-card
      color="rgba(203, 170, 92, 0.51)"
      class="pa-3"
    >
      <v-container
        grid-list-xl
        pa-0
      >
        <v-layout wrap>
          <v-flex
            xs12
            md5
          >
            <base-subheading class="mb-3">
              Subscribe
            </base-subheading>
            <p>
              Follow me on <a href="https://twitter.com/prpatel/">Twitter </a>to get announcements of new blog posts.
            </p>


          </v-flex>
          <v-flex
            xs12
            md6
            offset-md1
          >
            <base-subheading>Contact</base-subheading>
            <v-list class="transparent">
              <v-list-tile>
                <v-list-tile-avatar
                  color="primary"
                >
                  <v-icon
                    class="elevation-4"
                    dark
                  >
                    mdi-email-outline
                  </v-icon>
                </v-list-tile-avatar>
                <v-list-tile-title>EMAIL</v-list-tile-title>
                <v-list-tile-sub-title>
                  pratik --at prpatel.dev
                </v-list-tile-sub-title>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-avatar
                  color="primary"
                >
                  <v-icon
                    class="elevation-4"
                    dark
                  >
                    mdi-map-marker
                  </v-icon>
                </v-list-tile-avatar>
                <v-list-tile-title>ADDRESS</v-list-tile-title>
                <v-list-tile-sub-title>
                  Planet Earth
                </v-list-tile-sub-title>
              </v-list-tile>

            </v-list>
          </v-flex>
        </v-layout>
      </v-container>
    </base-card>
  </v-container>
</template>
