// metro.config.ts
import { getDefaultConfig } from 'metro-config';

export default {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    assetExts: ['svg', 'png', 'jpg', 'jpeg'],
  },
};
