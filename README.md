# Heroku Buildpack for Structured Cloudevents in Node Functions

This buildpack provides a node function middleware that extracts structured
cloudevents `data` from the structured wrapper.

This is useful if you are using node-function-buildpack in a situation where
the function may recieve both structured and binary cloudevents, but you'd like to
use the same function signature.
