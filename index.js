module.exports = async ({headers}, _state, args) => {
  const payload = args[0];
  const structured = headers.hasOwnProperty('content-type') &&
    headers['content-type'].indexOf('application/cloudevents+json') > -1 &&
    typeof payload == "object" && payload.hasOwnProperty('data')
  if (structured) {
    return [payload.data];
  } else {
    return args;
  }
}
