const { flatRoutes } = require('remix-flat-routes');
/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/*"],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "build/index.js",
  // publicPath: "/build/",
  routes: async defineRoutes => flatRoutes('routes', defineRoutes),
}
