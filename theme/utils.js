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
}) {
    return {
        "--theme-back-ground": backGround,
        "--theme-actve-primary-button": primaryActveButton,
        "--theme-primary-button": primaryButton,
        "--theme-primary": primary,
        "--theme-secondary": secondary,
        "--theme-text-base": textBase,
    };
}