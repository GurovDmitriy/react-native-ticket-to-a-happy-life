import settings from "../tools/settings";
import ticker from "./ticker";

export default {
  ticker: ticker(settings.BASE_URL),
};
