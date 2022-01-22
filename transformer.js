const obfuscatingTransformer = require('react-native-obfuscating-transformer');
module.exports = obfuscatingTransformer({
  compact: false,
  controlFlowFlatteningThreshold: 0.75,
});
