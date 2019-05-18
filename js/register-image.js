window.onload = function(){
  var file = '';
  var baseUrl = 'https://o8h9y9lig6.execute-api.ap-northeast-1.amazonaws.com/Prod/'

  var sendImgData = new Vue({
    el: '#sendImgData',
    data: {
      title: '',
      cont_name: '',
      files: []
    },
    methods: {
      onSubmit() {
        console.log('ファイルを送るぜ！')
        let data = new FormData;
        data.append('title', this.title);
        data.append('cont_name', this.cont_name);
        data.append('file', this.files[0]);
        console.log(data);

        let url = baseUrl + 'img'
        console.log(url)

        axios.post(url,JSON.stringify(data))
        .then((response) => {
          console.log(response.data);
        }).catch((error) => {
          console.log(error);
        })
      },
      onDrop(event) {
        let fileList = event.target.files;
        for (let i=0; i<fileList.length; i++) {
          files.push(fileList[i]);
        }
      }
    }
  });
}
