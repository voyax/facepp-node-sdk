## FacePlusPlus node.js sdk.

### Install

npm

```shell
    npm install facepp-node-sdk
```

### Usage

#### [FacePlusPlus API](http://www.faceplusplus.com.cn/api-overview/)

```javascript

    var Fpp = require('face-node-sdk');
    var detectParams = {
            url : 'http://faceplusplus.com/static/img/demo/1.jpg';
            mode: 'normal'
        };

    Fpp.api_key = '<YOUR_API_KEY_HERE>';
    Fpp.api_secret = '<YOUR_API_SECRET_HERE>';

    Fpp.detection.detect(detectParams, function (err, res) {
        // to do something
        console.log(res.face[0].attribute.age);    
    });

    Fpp.train.verify(verifyParams, function (err, res) {
        // to do something

    }
```
