import fs from 'fs'

/**
 * This function return a new price, who is the price of the reduction
 * according to the percentageReduction
 */
export function reduction(price: number, percentageReduction: number): number {
  return price * (1 - percentageReduction / 100)
}

/**
 * This function return the value of the environment variable
 */
export function getEnvValue(envName: string): string | undefined {
  return process.env[envName]
}

/**
 * Remove occurrence of the remove argument in original argument
 */
export function removeOccurrence(original: string, remove: string): string {
  try {
    return original.replace(remove, '')
  } catch (err) {
    return original
  }
}

export function readFile(filePath: string): string {
  return fs.readFileSync(filePath, { encoding: 'utf-8' })
}

export function timeStampToDate(timeStamp: number): Date {
  return new Date(timeStamp * 1000)
}
