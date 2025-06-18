import { THEME } from "astro:env/server";

export const themes: Record<string, { name: string }> = {
    'peggys-pantry': {
        name: "Peggy's Pantry" 
    },
    'wild-paw': {
        name: "Wild Paw"
    },
    'calibre': {
        name: "Calibre" 
    }
};

export const theme = {
    id: THEME,
    name: themes[THEME].name
};
