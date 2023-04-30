import ticket from "./ticket";
import settings from "../tools/settings";

export default {
  ticket: ticket(fetch, {}, settings.BASE_URL),
};
