import { useEffect } from "react";

export const ApiRequest = () => {
  useEffect(() => {
    const coinGeckoRequest = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false"
        );

        if (!response.ok) {
          throw new Error("Couldn't fetch coin data!");
        }

        const data = await response.json();
        console.log(data);
        return data;
      } catch (error) {
        console.log(error);
      }
    };
    coinGeckoRequest();
  }, []);
};

export default ApiRequest;