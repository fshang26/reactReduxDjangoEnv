import axios from 'axios';
import cookie from 'react-cookies';

const csrftoken = cookie.load('csrftoken');

// CRSF token is needed in all requests that can make a change server side
axios.defaults.headers.post['X-CSRFToken'] = csrftoken;
axios.defaults.headers.put['X-CSRFToken'] = csrftoken;
axios.defaults.headers.patch['X-CSRFToken'] = csrftoken;
// api.defaults.headers.delete['X-CSRFToken'] = cookie.csrftoken; // Currently axios can't set headers for DELETE

// Since we will only be using JSON APIs, add Content-Type: application/json to header as default
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';
axios.defaults.headers.patch['Content-Type'] = 'application/json';

// Since we will only be using JSON APIs, add Accept: application/json to header as default
axios.defaults.headers.get.Accept = 'application/json';
axios.defaults.headers.post.Accept = 'application/json';
axios.defaults.headers.put.Accept = 'application/json';
axios.defaults.headers.patch.Accept = 'application/json';

// JWT is going to be saved into cookie
// cookies.save('jwt', response.data.token, { secure: true, httpOnly: true });
// Therefore it will automatically be sent in the header of all API requests
// JWT will not be accessible to JavaScript because it is httpOnly :)

export default axios;
