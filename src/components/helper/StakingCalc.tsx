import ApiRequest from "../API/ApiRequest";

const findPrice = (data: any, name: string) => {
  for (let i = 0; i < data.length; i++) {
    if (data[i].id === name) {
      const price = data[i]["current_price"];
      console.log(price);
      return price;
    }
  }
};

let token = "bitcoin";

const apiData = async () => {
  const data = await ApiRequest();
  console.log(data);
  return data;
};

const StakingCalc = async () => {
  const calcData = findPrice(apiData(), token);
  console.log(calcData);
  return calcData;
};

export default StakingCalc;
