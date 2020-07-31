module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ["module-resolver", {
      "root": ["./"],
      "alias": {
        "@ui": "./ui",
        "@theme": "./ui/theme",
        "@store": "./store",
        "@assets": "./assets"
      }
    }],
    [
      "babel-plugin-inline-import",
      {
        "extensions": [".svg"]
      }
    ]
  ]
};
