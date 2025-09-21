export const Fonts = {
    iBMBold: "IBMPlexSerif-Bold",
    iBMPBoldItalic: "IBMPlexSerif-Bold",
    iBMPExtraLight: "IBMPlexSerif-BoldItalic",
    iBMPExtraLightItalic: "IBMPlexSerif-ExtraLight",
    iBMPItalic: "IBMPlexSerif-ExtraLightItalic",
    iBMPLight: "IBMPlexSerif-Italic",
    lobster: "Lobster",

} as const;

export type FontName = keyof typeof Fonts
