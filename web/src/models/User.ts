import axios, { AxiosResponse } from "axios";
import { Eventing } from "./Eventing";
import {Sync} from './Sync'


const rootUrl = 'http://localhost:3000'

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  public events: Eventing = new Eventing();

  public sync:Sync<UserProps> = new Sync<UserProps>(rootUrl)

  constructor(private data: UserProps) {}

  get(propsName: string): number | string {
    return this.data[propsName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }
}
