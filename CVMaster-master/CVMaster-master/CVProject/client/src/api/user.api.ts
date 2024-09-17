import axios from 'axios';
import {
  IUserCreate, IUserUpdate,
  IUserSignIn, IUserForgetPassword, IUserResetPassword,
} from '../interfaces/domain/index';
import { BaseAPIs } from '.';

/**
 * This class contains HTTP requests to the backend API of User and Company
 */
class UserAPIs {
  private baseUrl: string;

  constructor() {
    // Create an instance of the BaseAPIs class to get the base URL of the backend API
    const baseAPIs = new BaseAPIs();
    // Set the baseUrl property of the UserAPIs class to the base URL of the backend API
    this.baseUrl = baseAPIs.baseUrl;
  }


  createUserApi = (user: IUserCreate) => axios.post(`${this.baseUrl}/users`, user, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  updateUserByIdApi = (id: string, user: IUserUpdate) => axios.put(`${this.baseUrl}/users/${id}`, user);

  forgetUserPasswordApi = (user: IUserForgetPassword) => axios.put(`${this.baseUrl}/users/password-forget`, user);

  resetUserPasswordApi = (user: IUserResetPassword) => axios.put(`${this.baseUrl}/users/password-reset`, user);

  loginUserApi = (user: IUserSignIn) => axios.post(`${this.baseUrl}/users/login`, user);

  getUserByIdApi = (id: string) => axios.get(`${this.baseUrl}/users/${id}`);

  registerUserApi = (user: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    mobile: string;
    role: string;
  }) => axios.post(`${this.baseUrl}/users/register`, user);

 
  loginCompanyApi = (company: { email: string; password: string }) =>
    axios.post(`${this.baseUrl}/companies/login`, company);

  registerCompanyApi = (company: {
    name: string;
    firstName: string;
    lastName: string;
    mobile: string;
    email: string;
    password: string;
    role: string;
  }) => axios.post(`${this.baseUrl}/companies`, company);

  
  uploadCVApi = (applicantId: string, file: File) => {
    const formData = new FormData();
    formData.append('applicantId', applicantId);
    formData.append('cv', file);

    return axios.post(`${this.baseUrl}/cvs/`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }

  
  fetchJobListings = () => axios.get(`${this.baseUrl}/jobs`);
}

export default UserAPIs;
