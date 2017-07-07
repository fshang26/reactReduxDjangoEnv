import axios from './api.config';

class LoginApi {
  static login(userinfo) {
    return axios({
      method: 'post',
      url: '/authAPIApp/login/',
      data: userinfo
    });
  }

  static logout() {
    return axios({
      method: 'get',
      url: '/authAPIApp/logout/',
    });
  }

  /*static getList() {
    return axios({
      method: 'get',
      url: '/mainApp/lists/',
    });
  }

  static addCard() {
    return axios({
      method: 'post',
      url: '/mainApp/cards/',
      data: {
        list: 1,
        title: 'hello1'
      }
    });
  }*/
}

export default LoginApi;
