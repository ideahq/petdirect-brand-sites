// @ts-check
import { defineConfig, envField } from 'astro/config';

import react from '@astrojs/react';

const THEME = process.env.THEME || 'wild-paw';

// https://astro.build/config
export default defineConfig({
    site: 'https://wildpaw.co.nz',
    integrations: [react()],
    vite: {
        define: {
            '__THEME__': JSON.stringify(THEME)
        }
    },
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
