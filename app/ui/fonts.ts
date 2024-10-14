// Importamos la fuente del módulo de google
import { Inter } from 'next/font/google';
import { Lusitana } from 'next/font/google';

// Exportamos la fuente con su subconjunto
export const inter = Inter({subsets: ['latin']})
export const lusitana = Lusitana({subsets: ['latin'], weight: ["400", "700"]})