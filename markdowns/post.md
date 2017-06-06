Node 8.0.0 is here! It enters Node's Long Term Support roadmap and it brings some new interesting features. The complete release note is available on [the official node blog](https://nodejs.org/en/blog/release/v8.0.0/) but let's take a look at the some of the highlights:

# promisify

@[Promisify]({"stubs": ["promisify.js"], "command": "bash -c 'chmod +x promisify-run.sh && ./promisify-run.sh'"})

# Async Hooks

# URL API

# --pending-deprecation

`--pending-deprecation` is a new flag that will warn you whenever your node program is using features that are pending deprecation. For instance, in Node 8.0.0, using the for constructor `Buffer(num)` for the Buffer API is getting deprecated. This constructor used to create 0-filled `Buffer` instances is pending deprecation and so if you use it and launch node with the `--pending-deprecation` flag, it will emit a `DeprecationWarning` warning.

The following snippets runs Node 8.0.0 with the `--pending-deprecation` flag. Try it out.

@[Deprecation Warnings]({"stubs": ["deprecation.js"], "command": "bash -c 'chmod +x deprecation-run.sh && ./deprecation-run.sh'"})

-----------
