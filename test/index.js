var p2pspider = require('../lib/index.js');
var amqp = require('amqplib/callback_api');

// 连接上RabbitMQ服务器
amqp.connect('amqp://test:123456@168.1.140.254:31702/test', function(err, conn) {  
  conn.createChannel(function(err, ch) {
    var q = 'chili';

    // 声明队列，然后将队列中的消息持久化取消
    ch.assertQueue(q, {durable: false}); 
    // 将字符串存入Buffer中，并推入队列
   // ch.sendToQueue(q, new Buffer('Hello World!'));
    p2pspider(data => {
	data["pieces"] ='';
        ch.sendToQueue(q, new Buffer(JSON.stringify(data)));
        console.log(data);
      });
  });
});






// p2pspider(data => {
//  console.log(data);
// });
