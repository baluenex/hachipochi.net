function head(){
  var head = "";
  head += '<title>はちぽち.net</title>';
  head += '<link rel="shortcut icon" href="https://s3-ap-northeast-1.amazonaws.com/hachipochi-img/dog_nikukyu.png" type="image/">';
  head += '<link rel="stylesheet" type="text/css" href="./css/common.css">';
  head += '<link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,700" rel="stylesheet">';
  head += '<meta name="description" content="僕たちはちぽちをはじめとする、とても可愛らしい我が家のアニマルグッズを紹介するサイトだわん！わん！">'
  head += '<!-- Global site tag (gtag.js) - Google Analytics -->'
  head += '<script async src="https://www.googletagmanager.com/gtag/js?id=UA-136390139-1"></script>'
  document.write(head);

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-136390139-1');
}
