import httpClient from '@/services/HttpClient';

export default class GreyWolfService {
  solve (problem) {
    return httpClient.post('/grey-wolf', problem);
  }
};
