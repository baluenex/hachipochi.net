window.onload = function(){

  var uploadImg = new Vue({
    el: '#uploadImg',
    data: {
      uploadedImg: ''
    },
    methods: {
      indicateImg: function(e){
        var file = e.target.files[0];
        if(file && file.type.match(/^image\/(png|jpeg)$/)) {
          this.uploadedImg = URL.createObjectURL(file);
        }
      }
    }
  });

  var sendImgData = new Vue({
    el: '#sendImgData',
    methods: {
      onSubmit: function(){
        console.log('test');
      }
    }
  });
}
