import { chartColorType } from "./constant-chart";

export type chartKeyProps<T = string> = {
  name: T;
  strokeColor: keyof chartColorType;
};
