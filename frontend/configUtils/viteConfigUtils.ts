import * as path from 'path'
import react from '@vitejs/plugin-react'
import eslintPlugin from '@nabla/vite-plugin-eslint'
import checker from 'vite-plugin-checker'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import mkcert from 'vite-plugin-mkcert'
import { ViteEjsPlugin } from 'vite-plugin-ejs'
import { ConfigEnv, UserConfig, UserConfigExport } from 'vite'
import { chunkSplitPlugin } from 'vite-plugin-chunk-split'
import { VitePWA } from 'vite-plugin-pwa'
import svgr from 'vite-plugin-svgr'
import svgoPlugin from '@svgr/plugin-svgo'
import jsxPlugin from '@svgr/plugin-jsx'
import tailwindcss from '@tailwindcss/vite'

export const getPlugins = (env: Record<string, string>) => [
  react(),
  tailwindcss(),
  VitePWA({
    registerType: 'autoUpdate',
    devOptions: {
      enabled: false,
      type: 'module',
    },
    includeAssets: ['public/*.png', 'public/*.jpg'],
    workbox: {
      maximumFileSizeToCacheInBytes: 2000000,
    },
    manifest: {
      id: env.VITE_APP_NAME,
      name: env.VITE_APP_NAME,
      short_name: env.VITE_APP_NAME,
      theme_color: env.VITE_APP_THEME_COLOR,
      background_color: env.VITE_APP_THEME_COLOR,
      description: env.VITE_APP_NAME,
      lang: 'en',
      screenshots: [],
      icons: [
        {
          src: '/favicon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'any',
        },
        {
          src: '/favicon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any',
        },
        {
          src: '/favicon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'maskable',
        },
        {
          src: '/favicon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable',
        },
      ],
    },
  }),
  chunkSplitPlugin({
    strategy: 'default',
  }),
  eslintPlugin({
    eslintOptions: {
      ignorePatterns: [
        '/virtual:/**',
        'node_modules/**',
        '/node_modules/',
        '/virtual:/',
        '/dev-sw.js',
        '/workbox-**',
        '/sb-preview/',
      ],
    },
  }),
  checker({ typescript: true }),
  nodePolyfills({
    protocolImports: true, // Whether to polyfill `node:` protocol imports.
  }),
  mkcert(),
  ViteEjsPlugin((viteConfig) => ({
    env: viteConfig.env, // viteConfig is the current Vite resolved config
  })),
  svgr({
    svgrOptions: {
      plugins: [svgoPlugin, jsxPlugin],
      svgoConfig: {
        floatPrecision: 2,
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                removeViewBox: false,
              },
            },
          },
          'convertStyleToAttrs',
          'prefixIds',
        ],
      },
    },
    include: '**/*.svg?react',
  }),
]

export const getAliases = () => [
  {
    find: '@',
    replacement: path.resolve(__dirname, '../src'),
  },
]

export const getCssObscureWithConfig = async (
  config: UserConfigExport,
  configEnv: ConfigEnv
) => {
  const configResolved =
    typeof config === 'function' ? await config(configEnv) : await config

  return {
    ...configResolved,
    css: {
      modules: {
        generateScopedName: '[hash:base64:5]',
      },
    },
  }
}

export const getProductionConfiguredConfig = async (
  config: UserConfig,
  configEnv: ConfigEnv
) => getCssObscureWithConfig(config, configEnv)
