/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from 'react-native';

//const tintColorLight = '#0a7ea4';
//const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#1A1A1A',          // Texto principal em tom escuro
    background: '#FFFFFF',    // Fundo branco
    tint: '#1380ed',          // Azul principal (ações/destaques)
    icon: '#4F4F4F',          // Ícones em cinza médio
    tabIconDefault: '#828282',// Ícones padrão em cinza
    tabIconSelected: '#27AE60',// Verde para ícone selecionado (tarefas concluídas)
    border: '#CCCCCC', // Cor padrão das bordas no modo claro
  },
  dark: {
    text: '#F2F2F2',          // Texto claro
    background: '#121212',    // Fundo escuro
    tint: '#1380ed',          // Azul principal adaptado
    icon: '#BDBDBD',          // Ícones em cinza claro
    tabIconDefault: '#9E9E9E',// Ícones padrão em cinza
    tabIconSelected: '#27AE60',// Verde para ícone selecionado (tarefas concluídas)
    border: '#333333', // Cor padrão das bordas no modo escuro
  },
};


export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
