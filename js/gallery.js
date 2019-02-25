window.onload = function(){
  var sitenm = new Vue({
    el: '#sitenm',
    data: {
      message: 'はちぽちの部屋'
    }
  })

  const vm = new Vue({
    el: '#img',
    data: {
      results: [
        {
          "img_id":"hachipochi_hakusai.JPG_img",
          "img_name":"https://s3-ap-northeast-1.amazonaws.com/hachipochi-img/hachipochi_hakusai.JPG",
          "img_type":"hachipochi",
          "title":"はちぽちと白菜"
        }
      ]
    }
  });
}
