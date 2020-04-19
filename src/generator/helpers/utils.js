const _utils = {};

_utils.delayLog = (msg) => () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(msg), 1000);
  });

module.exports = _utils;
