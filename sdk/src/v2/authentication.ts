import { StorageKeys, IStorage } from './storage/istorage';

export class Authentication {
  type: 'jwt' | 'third_party';

  token: string;

  thirdPartyProvider: string | null;

  thirdPartyTokenType: string | null;

  constructor(
    type: 'jwt' | 'third_party',
    token: string,
    thirdPartyProvider: string | null = null,
    thirdPartyTokenType: string | null = null,
  ) {
    this.type = type;
    this.token = token;
    this.thirdPartyProvider = thirdPartyProvider;
    this.thirdPartyTokenType = thirdPartyTokenType;
  }

  public static fromStorage(storage: IStorage): Authentication | null {
    const auth = storage.get(StorageKeys.AUTHENTICATION);
    if (!auth) {
      return null;
    }

    const authObj = JSON.parse(auth);
    return new Authentication(
      authObj.type,
      authObj.token,
      authObj.thirdPartyProvider ?? null,
      authObj.thirdPartyTokenType ?? null,
    );
  }

  public save(storage: IStorage): void {
    storage.save(StorageKeys.AUTHENTICATION, JSON.stringify(this));
  }
}
