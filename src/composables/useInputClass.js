export function useInputClass() {
  const inputClass = (hasError) => [
    'w-full p-3 rounded-lg bg-white text-gray-900 placeholder-gray-400 border',
    'focus:outline-none focus:ring-2 transition',
    hasError ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500',
  ]

  return { inputClass }
}
