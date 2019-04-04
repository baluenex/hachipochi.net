window.onload = function(){
  var file = '';
  var baseUrl = 'https://o8h9y9lig6.execute-api.ap-northeast-1.amazonaws.com/Prod/'

  var uploadImg = new Vue({
    el: '#uploadImg',
    data: {
      uploadedImg: ''
    },
    methods: {
      indicateImg: function(e){
        file = e.target.files[0];
        if(file && file.type.match(/^image\/(png|jpeg)$/)) {
          this.uploadedImg = URL.createObjectURL(file);
        }
      }
    }
  });

  var sendImgData = new Vue({
    el: '#sendImgData',
    data: {
      title: '',
      cont_name: '',
      file: ''
    },
    methods: {
      onSubmit: function() {
        var data = [];
        data.push({'title': this.title});
        data.push({'cont_name': this.cont_name});
        data.push({'file': file});
        console.log(data);
        let url = baseUrl + 'img'
        console.log(url)

        axios.post(url,JSON.stringify(data))
          .then((response) => {
            console.log(response.data);
          }).catch((error) => {
            console.log(error);
          })
      }
    }
  });
}
