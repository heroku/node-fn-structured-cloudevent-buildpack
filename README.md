# Node Function Structured Cloudevent Middleware

This buildpack provides a node function middleware that extracts structured
cloudevents `data` from the structured wrapper.

This is useful if you are using node-function-buildpack in a situation where
the function may recieve both structured and binary cloudevents, but you don't
want to handle two different payload structures.

### Usage

*With `pack`:*

`pack build --builder heroku/buildpacks:18 --buildpack heroku/nodejs --buildpack heroku/node-function-buildpack --buildpack https://github.com/heroku/node-fn-structured-cloudevent-buildpack`
