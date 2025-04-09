import { ButtonProps } from "./Button.types.ts";

const base = 'inline-flex items-center justify-center rounded font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2';
const variants = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-300',
  secondary: 'bg-gray-100 text-gray-800 border border-gray-300 hover:bg-gray-200 disabled:opacity-50',
};
const sizes = {
  sm: 'px-3 py-1 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-5 py-3 text-lg',
};

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
      className={`${base} ${variants[variant]} ${sizes[size]} ${disabled && 'opacity-50 cursor-not-allowed'} ${className || ''}`}
      {...rest}
    >
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default Button;