window.onload = function() {

  const vm = new Vue({
    el: '#gallery',
    data: {
      results: []
    },
    mounted() {
      let baseUrl = 'https://o8h9y9lig6.execute-api.ap-northeast-1.amazonaws.com/Prod/';
      let url = baseUrl + 'genre';
      axios.get(url).then(response => {
        this.results = response.data.results;
      }).catch(error => {
        console.log(error);
      })
    },
    computed: {
      makeButtonGoal() {
        let posts = this.results;
        posts.map(post => {
          let baseUri = './gallery.html?cont=';
          post.button_url = baseUri + post.item_info.cont_name;
        });
      }
    }
  });
}
