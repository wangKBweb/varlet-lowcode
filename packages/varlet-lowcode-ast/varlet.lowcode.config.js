module.exports = {
  name: 'varlet-lowcode-ast',

  configureVite(command, config) {
    if (command === 'compile') {
      config.build.lib.formats = ['es']
    }
  },
}
