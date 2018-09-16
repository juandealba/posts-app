//Used to transfer user between components
import { User } from './data-model';
import { Subject }    from 'rxjs';

export class UserService {
  public user: User;
  private login = new Subject<any>();
  private logout = new Subject<any>();
  private postFullyLoaded = new Subject<any>();

  login$ = this.login.asObservable();
  logout$ = this.logout.asObservable();
  postFullyLoaded$ = this.postFullyLoaded.asObservable();

  get theUser(): User {
    return this.user;
}

  emmitLogin(user: User) {
    this.login.next(user);
  }

  emmitPostFullyLoaded(user: User) {
    this.postFullyLoaded.next(user);
  }

  emmitLogout() {
    this.user = null;
    this.logout.next();
  }
}