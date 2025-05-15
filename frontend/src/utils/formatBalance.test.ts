import { describe, it, expect } from 'vitest'
import { formatBalance } from './formatBalance'

describe('formatBalance', () => {
  it('Formats a number with commas and decimals', () => {
    expect(formatBalance('123456.789876')).toBe('123,456.7898')
    expect(formatBalance('0.0123456')).toBe('0.01234')
    expect(formatBalance('0.0000123456')).toBe('0.00001234')
    expect(formatBalance('123456.001')).toBe('123,456.001')
    expect(formatBalance('123456.5556123')).toBe('123,456.5556')
    expect(formatBalance('9233.137569166953608016')).toBe('9,233.1375')
  })

  it('Removes the decimal point if there are no decimals', () => {
    expect(formatBalance('123456')).toBe('123,456')
    expect(formatBalance('123456.00')).toBe('123,456')
    expect(formatBalance('123456.0')).toBe('123,456')
  })

  it('Rounds to the specified number of non zero decimal places', () => {
    expect(formatBalance('123456.789876', 2)).toBe('123,456.78')
    expect(formatBalance('0.0123456', 3)).toBe('0.0123')
    expect(formatBalance('0.0000123456', 2)).toBe('0.000012')
    expect(formatBalance('0.42148214214', 5)).toBe('0.42148')
    expect(formatBalance('0.00000000000000123456', 5)).toBe(
      '0.0000000000000012345'
    )
  })

  it('Throws if parseFloat can not parse it as a number', () => {
    expect(() => formatBalance('abc')).toThrowError(/Invalid/)
  })
})
