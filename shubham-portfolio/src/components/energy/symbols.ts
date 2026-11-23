/* Line-art energy symbols (64×64, drawn for this site). */
import type { Localized } from "@/data/site";

export type SymbolKey = "solar" | "wind" | "transformer" | "tower" | "bolt" | "leaf" | "agri" | "battery" | "hydro" | "ev" | "twin" | "chip";

export type Tone = "green" | "blue" | "amber";

export const energySymbols: Record<SymbolKey, { label: Localized; tone: Tone; inner: string }> = {
  solar: { label: { en: "Solar power", ru: "Солнечная энергия" }, tone: "amber", inner: "<circle cx=\"49\" cy=\"13\" r=\"5\"/><path d=\"M49 3v2M49 21v2M39 13h2M57 13h2M42 6l1.4 1.4M54.6 18.6 56 20M42 20l1.4-1.4M54.6 7.4 56 6\"/> <path d=\"M10 30h34l8 18H18z\"/><path d=\"M21 30l3.5 18M32 30l7 18M14 39h36\"/><path d=\"M33 48v10M25 58h16\"/>" },
  wind: { label: { en: "Wind power", ru: "Ветровая энергия" }, tone: "green", inner: "<path d=\"M30 60l2-30 2 30z\" fill=\"currentColor\" stroke=\"none\"/><path d=\"M24 60h16\"/> <g class=\"rotor\"><circle cx=\"32\" cy=\"26\" r=\"2.6\"/><path d=\"M32 23.4C31 15 31.5 9 32 4c1.6 6 2 12 0 19.4z\"/><path d=\"M34.3 27.3c7.6 3.3 12.3 6.8 16.2 10.1-6.1-1.4-11.3-4.4-16.2-10.1z\"/><path d=\"M29.7 27.3c-6.7 4.9-12.2 7.2-17 8.9 4.4-4.4 9.7-7.4 17-8.9z\"/></g>" },
  transformer: { label: { en: "Power transformer", ru: "Силовой трансформатор" }, tone: "blue", inner: "<rect x=\"27\" y=\"8\" width=\"10\" height=\"48\" rx=\"1.5\"/> <path d=\"M27 14a6 4.5 0 0 0 0 9a6 4.5 0 0 0 0 9a6 4.5 0 0 0 0 9a6 4.5 0 0 0 0 9\"/><path d=\"M27 14H8M27 50H8\"/> <path d=\"M37 14a6 4.5 0 0 1 0 9a6 4.5 0 0 1 0 9a6 4.5 0 0 1 0 9a6 4.5 0 0 1 0 9\"/><path d=\"M37 14h19M37 50h19\"/>" },
  tower: { label: { en: "Transmission grid", ru: "Электрическая сеть" }, tone: "blue", inner: "<path d=\"M32 5 22 59M32 5l10 54\"/><path d=\"M12 18h40M17 30h30\"/><path d=\"M27.5 18l7.5 12M36.5 18 29 30M26 36l14 13M38 36 24 49\"/><path d=\"M12 18v5M52 18v5M17 30v5M47 30v5\"/><path d=\"M18 59h28\"/>" },
  bolt: { label: { en: "Electric power", ru: "Электроэнергия" }, tone: "amber", inner: "<path d=\"M36 4 14 36h16l-4 24 24-34H33z\"/>" },
  leaf: { label: { en: "Green energy", ru: "Зелёная энергетика" }, tone: "green", inner: "<path d=\"M12 52C10 26 28 10 54 10c0 28-16 44-42 42z\"/><path d=\"M12 52 40 24\"/><path d=\"M26 38h12M33 31v-9\"/>" },
  agri: { label: { en: "Agrivoltaics", ru: "Агровольтаика" }, tone: "green", inner: "<path d=\"M8 10h32l6 12H14z\"/><path d=\"M19 10l3 12M30 10l5 12M11 16h32\"/><path d=\"M27 22v8\"/> <path d=\"M32 58V40\"/><path d=\"M32 46c-9 0-13-6-13-12 8 0 13 5 13 12zM32 42c0-8 5-12 12-12 0 7-5 12-12 12z\"/><path d=\"M14 58h36\"/>" },
  battery: { label: { en: "Energy storage", ru: "Накопители энергии" }, tone: "blue", inner: "<rect x=\"8\" y=\"18\" width=\"42\" height=\"28\" rx=\"4\"/><path d=\"M50 26h5v12h-5\"/><path d=\"M31 23 22 33h8l-3 8 10-11h-8z\"/>" },
  hydro: { label: { en: "Hydropower", ru: "Гидроэнергетика" }, tone: "blue", inner: "<path d=\"M32 6C24 18 18 26 18 34a14 14 0 0 0 28 0c0-8-6-16-14-28z\"/><path d=\"M8 52c4 0 4 3 8 3s4-3 8-3 4 3 8 3 4-3 8-3 4 3 8 3 4-3 8-3\"/><path d=\"M25 35a7 7 0 0 0 7 7\"/>" },
  ev: { label: { en: "Electric mobility", ru: "Электромобильность" }, tone: "blue", inner: "<rect x=\"10\" y=\"10\" width=\"26\" height=\"46\" rx=\"3\"/><path d=\"M10 24h26\"/><path d=\"M25 30l-6 9h6l-2 7 7-10h-6z\"/><path d=\"M36 30h6a5 5 0 0 1 5 5v13a4 4 0 0 0 8 0V24l-5-6\"/><path d=\"M6 56h34\"/>" },
  twin: { label: { en: "Digital twin", ru: "Цифровой двойник" }, tone: "blue", inner: "<rect x=\"8\" y=\"12\" width=\"30\" height=\"22\" rx=\"3\"/><rect x=\"26\" y=\"30\" width=\"30\" height=\"22\" rx=\"3\" stroke-dasharray=\"4 3\"/><path d=\"M14 20h12M14 26h8\"/><path d=\"M38 23h6a4 4 0 0 1 4 4v3\"/>" },
  chip: { label: { en: "Intelligent control", ru: "Интеллектуальное управление" }, tone: "blue", inner: "<rect x=\"16\" y=\"16\" width=\"32\" height=\"32\" rx=\"4\"/><rect x=\"25\" y=\"25\" width=\"14\" height=\"14\" rx=\"2\"/><path d=\"M24 8v8M32 8v8M40 8v8M24 48v8M32 48v8M40 48v8M8 24h8M8 32h8M8 40h8M48 24h8M48 32h8M48 40h8\"/>" },
};

/** Symbols that take turns in the hero (random order, random timing). */
export const rotatingSymbols: SymbolKey[] = ["solar", "wind", "transformer", "tower", "bolt", "leaf", "agri", "battery", "hydro", "ev"];
