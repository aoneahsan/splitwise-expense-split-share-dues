import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.zaions.splitwise',
  appName: 'splitWise',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
