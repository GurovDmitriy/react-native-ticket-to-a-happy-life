import { action, makeObservable, observable, runInAction } from "mobx";
import { ActionStatus } from "../types";

class StoreTable {
  entities: any = null;
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

  async fetchData(): Promise<any | undefined> {
    this.status = ActionStatus.pending;

    try {
      const response = await fetch(
        "https://poloniex.com/public?command=returnTicker&currencyPair=BTC_ETH"
      );

      const ticker = await response.json();
      const dataTable = [ticker.BTC_ETH];

      runInAction(() => {
        this.entities = dataTable;
        this.status = ActionStatus.success;
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
