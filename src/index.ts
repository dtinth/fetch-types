export {}

// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/60924
declare global {
  var { fetch, FormData, Headers, Request, Response }: typeof import('undici')
}
