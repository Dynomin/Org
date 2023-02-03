import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder8: "rounded-radius8",
  RoundedBorder15: "rounded-radius15",
};
const variants = {
  FillIndigoA400: "bg-indigo_A400 text-white_A700",
  OutlineIndigoA400:
    "bg-indigo_A400 outline outline-[1px] outline-indigo_A400 text-white_A700",
  OutlineIndigoA400_1:
    "bg-indigo_A400 border border-indigo_A400 border-solid text-red_50",
};
const sizes = { sm: "p-[9px]", md: "p-[14px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["RoundedBorder8", "RoundedBorder15"]),
  variant: PropTypes.oneOf([
    "FillIndigoA400",
    "OutlineIndigoA400",
    "OutlineIndigoA400_1",
  ]),
  size: PropTypes.oneOf(["sm", "md"]),
};
Button.defaultProps = {
  className: "",
  shape: "RoundedBorder8",
  variant: "FillIndigoA400",
  size: "md",
};

export { Button };
