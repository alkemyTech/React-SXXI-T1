export function encodeQueryParams(paramsObj) {
  const queryParams = new URLSearchParams(paramsObj)
  return queryParams.toString()
}
