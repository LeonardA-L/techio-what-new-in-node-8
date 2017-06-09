// Adapted from the official documentation at https://github.com/AndreasMadsen/node/blob/82149a8e0f0a13e5f34215e370b6750a300617e6/doc/api/async_hooks.md
const async_hooks = require('async_hooks');
const fs = require('fs');
const util = require('util');
// Some other useful APIs
// Return the ID of the current execution context.
const cid = async_hooks.currentId();

// Return the ID of the handle responsible for triggering the callback of the
// current execution scope to call.
const tid = async_hooks.triggerId();

// Create a new AsyncHook instance. All of these callbacks are optional.
const asyncHook = async_hooks.createHook({ init, before, after, destroy });

// init is called during object construction. The resource may not have
// completed construction when this callback runs, therefore all fields of the
// resource referenced by "asyncId" may not have been populated.
function init(asyncId, type, triggerId, resource) {
  debug('Init async hook', asyncId);
}

// before is called just before the resource's callback is called. It can be
// called 0-N times for handles (e.g. TCPWrap), and will be called exactly 1
// time for requests (e.g. FSReqWrap).
function before(asyncId) {
  debug('Before async hook', asyncId);
}

// after is called just after the resource's callback has finished.
function after(asyncId) {
  debug('After async hook', asyncId);
 }

// destroy is called when an AsyncWrap instance is destroyed.
function destroy(asyncId) {
  debug('Destroy async hook', asyncId);
}

// Allow callbacks of this AsyncHook instance to call. This is not an implicit
// action after running the constructor, and must be explicitly run to begin
// executing callbacks.
asyncHook.enable();

// Register an asynchronous task
setTimeout((x)=>{
  debug('Timeout!');
}, 5000);

// Disable listening for new asynchronous events.
//asyncHook.disable();

function debug() {
  // Because console.log is asynchronous and would recursively trigger hooks,
  // use a function like this one when debugging inside an AsyncHooks callback
  fs.writeSync(1, util.format.apply(null, [...arguments, '\n']));
}
