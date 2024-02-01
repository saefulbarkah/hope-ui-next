const solidColor = {
  primary: "bg-primary text-white",
  danger: "bg-danger text-white",
  warning: "bg-warning text-white",
  info: "bg-info text-white",
  success: "bg-success text-white",
};
const outlineColor = {
  "outline-primary": "outline outline-[1px] outline-primary text-primary",
  "outline-danger": "outline outline-[1px] outline-danger text-danger",
  "outline-warning": "outline outline-[1px] outline-warning text-warning",
  "outline-info": "outline outline-[1px] outline-info text-info",
  "outline-success": "outline outline-[1px] outline-success text-success",
};
const semiColor = {
  "semi-primary": "bg-primary/20 text-primary",
  "semi-danger": "bg-danger/20 text-danger",
  "semi-warning": "bg-warning/20 text-warning",
  "semi-info": "bg-info/20 text-info",
  "semi-success": "bg-success/20 text-success",
};

export const colors = {
  ...semiColor,
  ...solidColor,
  ...outlineColor,
};
