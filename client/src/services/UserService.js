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
  },
  updateMemberService: ({ user }) => {
    return new Promise((resolve, reject) => {
      ServiceInstance.request({ url: `${member_endpoint.UPDATE_MEMBER}`, params: { user }, method: 'PUT' })
        .then(response => {
          if (response === undefined) {
            reject('Error in the updating the response');
          } else {
            resolve(response);
          }
        })
        .catch(error => {
          console.log('this error comes from (updateMemberService) ', error);
          reject(error);
        })
    });
  }
}

export default MemberService;