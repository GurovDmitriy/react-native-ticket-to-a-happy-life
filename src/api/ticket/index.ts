export default function (baseURL: string) {
  return {
    async getList(payload: PayloadGetListType): Promise<TicketType[]> {
      const nameList = payload.nameList;

      const response = await fetch(`${baseURL}/public?command=returnTicker`, {
        method: "GET",
      });

      // TODO: dirty, no time to parse api service((...
      const tickerList = await response.json();
      const data = nameList.map((name) => {
        return {
          ...tickerList[name],
          name,
        };
      });

      return data;
    },
  };
}

export type TicketType = {
  id: number;
  last: string;
  lowestAsk: string;
  highestBid: string;
  percentChange: string;
  baseVolume: string;
  quoteVolume: string;
  isFrozen: string;
  postOnly: string;
  high24hr: string;
  low24hr: string;
};

type PayloadGetListType = {
  nameList: string[];
};
