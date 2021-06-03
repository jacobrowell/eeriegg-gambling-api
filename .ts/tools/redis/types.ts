import { ISocketChannelEventMap, OutgoingSocketMessage } from "../socket/types";

export interface IPubSubEvent<
  Channel extends keyof ISocketChannelEventMap = keyof ISocketChannelEventMap
> {
  clientIds?: string[];
  data: OutgoingSocketMessage<Channel>;
}

export enum RedisStoreName {
  JOBS = "jobs",
  STATE_GAME = "state:game",
}
