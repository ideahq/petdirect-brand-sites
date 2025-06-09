// @ts-check
import { defineConfig, envField } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    integrations: [react()],
    env: {
        schema: {
            THEME: envField.enum({
                context: "server",
                access: "secret",
                values: ["peggys-pantry", "wild-paw"],
                default: "peggys-pantry"
            })
        }
    }
});
