window.onload = function(){
  var file = '';

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

        axios.post(url,data)
          .then((response) => {
            console.log(response.data);
          }).catch((error) => {
            console.log(error);
          })
      }
    }
  });
}
