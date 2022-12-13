const ScreenSizes = {
  tablet: 600,
  desktop: 768,
  extraLarge: 1300,
};

const responsiveTemplate = {
  tablet: `@media (min-width: ${ScreenSizes.tablet}px) and (max-width: ${ScreenSizes.desktop - 1}px)`,
  desktop: `@media (min-width: ${ScreenSizes.desktop}px) and (max-width: ${ScreenSizes.extraLarge - 1}px)`,
  extraLarge: `@media (min-width: ${ScreenSizes.extraLarge}px)`,
};

export { responsiveTemplate };
