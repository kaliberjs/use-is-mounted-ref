/** @import { Request } from 'express' */

module.exports = {
  kaliber: {
    includeInServerCompilation: [
      /^@kaliber\/use-is-mounted-ref/
    ],
    /** @arg {Error} e @arg {Request} req */
    reportError(e, req) {
      console.error(e, req)
    }
  }
}
