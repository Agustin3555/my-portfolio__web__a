import { css } from "@emotion/react";
import { COLOR, FONT, NOT_FONT_SIZE, FONT_SIZE } from "./palette";

export const VARS = {
  color: {
    bg: {
      a: {
        dark: "var(--var-color-bg-a-dark)",
        bright: "var(--var-color-bg-a-bright)",
      },
      b: {
        dark: "var(--var-color-bg-b-dark)",
        bright: "var(--var-color-bg-b-bright)",
      },
    },
    font: {
      a: {
        dark: "var(--var-color-font-a-dark)",
        bright: "var(--var-color-font-a-bright)",
      },
      b: {
        dark: "var(--var-color-font-b-dark)",
        bright: "var(--var-color-font-b-bright)",
      },
    },
  },
  size: {
    main: {
      gold: "var(--var-size-main-gold)",
      silver: "var(--var-size-main-silver)",
    },
    layout: {
      with: "var(--var-size-layout-with)",
    },
    component: {
      glassButton: "var(--var-size-component-glass-button)",
    },
    screen: {
      xs: "var(--var-size-screen-xs)",
      s: "var(--var-size-screen-s)",
      m: "var(--var-size-screen-m)",
    },
  },
};

export const BGC_DARK_A = COLOR.gs_16;
export const BGC_BRIGHT_A = COLOR.gs_1;

export const BGC_DARK_B = COLOR.gs_14;
export const BGC_BRIGHT_B = COLOR.gs_5;

export const COLOR_DARK_A = COLOR.gs_5;
export const COLOR_BRIGHT_A = COLOR.gs_12;

export const COLOR_DARK_B = COLOR.gs_2;
export const COLOR_BRIGHT_B = COLOR.gs_14;

export const MAIN_GAP = NOT_FONT_SIZE.s;
export const MAIN_GAP_M = `calc(${MAIN_GAP} * 2)`;
export const LAYOUT_WIDTH = `calc(${NOT_FONT_SIZE["3xl"]} * 4)`;
export const GLASS_BUTTON_SIZE = NOT_FONT_SIZE.m;

export enum MEDIA {
  "2xs" = "23.4375rem",
  xs = "26.5625rem",
  s = "56.25rem",
  m = `calc(47rem + (1.625rem * 4 + 2.625rem) * 2)`,
}

export const GLASS_SET = {
  this: css`
    backdrop-filter: blur(15px);
  `,
  refleccion: css`
    background: linear-gradient(
      -30deg,
      rgba(160, 160, 160, 0.0375) 25%,
      rgba(160, 160, 160, 0.075) 75%,
      rgba(160, 160, 160, 0.1875) 100%
    );
  `,
  content: css`
    border-width: ${NOT_FONT_SIZE["6xs"]};
    border-style: solid;
    border-color: rgba(176, 176, 176, 0.025);
    border-top-color: rgba(176, 176, 176, 0.1);
    border-left-color: rgba(176, 176, 176, 0.05);
  `,
};
