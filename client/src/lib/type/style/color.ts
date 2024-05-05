enum CommonColor {
  BLACK = "black",
}

export type Color = Record<
  CommonColor,
  {
    main: string;
  }
>;
