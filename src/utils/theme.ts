import { THEME } from "astro:env/server";

export const theme = {
    id: THEME,
    name: THEME === 'peggys-pantry' ? `Peggy's Pantry` : 'Wild Paw'
};
