const async_hooks = require('async_hooks');
const fs = require('fs');
const util = require('util');
// Return the ID of the current execution context.
const cid = async_hooks.currentId();

// Return the ID of the handle responsible for triggering the callback of the
// current execution scope to call.
const tid = async_hooks.triggerId();

// Create a new AsyncHook instance. All of these callbacks are optional.
const asyncHook = async_hooks.createHook({ init, before, after, destroy });

// Allow callbacks of this AsyncHook instance to call. This is not an implicit
// action after running the constructor, and must be explicitly run to begin
// executing callbacks.

// Disable listening for new asynchronous events.

//
// The following are the callbacks that can be passed to createHook().
//

function debug() {
  // use a function like this one when debugging inside an AsyncHooks callback
  fs.writeSync(1, util.format.apply(null, [...arguments, '\n']));
}

// init is called during object construction. The resource may not have
// completed construction when this callback runs, therefore all fields of the
// resource referenced by "asyncId" may not have been populated.
function init(asyncId, type, triggerId, resource) {
        debug('init async', triggerId, asyncId);
}

// before is called just before the resource's callback is called. It can be
// called 0-N times for handles (e.g. TCPWrap), and will be called exactly 1
// time for requests (e.g. FSReqWrap).
function before(asyncId) {
        debug('before async', asyncId);
}

// after is called just after the resource's callback has finished.
function after(asyncId) {
        debug('after async', asyncId);
 }

// destroy is called when an AsyncWrap instance is destroyed.
function destroy(asyncId) {
        debug('destroy async', asyncId);
}

asyncHook.enable();
setTimeout(x=>debug('Timeout'), 5000);
//asyncHook.disable();
