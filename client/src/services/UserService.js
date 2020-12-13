import ServiceInstance from './ServiceInstance.js';
import { member_endpoint } from '../endpoint';

const MemberService = {
  loginMemberService: ({ username, password }) => {
    return new Promise((resolve, reject) => {
      ServiceInstance.request({ url: `${member_endpoint.LOGIN_MEMBER}`, params: { username, password } })
        .then(response => {
          if (response === undefined) {
            reject('Connection error or configuration');
          } else {
            resolve(response);
          }
        })
        .catch(error => {
          console.log('this error comes from (loginMemberService), ', error);
          reject(error);
        });
    });
  }
}

export default MemberService;