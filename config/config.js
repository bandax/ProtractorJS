exports.config = {
    framework: 'mocha',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        browserName: 'chrome',
        shardTestFiles: true,
        chromeOptions: {
            prefs: {
                'profile.managed_default_content_settings.notifications': 1
            }
        }
    },
  /*  multiCapabilities: [{
        browserName: 'firefox'
      }, {
        browserName: 'chrome'
      }],*/
    /*capabilities: {
        browserName: 'firefox'
    },*/
    specs: ['../test/specs/*spec.js'],
    mochaOpts: {
        reporter: 'spec',
        timeout: 30000
    }
  }