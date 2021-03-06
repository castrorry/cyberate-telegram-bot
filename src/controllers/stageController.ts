import { Stage } from "telegraf";
import { MiddlewareFn } from 'telegraf/typings/composer';
import { ContextRobot } from "@bot";
import startScene from "@scenes/start";
import bannedScene from "@scenes/banned";
import greeterScene from "@scenes/tes";

export const useScene = (): MiddlewareFn<ContextRobot> => {
  const stage = new Stage([
    bannedScene,
    startScene
  ], { ttl: 300 });
  return stage.middleware();
}