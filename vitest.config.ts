import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@game/shared': path.resolve(__dirname, 'packages/shared/src'),
    },
  },
  test: {
    globals: true,
    environment: 'node',
    include: ['server/src/__tests__/**/*.test.ts'],
    coverage: {
      provider: 'v8',
    },
  },
});
