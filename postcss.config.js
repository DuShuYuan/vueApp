/*
 * @Description: file content
 * @Author: DHL
 * @Date: 2020-03-21 17:15:27
 * @LastEditors: DHL
 * @LastEditTime: 2020-03-21 17:16:04
 */
module.exports = {
  plugins: {
    autoprefixer: {
      browsers: ["Android >= 4.0", "iOS >= 8"]
    },
    "postcss-pxtorem": {
      rootValue: 37.5,
      propList: ["*"]
    }
  }
};
