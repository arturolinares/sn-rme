const colors = {
  almostBlack: "#181A1B",
  lightBlack: "#2F3336",
  almostWhite: "#E6E6E6",
  white: "#FFF",
  white10: "rgba(255, 255, 255, 0.1)",
  black: "#000",
  black10: "rgba(0, 0, 0, 0.1)",
  primary: "#1AB6FF",
  greyLight: "#F4F7FA",
  grey: "#E8EBED",
  greyMid: "#C5CCD3",
  greyDark: "#DAE1E9",
};

export const base = {
  ...colors,
  fontFamily:
    "var(--sn-stylekit-sans-serif-font)",
  fontFamilyMono:
    "'SFMono-Regular',Consolas,'Liberation Mono', Menlo, Courier,monospace",
  fontWeight: 400,
  zIndex: 100,
  link: 'var(--sn-stylekit-info-color)',
  placeholder: 'var(--sn-stylekit-input-placeholder-color)',
  textSecondary: "#4E5C6E",
  textLight: colors.white,
  textHighlight: '#ff0',
  selected: colors.primary,
  codeComment: 'var(--sn-stylekit-secondary-foreground-color)',
  codePunctuation: 'var(--sn-stylekit-contrast-backround-color)',
  codeNumber: "#d73a49",
  codeProperty: "#c08b30",
  codeTag: "#3d8fd1",
  codeString: "var(--sn-stylekit-success-color)",
  codeSelector: "#6679cc",
  codeAttr: "#c76b29",
  codeEntity: "#22a2c9",
  codeKeyword: 'var(--sn-stylekit-info-color)',
  codeFunction: "#6f42c1",
  codeStatement: "#22a2c9",
  codePlaceholder: "#3d8fd1",
  codeInserted: "#202746",
  codeImportant: "#c94922",

  blockToolbarBackground: colors.white,
  blockToolbarTrigger: colors.greyMid,
  blockToolbarTriggerIcon: colors.white,
  blockToolbarItem: colors.almostBlack,
  blockToolbarText: colors.almostBlack,
  blockToolbarHoverBackground: colors.greyLight,
  blockToolbarDivider: colors.greyMid,

  noticeInfoBackground: "#F5BE31",
  noticeInfoText: colors.almostBlack,
  noticeTipBackground: "#9E5CF7",
  noticeTipText: colors.white,
  noticeWarningBackground: "#FF5C80",
  noticeWarningText: colors.white,
};

export const light = {
  ...base,
  background: 'transparent',
  text: 'var(--sn-stylekit-paragraph-text-color)',
  code: 'var(--sn-stylekit-secondary-foreground-color)',
  cursor: 'var(--sn-stylekit-contrast-foreground-color)',
  divider: colors.greyMid,

  toolbarBackground: colors.lightBlack,
  toolbarInput: colors.white10,
  toolbarItem: colors.white,

  tableDivider: 'var(--sn-stylekit-secondary-foreground-color)',
  tableSelected: 'var(--sn-stylekit-secondary-foreground-color)',
  tableSelectedBackground: 'var(--sn-stylekit-contrast-background-color)',

  quote: 'var(--sn-stylekit-secondary-foreground-color)',
  codeBackground: 'var(--sn-stylekit-secondary-background-color)',
  codeBorder: 'var(--sn-stylekit-secondary-foreground-color)',
  horizontalRule: 'var(--sn-stylekit-input-placeholder-color)',
  imageErrorBackground: colors.greyLight,
};

export default light;