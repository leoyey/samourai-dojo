/*!
 * tracker/index.js
 * Copyright © 2019 – Katana Cryptographic Ltd. All Rights Reserved.
 */
(async () => {

  'use strict'
  const keys = require('../keys')['testnet']

  var zmq = require('zeromq')
    , sock = zmq.socket('sub');

  sock.connect(`tcp://127.0.0.1:${keys.ports.tracker}`);
  sock.subscribe('block');
  sock.subscribe('transaction');
  console.log(`Subscriber connected to port ${keys.ports.tracker}`);

  sock.on('message', function(topic, message) {
    console.log('Receive Topic:', topic.toString());
    console.log(message.toString());
  });
  console.log('Waiting for events...')
})()
