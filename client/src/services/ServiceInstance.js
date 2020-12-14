import axios from 'axios';

export default class ServiceInstance {
  static request({ url, params = {}, method = 'POST' }) {
    console.log('the irl ', url)
    console.log('method is  ', method)
    return axios({
      method,
      url: `/api${url}`,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: params
    })
      .then(
        response => response.data,
        error => console.log('Error coming from, (ServiceInstance), ', error)
      )
      .catch(error => console.log('This failed (ServiceInstance), ', error));
  }
}