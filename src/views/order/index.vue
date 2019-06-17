<template>
  <div class="wrap">排序{{userinfo}}</div>
</template>
<script>
import request from '@/utils/request';
import {mapState} from 'vuex';
export default {
//   beforeRouteEnter(to, from, next) {
//     request.get("/api/user/info").then(res => {
//       next();
//     });
//   },
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {
      ...mapState('user',['userinfo'])
  },
  methods: {},
  created() {
      this.$store.dispatch('user/getUserInfo')
  },
  mounted() {}
};
</script>
<style scoped lang="">
</style>