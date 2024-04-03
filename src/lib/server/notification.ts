class NurseryNotification {
  private currentCode: string | null = null;

  public get code(): string | null {
    return this.currentCode;
  }

  public set code(code) {
    this.currentCode = code;
  }
}

const notification = new NurseryNotification();
export default notification