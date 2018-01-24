AFRAME.registerSystem('system-base', {
  schema: {
    appPrefix: {default: 'VRGAL'},
  },
  init: function () {
    console.log(`system-base.init: entered`);
  }
});
