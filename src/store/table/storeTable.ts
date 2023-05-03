import { action, makeObservable, observable, runInAction } from "mobx";
import api from "../../api";
import { TickerType } from "../../api/ticker";
import settings from "../../tools/settings";
import { ActionStatus } from "../types";

class StoreTable {
  entities: TickerType[] | null = null;
  status: ActionStatus = ActionStatus.useless;
  error: string | null = null;

  constructor() {
    makeObservable(this, {
      entities: observable,
      status: observable,
      error: observable,
      fetchData: action,
    });
  }

  async fetchData(): Promise<void> {
    this.status = ActionStatus.pending;

    try {
      const tickerList = await api.ticker.getList({
        nameList: settings.NAMES_TICKERS,
      });

      runInAction(() => {
        this.entities = tickerList;
        this.status = ActionStatus.success;
        this.error = null;
      });
    } catch (err) {
      runInAction(() => {
        this.status = ActionStatus.failure;
        this.error = "error";
        console.error(err);
      });
    }
  }
}

const storeTable = new StoreTable();

export default storeTable;
