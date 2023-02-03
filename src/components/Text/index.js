import React from "react";
const variantClasses = {
  h1: "font-bold sm:text-[36px] md:text-[38px] text-[40px]",
  h2: "font-normal text-[18px]",
  h3: "font-normal text-[12px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
