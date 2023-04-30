import ticket from "./ticket";
import settings from "../tools/settings";

export default {
  ticket: ticket(settings.BASE_URL),
};
