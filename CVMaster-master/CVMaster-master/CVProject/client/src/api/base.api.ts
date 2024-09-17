import vars from '../config/env.config';

/**
 * This class contain base behavior and data for all HTTP requests
 */

class BaseAPIs {
  baseUrl: string;

  constructor() {
    this.baseUrl = 'http://10.100.102.6:6969/api/v1';

  }
}

export default BaseAPIs;
