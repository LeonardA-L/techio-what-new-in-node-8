**Node 8.0.0** is here! Released on May 30th 2017, It enters Node's Long Term Support roadmap and it brings some new interesting features. The complete release note is available on [the official Node blog](https://nodejs.org/en/blog/release/v8.0.0/), but let's take a look at the some of the highlights :)

---------

# Promisify

Standard callback style APIs, such as `fs.readFile(path, callback)` or `request(path, callback)` can now be wrapped into promises with the help of `util.promisify()`. It creates a function that returns a promise.

@[Promisify]({"stubs": ["promisify.js", "file-to-read.txt"], "command": "bash -c 'chmod +x promisify-run.sh && ./promisify-run.sh'"})

---------

# Async Hooks

The `async_hooks` is an experimental module that helps you monitor async operations. You can define hooks for the various stages of an async request's lifecycle. The constructor `async_hooks.createHook` takes as parameter an object with different callbacks:

```javascript
// Create a new AsyncHook instance. All of these callbacks are optional.
const asyncHook = async_hooks.createHook({
  init: initCallback,
  before: beforeCallback,
  after: afterCallback,
  destroy: destroyCallback
});
```

@[Async Hooks]({"stubs": ["async-hooks.js"], "command": "bash -c 'chmod +x async-hooks-run.sh && ./async-hooks-run.sh'"})

Read the [official documentation for async_hooks](https://github.com/AndreasMadsen/node/blob/82149a8e0f0a13e5f34215e370b6750a300617e6/doc/api/async_hooks.md). Be aware that `async_hooks` is still incomplete and "_users should take great care when using the experimental new module_".

---------

# URL parser API

Node 8.0.0 now supports the _WHATWG URL_ standard. It helps you parse and handle URL objects easily. It has [official documentation for the WHATWG URL API](https://nodejs.org/api/url.html#url_the_whatwg_url_api) but here are some of them.

@[URL API]({"stubs": ["url.js"], "command": "bash -c 'chmod +x url-run.sh && ./url-run.sh'"})

Read the [official documentation for the WHATWG URL API](https://nodejs.org/api/url.html#url_the_whatwg_url_api).

---------

# --pending-deprecation

`--pending-deprecation` is a new flag that will warn you whenever your node program is using features that are pending deprecation. For instance, in Node 8.0.0, using the for constructor `Buffer(num)` for the Buffer API is getting deprecated. This constructor used to create 0-filled `Buffer` instances is pending deprecation and so if you use it and launch node with the `--pending-deprecation` flag, it will emit a `DeprecationWarning` warning.

The following snippets runs Node 8.0.0 with the `--pending-deprecation` flag. Try it out.

@[Deprecation Warnings]({"stubs": ["deprecation.js"], "command": "bash -c 'chmod +x deprecation-run.sh && ./deprecation-run.sh'"})

-----------

These are the features I felt you needed to know, but Node 8.0.0 comes with a lot of other new features, big and small, so have fun checking them out and do no hesitate to [read the official release note](https://nodejs.org/en/blog/release/v8.0.0/).
