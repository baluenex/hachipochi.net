window.onload = function(){

  var uploadImg = new Vue({
    el: '#uploadImg',
    data: {
      preview: ''
    },
    methods: {
      indicateImg: function(e){
        var file = e.target.files[0];
        if(file && file.type.match(/^image\/(png|jpeg)$/)) {
          this.preview = URL.createObjectURL(file);
        }
      }
    }
  });
}
