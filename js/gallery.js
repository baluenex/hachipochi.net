window.onload = function(){
  
  var cont_type = new URLSearchParams(window.location.search);
  var baseUrl = 'https://o8h9y9lig6.execute-api.ap-northeast-1.amazonaws.com/Prod/'
  var url = baseUrl + 'img?cont_name=' +  cont_type.get('cont')

  const vm = new Vue({
    el: '#img',
    data() {
      return {
        data: null
      }
    },
    mounted() {
      axios
        .get(url)
        .then(response => (this.data = response.data))
    }
  });
}
