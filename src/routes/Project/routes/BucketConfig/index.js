import { paths } from 'constants'

export default store => ({
  path: paths.projectBucketConfig,
  /*  Async getComponent is only invoked when route matches   */
  getComponent(nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure(
      [],
      require => {
        const BucketConfig = require('./components/BucketConfigPage').default

        /*  Return getComponent   */
        cb(null, BucketConfig)

        /* Webpack named bundle   */
      },
      'BucketConfig'
    )
  }
})
