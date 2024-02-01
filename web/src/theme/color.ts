const solidColor = {
  primary: "bg-primary",
  danger: "bg-danger",
  warning: "bg-warning",
  info: "bg-info",
  success: "bg-success",
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
};
