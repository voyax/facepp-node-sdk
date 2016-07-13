var _ = require('underscore'),
    facePP = require('..');

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response
    } else {
      var error = new Error(response.statusText)
      error.response = response
      throw error
    }
  }
/**
 * use get method send request
 *
 * @param {string} url
 * @param {object} params
 * @param {function} callback
 * @api private
 */
exports.sendRequest = function (url, params, callback) {
    if (typeof callback !== 'function') {
        throw new TypeError('callback should be function');
    }
    var formData = new FormData(),
        qsParams = {
          api_key: facePP.api_key,
          api_secret: facePP.api_secret
        };

    qsParams = _.extend(qsParams, params);
    var _data;
    for(var key in qsParams){
      if(qsParams.hasOwnProperty(key)){
        _data = qsParams[key];
        if(key == 'img'){
          _data = {uri: _data, type: 'application/octet-stream',name:key};
        }
        formData.append(key, _data);
      }
    }
    fetch(url, {
      method: 'POST',
      body: formData
    })
    .then(checkStatus)
    .then((res) => res.json())
    .then(callback);
};
