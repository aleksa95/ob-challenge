import { defineConfig, loadEnv, UserConfig } from 'vite'
import {
  getAliases,
  getPlugins,
  getProductionConfiguredConfig,
} from './configUtils/viteConfigUtils'

export default defineConfig(async (configEnv): Promise<UserConfig> => {
  const env = loadEnv(configEnv.mode, process.cwd(), '')

  let config = defineConfig({
    build: {
      chunkSizeWarningLimit: 2500,
      sourcemap: false,
      minify: 'terser',
      target: 'esnext',
      terserOptions: {
        output: {
          comments: false,
        },
      },
    },

    plugins: getPlugins(env),

    resolve: {
      alias: getAliases(),
    },
  })

  if (env.NODE_ENV === 'production') {
    config = await getProductionConfiguredConfig(config, configEnv)
  }

  return config
})
