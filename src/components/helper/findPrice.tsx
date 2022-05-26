const findPrice = (data: any, name: string) => {
  for (let i = 0; i < data.length; i++) {
    if (data[i].id === name) {
      const price = data[i]["current_price"];
      return price;
    }
  }
};

export default findPrice;
