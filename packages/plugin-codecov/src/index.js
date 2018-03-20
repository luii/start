// @flow
import type { StartPlugin } from '@start/task/src/'

const codecov: StartPlugin = ({ input, logMessage }) => {
  const codecovLite = require('codecov-lite')

  return Promise.all(
    input.map((file) => {
      return codecovLite(file.data).then((result) => {
        logMessage(result.reportURL)

        return file
      })
    })
  )
}

export default codecov