import settings from "../tools/settings";
import ticket from "./ticket";

export default {
  ticket: ticket(settings.BASE_URL),
};
