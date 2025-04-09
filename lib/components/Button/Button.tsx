import { ButtonProps } from "./Button.types.ts";
import { buttonBase, buttonDisabled, buttonSizes, buttonVariants } from "./Button.styles.ts";
import { border, focus, font } from "../../styles/tokens.ts";

const Button: React.FC<ButtonProps> = ({
                                         children,
                                         variant = 'primary',
                                         size = 'md',
                                         icon,
                                         iconPosition = 'left',
                                         disabled,
                                         className,
                                         ...rest
                                       }) => {
  return (
    <button
      type="button"
      disabled={disabled}
      className={`
        ${buttonBase}
        ${buttonVariants[variant]}
        ${buttonSizes[size]}
        ${border}
        ${focus}
        ${font}
        ${disabled && buttonDisabled}
        ${className || ''}
      `}
      {...rest}
    >
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default Button;