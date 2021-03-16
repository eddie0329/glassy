const path = require("path");
const rootPath = path.resolve(__dirname, "../src");
module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: (config) => {

    config.module.rules.push({
      test: /.*\.(?:le|c|sc)ss$/,
      loaders: [
        'vue-style-loader',
        'css-loader',
        'less-loader',
      ]
    });

    config.resolve.alias["@"] = rootPath;
    return config;
  },
};

// module.exports = {
//   webpackFinal: async (config, { configType }) => {
//     // config.resolve.modules = [
//     //   ...(config.resolve.modules || []),
//     //   path.join(__dirname, "../../../", "packages"),
//     // ];

//     const scssAdditionalFiles = [
//       "_variable.scss",
//       "_font.scss",
//       "shared-components.scss",
//       "common.scss",
//       "test.scss",
//     ];

//     const scssAdditionalData = scssAdditionalFiles
//       .map((filePath) => `@import "${filePath}";`)
//       .join("");

//     const sassLoader = {
//       loader: "sass-loader",
//       options: {
//         // sass-loader version >= 8
//         additionalData: scssAdditionalData,
//         sourceMap: true,
//         sassOptions: {
//           includePaths: [rootStylePath],
//         },
//       },
//     };

//     /**
//      * @description
//      * autprefixer기능을 사용하기 위해서 postcss-autoprefixer로 1차 처리한 뒤,
//      * 2차로 scss변환한다. 따라서 postcss기능을 삭제해서는 안된다.
//      */
//     const postCssLoader = {
//       loader: "postcss-loader",
//       options: {
//         sourceMap: true,
//         postcssOptions: {
//           path: "postcss.config.js",
//         },
//       },
//     };

//     config.module.rules.push({
//       test: /\.s[ac]ss$/,
//       use: ["vue-style-loader", "css-loader", postCssLoader, sassLoader],
//     });

//     config.resolve.symlinks = false;
//     config.resolve.alias["@/env"] = "./env";
//     config.resolve.alias["@"] = rootPath;
//     config.resolve.alias["@storybookDecorators"] = path.join(
//       rootPath,
//       "stories",
//       "decorators"
//     );
//     config.resolve.alias["@testComponents"] = path.join(
//       rootPath,
//       "stories",
//       "test-components"
//     );
//     config.resolve.alias["@coachPage"] = path.join(
//       rootPath,
//       "components",
//       "coach-page"
//     );
//     config.resolve.alias["@coachComponents"] = path.join(
//       rootPath,
//       "components",
//       "coach"
//     );
//     return config;
//   },
// };
