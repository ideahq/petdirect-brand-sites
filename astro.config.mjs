// @ts-check
import { defineConfig, envField } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    site: 'https://ideahq.github.io',
    base: '/petdirect-brand-sites',
    integrations: [react()],
    env: {
        schema: {
            THEME: envField.enum({
                context: "server",
                access: "secret",
                values: ["peggys-pantry", "wild-paw", "calibre"],
                default: "wild-paw"
            })
        }
    }
});
