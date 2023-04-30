export default function (appFetch: any, options: any, baseURL: string) {
  return {
    async getList(payload: any) {
      const nameList: string[] = payload.nameList;

      const response = await appFetch(
        `${baseURL}/public?command=returnTicker`,
        {
          ...options,
          method: "GET",
        }
      );

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
