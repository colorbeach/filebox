var photo = require('../controller/photo.js');

module.exports = function(app){
  app.get('/', function(req, res) {
    res.render('index', { title: 'Express' });
  });

  //获取图片
  app.get('/fetch/img',photo.get_img);

  //保存图片
  app.post('/save/img',photo.save_img);

}
