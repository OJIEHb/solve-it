import httpClient from '@/services/HttpClient';

export default class BatGangService {
  solve (problem) {
    return httpClient.post('/bat-gang', problem);
  }
};
