import {
  PRIMARY,
  SECONDARY,
  SUCCESS,
  DANGER,
  WARNING,
  INFO,
  WHITE,
  DARK,
} from "@/constants";

export const colorValidator = (value) =>
  [PRIMARY, SECONDARY, SUCCESS, DANGER, WARNING, INFO, WHITE, DARK].includes(
    value
  );
