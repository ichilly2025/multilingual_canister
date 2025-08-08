import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface User { 'id' : string, 'username' : string }
export interface _SERVICE {
  'addUser' : ActorMethod<[string], string>,
  'getUserCount' : ActorMethod<[], bigint>,
  'getUsers' : ActorMethod<[], Array<User>>,
  'greet' : ActorMethod<[string], string>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
