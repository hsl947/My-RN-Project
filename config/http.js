import {ToastAndroid} from 'react-native';

const xhr = (method, url, params = {}) => {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    })
      .then(res => res.json())
      .then(resJson => {
        resolve(resJson);
      })
      .catch(e => {
        ToastAndroid.showWithGravity(e, ToastAndroid.LONG, ToastAndroid.BOTTOM);
      });
  });
};

// get请求
xhr.get = (url, params) => {
  return xhr('get', url, params);
};

// post请求
xhr.post = (url, params) => {
  return xhr('post', url, params);
};

export default xhr;
