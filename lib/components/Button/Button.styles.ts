const buttonBase = 'inline-flex mr-1 items-center justify-center font-medium transition';
const buttonSizes = {
  sm: 'px-3 py-1 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-5 py-3 text-lg',
};
const buttonVariants = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-300',
  secondary: 'bg-white text-gray-800 border border-gray-300 hover:bg-gray-100 disabled:opacity-50',
};
const buttonDisabled = 'opacity-50 cursor-not-allowed'

export { buttonBase, buttonSizes, buttonVariants, buttonDisabled }