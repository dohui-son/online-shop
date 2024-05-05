import { ButtonHTMLAttributes, CSSProperties, PropsWithChildren } from "react";

type Size = "xl" | "lg" | "md" | "sm" | "xs" | "xxs";
type Variant = "filled" | "outlined" | "text";
type Radius = "m" | "s";

const COMMON_STYLE_BY_SIZE: Record<Size, (radius: string) => CSSProperties> = {
  xl: (radius) => ({
    borderRadius: radius === "m" ? "50px" : "4px",
    padding: "16px 35px",
    fontSize: "18px",
    fontWeight: 700,
  }),
  lg: (radius) => ({
    borderRadius: radius === "m" ? "40px" : "4px",
    padding: "14px 30px",
    fontSize: "16px",
    fontWeight: 700,
  }),

  md: (radius) => ({
    borderRadius: radius === "m" ? "30px" : "4px",
    padding: "12px 26px",
    fontSize: "14px",
    fontWeight: 600,
  }),
  sm: (radius) => ({
    borderRadius: radius === "m" ? "25px" : "4px",
    padding: "10px 20px",
    fontSize: "12px",
    fontWeight: 500,
  }),
  xs: (radius) => ({
    borderRadius: radius === "m" ? "10px" : "4px",
    padding: "8px 12px",
    fontSize: "10px",
    fontWeight: 400,
  }),
  xxs: (radius) => ({
    borderRadius: radius === "m" ? "8px" : "4px",
    padding: "6px 10px",
    fontSize: "8px",
    fontWeight: 400,
  }),
};

const STYLE_BY_VARIANT: Record<
  Variant,
  (
    disabled?: boolean,
    fontColor?: CSSProperties["color"],
    bgColor?: CSSProperties["color"]
  ) => CSSProperties
> = {
  filled: (disabled = false, fontColor, bgColor) => ({
    border: "none",
    color: disabled ? "#fff" : fontColor ?? "#fff",
    backgroundColor: disabled ? "#dee0e6" : bgColor ?? "#222",
  }),
  outlined: (disabled = false, fontColor, bgColor) => ({
    color: disabled ? "#fff" : fontColor ?? "#333",
    backgroundColor: disabled ? "#dee0e6" : bgColor ?? "#fff",
    border: "1px solid #dee0e6",
  }),
  text: (disabled = false, fontColor) => ({
    border: "none",
    backgroundColor: "transparent",
    color: disabled ? "grey" : fontColor ?? "#999",
  }),
};

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: Size;
  variant?: Variant;
  radius?: Radius;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  underlined?: boolean;
  fontColor?: CSSProperties["color"];
  bgColor?: CSSProperties["backgroundColor"];
}

export function Button({
  children,
  variant = "filled",
  disabled = false,
  size,
  radius = "m",
  leftIcon: LeftIcon = null,
  rightIcon: RightIcon = null,
  fullWidth = false,
  underlined = false,
  fontColor,
  bgColor,
  ...props
}: PropsWithChildren<Props>) {
  return (
    <button
      {...props}
      style={{
        ...COMMON_STYLE_BY_SIZE[size](radius),
        ...STYLE_BY_VARIANT[variant](disabled, fontColor, bgColor),
        width: fullWidth ? "100%" : "auto",
        cursor: disabled ? "not-allowed" : "pointer",
        textDecoration: underlined ? "underline" : "none",
      }}
    >
      {LeftIcon}
      {children}
      {RightIcon}
    </button>
  );
}
