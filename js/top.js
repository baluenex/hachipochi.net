window.onload = function() {

  const vm = new Vue({
    el: '#gallery',
    data: {
      results: []
    },
    async mounted() {
      await this.getGenre();
      this.results = this.modifyItemInfo(this.results);
    },
    methods: {
      async getGenre() {
        let baseUrl = 'https://o8h9y9lig6.execute-api.ap-northeast-1.amazonaws.com/Prod/';
        let url = baseUrl + 'genre';
        await axios.get(url).then(response => {
          console.log(response.data);
          this.results = response.data;
        }).catch(error => {
          console.log(error);
        })
      },
      modifyItemInfo(data) {
        for (i=0; i<data.length; i++){
          data[i].item_info = data[i].item_info.replace("\\", "");
          data[i].item_info = JSON.parse(data[i].item_info);
          data[i].item_info[0].cont_name = "./gallery.html?cont=" + data[i].item_info[0].cont_name;
        }
        return data;
      }
    }
  });
}
