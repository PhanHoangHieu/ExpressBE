import moment from "moment-timezone";
import { TIME_ZONE } from "../common";

export function getCurrentJPMoment() {
  return moment().tz(TIME_ZONE.ASIA_TOKYO);
}
