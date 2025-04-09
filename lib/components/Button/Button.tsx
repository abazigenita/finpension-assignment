import { ButtonProps } from "./Button.types.ts";

const Button: React.FC<ButtonProps> = ({children, ...props}) => {
  return (
    <button {...props}>{children}</button>
  );
};

export default Button;