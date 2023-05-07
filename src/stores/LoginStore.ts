import { singleton } from 'tsyringe';
import { Action, Store } from 'usestore-ts';
import { apiService } from '../services/ApiService';

@singleton()
@Store()
class LoginStore {
  email = '';

  password = '';

  accessToken = '';

  error = false;

  // 유효성 검사 test
  get valid() {
    return this.email.includes('@') && !!this.password;
  }

  @Action()
  changeEmail(email: string) {
    this.email = email;
  }

  @Action()
  changesetPassword(password: string) {
    this.password = password;
  }

  @Action()
  setAccessToken(accessToken: string) {
    this.accessToken = accessToken;
    this.error = false;
  }

  @Action()
  setError() {
    this.error = true;
  }

  @Action()
  reset() {
    this.email = '';
    this.password = '';
    this.error = false;
    this.accessToken = '';
  }

  async login() {
    try {
      const accessToken = await apiService.login(
        { email: this.email, password: this.password },
      );

      this.setAccessToken(accessToken);
    } catch (err) {
      this.setError();
    }
  }
}

export default LoginStore;
