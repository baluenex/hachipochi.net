window.onload = function(){
  const vm = new Vue({
    el: '#img',
    data() {
      return {
        data: null
      }
    },
    mounted() {
      axios
        .get('https://atps3sxmb9.execute-api.ap-northeast-1.amazonaws.com/default/get_gallery_img')
        .then(response => (this.data = response.data))
    }
  });
}
