export const formatBalance = (
  numberString: string,
  nonZeroDecimalsCount = 4
): string => {
  const number = parseFloat(numberString)

  if (Number.isNaN(number)) {
    throw new Error('Invalid number')
  }

  const nf = new Intl.NumberFormat('en-US')
  const formattedIntegerPart = nf.format(Math.floor(number))

  // If number is integer, return just the formatted integer part
  if (number % 1 === 0) {
    return formattedIntegerPart
  }

  const decimalPart = numberString.split('.')[1]

  // Filter out zero digits from the decimal part
  const nonLeadingZeroDecimalPart = decimalPart.replace(/^0+/, '')

  // Cut the intended amount from the nonZeroDecimals
  const formattedNonZeroDecimal = nonLeadingZeroDecimalPart.slice(
    0,
    nonZeroDecimalsCount
  )

  // Replace the non zero decimals part with the formatted one
  const formattedDecimalPart = decimalPart.replace(
    nonLeadingZeroDecimalPart,
    formattedNonZeroDecimal
  )

  // Return the number with the modified decimal part
  return `${formattedIntegerPart}.${formattedDecimalPart}`
}
