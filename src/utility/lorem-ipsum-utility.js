import { LOREM_IPSUM } from "config/constant";

export const generate = (
  count = 2,
  prefix = "",
  suffix = "",
  separator = " "
) => {
  return `${prefix}${separator}${LOREM_IPSUM.concat(" ").repeat(
    count
  )}${separator}${suffix}`;
};
