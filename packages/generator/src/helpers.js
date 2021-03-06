/* @flow */

import type { Config } from './types'

const REGEX_EOL = /\n|\r\n/

export function fillConfig(config: Object): Config {
  if (config.wrapper) {
    if (typeof config.wrapper !== 'string') {
      throw new Error('config.wrapper must be valid')
    }
  } else {
    config.wrapper = 'normal'
  }
  if (config.projectName) {
    if (typeof config.projectName !== 'string') {
      throw new Error('config.projectName must be valid')
    }
  } else {
    config.projectName = 'root'
  }
  config.sourceMap = Boolean(config.sourceMap)
  return config
}

export function getLinesCount(text: string): number {
  return text.split(REGEX_EOL).length
}
