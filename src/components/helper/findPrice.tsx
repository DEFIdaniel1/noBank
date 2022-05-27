// import { useAppSelector } from "../../store/hooks";

const findPrice = (name: string) => {
  let fetchedTokenData: any = [
    {
      id: "solana",
      current_price: 25,
    },
    {
      id: "ethereum",
      current_price: 125,
    },
  ];
  // fetchedTokenData = useAppSelector((state) => state.fetchToken.tokenData);

  const data: any = fetchedTokenData;
  for (let i = 0; i < data.length; i++) {
    if (data[i].id === name) {
      const price = data[i]["current_price"];
      console.log(price);
      return price;
    }
  }
};
export default findPrice;
