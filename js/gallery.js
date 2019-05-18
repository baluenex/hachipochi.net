window.onload = function(){

  var cont_type = new URLSearchParams(window.location.search);
  var baseUrl = 'https://o8h9y9lig6.execute-api.ap-northeast-1.amazonaws.com/Prod/'
  var url = baseUrl + 'img?cont_name=' +  cont_type.get('cont')

  const vm = new Vue({
    el: '#img',
    data: {
      results: []
    },
    async mounted() {
      await this.getImgData();
      await this.modifyItemInfo(this.results);
      this.sortItemInfo(this.results);
    },
    methods: {
      async getImgData() {
        await axios.get(url).then(response => {
          this.results = response.data;
        }).catch(error => {
          console.log(error);
        });
      },
      modifyItemInfo(data) {
        for (i=0; i<data.length; i++) {
          data[i].item_info = data[i].item_info.replace("\\", "");
          data[i].item_info = JSON.parse(data[i].item_info);
        }
        return data;
      },
      sortItemInfo(data) {
        data.sort(function(val1, val2){
          var val1 = val1.register_time;
          var val2 = val2.register_time;
          if (val1<val2) {
            return 1;
          }else{
            return -1;
          }
        });
      }
    }
  });
}
