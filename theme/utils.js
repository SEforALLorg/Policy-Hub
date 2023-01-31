export function applyTheme(theme) {
    const root = document.documentElement;
    Object.keys(theme).forEach((cssVar) => {
      root.style.setProperty(cssVar, theme[cssVar]);
    });
}
export function createTheme({
    backGround,
    primaryButton,
    primaryActveButton,
    primary,
    secondary,
    textBase,
    backGroundImage,
    buttonColor,
    buttonTextColor,
    TextColor,
    tooltipIconColor,
    yesButtonColor,
    lineColor,
    rightBoxBackgroundColor,
    starIconColor,
    radioColor,
    radioActiveColor,
    mediaIconColor,
}) {
    return {
        "--theme-back-ground-image": backGroundImage,
        "--theme-back-ground": backGround,
        "--theme-actve-primary-button": primaryActveButton,
        "--theme-primary-button": primaryButton,
        "--theme-primary": primary,
        "--theme-secondary": secondary,
        "--theme-text-base": textBase,
        "--theme-button-color": buttonColor,
        "--theme-button-text-color":buttonTextColor,
        "--theme-text-color":TextColor,
        "--theme-tooltip-icon-color":tooltipIconColor,
        "--theme-yes-button-color":yesButtonColor,
        "--theme-line-color":lineColor,
        "--theme-right-box-background-color":rightBoxBackgroundColor,
        "--theme-star-icon-color":starIconColor,
        "--theme-radio-color":radioColor,
        "--theme-radio-active-color":radioActiveColor,
        "--theme-media-icon-color":mediaIconColor,
    };
}