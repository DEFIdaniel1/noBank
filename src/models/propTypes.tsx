export type IconProps = {
  name: string;
  className?: string;
  color?: string;
  width?: string;
  height?: string;
};

//for store reducer
// export type TokenState = {
//     tokenPrice: any,
//     tokenName: any
//  };

export type TokenState = {
  name?: string;
  price?: number;
};

export type TokenPayload = {
  name: string; price: number;
};
