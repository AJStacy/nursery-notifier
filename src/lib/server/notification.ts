import { LocalStorage } from 'node-localstorage';

class NurseryNotification {
  private localStorage = new LocalStorage('/Users/TechTeam/Projects/nursery-notifier/scratch');

  public get code(): string | null {
    const code = this.localStorage.getItem('code');
    return code === '' ? null : code;
  }

  public set code(code: string | null) {
    this.localStorage.setItem('code', code ?? '');
  }
}

const notification = new NurseryNotification();
export default notification