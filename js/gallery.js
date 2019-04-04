window.onload = function() {

  var cont_type = new URLSearchParams(window.location.search);
  var baseUrl = 'https://o8h9y9lig6.execute-api.ap-northeast-1.amazonaws.com/Prod/';

  const vm = new Vue({
    el: '#img',
    data: {
      results: []
    },
    mounted() {
      let url = baseUrl + 'img?cont_name=' +  cont_type.get('cont')
      axios.get(url).then(response => {
        this.results = response.data.results;
      }).catch(error => {
        console.log(error);
      })
    },
    computed: {
      makeImageUrl() {
        let posts = this.results;
        posts.map(post => {
          let baseUri = 'https://s3-ap-northeast-1.amazonaws.com/hachipochi-img/';
          post.img_url = baseUri + post.img_name;
        });
      }
    }
  });
}
