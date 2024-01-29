import type { ForgeConfig } from '@electron-forge/shared-types';
import { MakerSquirrel } from '@electron-forge/maker-squirrel';
import { MakerZIP } from '@electron-forge/maker-zip';
import { MakerDeb } from '@electron-forge/maker-deb';
import { MakerRpm } from '@electron-forge/maker-rpm';
import { AutoUnpackNativesPlugin } from '@electron-forge/plugin-auto-unpack-natives';
import { WebpackPlugin } from '@electron-forge/plugin-webpack';

import { mainConfig } from './webpack.main.config';
import { rendererConfig } from './webpack.renderer.config';
import { spawn } from 'child_process';

const config: ForgeConfig = {
  packagerConfig: {
    asar: true,
    icon: 'src/assets/guapp_icon.ico',
  },
  rebuildConfig: {},
  makers: [new MakerSquirrel({
    iconUrl: 'https://raw.githubusercontent.com/Sylchi/guapp/main/src/assets/guapp_icon.ico'
  }), new MakerZIP({}, ['darwin']), new MakerRpm({}), new MakerDeb({})],
  plugins: [
    new AutoUnpackNativesPlugin({}),
    new WebpackPlugin({
      mainConfig,
      renderer: {
        config: rendererConfig,
        entryPoints: [
          {
            html: './src/index.html',
            js: './src/renderer.ts',
            name: 'main_window',
            preload: {
              js: './src/preload.ts',
            },
          },
        ],
      },
    }),
  ],
  publishers: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        repository: {
          owner: 'Sylchi',
          name: 'guapp'
        },
        force: true,
        prerelease: false
      }
    }
  ],
  hooks: {
    postMake: async (config, makes) => { 
      const ls = spawn('sign.bat');
      await new Promise((resolve) => {
        ls.stdout.on('data', function (data) {
          console.log(data);
        });
        ls.stderr.on('data', function (data) {
          console.log(data);
        });
        ls.on('close', function (code) {
          console.log(code)
          return resolve(true);
        });
      })
      return makes;
    }
  }
};

export default config;
