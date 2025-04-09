const inputBase = 'block w-full font-medium transition rounded-none p-2';

const inputValidationStates = {
  valid: 'border-green-500 focus:ring-green-400',
  invalid: 'border-red-500 focus:ring-red-400',
  neutral: 'border-gray-300 focus:ring-blue-500',
};

const neutralHint = 'text-sm text-gray-500';
const errorHint = 'text-sm text-red-600';

export { inputBase, inputValidationStates, neutralHint, errorHint }