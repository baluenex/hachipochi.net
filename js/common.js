function head(){
  var head = "";
  head += '<title>はちぽち.net</title>';
  head += '<link rel="shortcut icon" href="./img/dog_nikukyu.png" type="image/">';
  head += '<link rel="stylesheet" type="text/css" href="./css/common.css">';
  head += '<link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,700" rel="stylesheet">';
  head += '<!-- Global site tag (gtag.js) - Google Analytics -->'
  head += '<script async src="https://www.googletagmanager.com/gtag/js?id=UA-136390139-1"></script>'
  document.write(head);

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-136390139-1');
}
