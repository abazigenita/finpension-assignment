import { ButtonProps } from "./Button.types.ts";
import { buttonBase, buttonSizes, buttonVariants } from "./Button.styles.ts";

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
      className={`${buttonBase} ${buttonVariants[variant]} ${buttonSizes[size]} ${disabled && 'opacity-50 cursor-not-allowed'} ${className || ''}`}
      {...rest}
    >
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default Button;