<template>
  <div>My component {{ JSON.stringify(tasks) }}</div>
</template>

<script>
import gql from "graphql-tag";
export default {
  apollo: {
    tasks: gql`
      query {
        tasks {
          id
          title
          description
        }
      }
    `,
  },

  data() {
    return {
      // Initialize your apollo data
      tasks: "",
      hello: "",
    };
  },
};
</script>
