import axios from './api.config';

class LoginApi {

  static logout() {
      return axios({
        method: 'get',
        url: '/authAPIApp/logout/',
      });
  }

  static login() {
    return axios({
      method: 'post',
      url: '/authAPIApp/login/',
      data: {
        username: 'fshang',
        password: 'filter366'
      }
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
