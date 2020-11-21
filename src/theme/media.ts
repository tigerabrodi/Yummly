const customMediaQuery = (maxWidth: number): string =>
  `@media (min-width: ${maxWidth}px)`

export const media = {
  custom: customMediaQuery,
  desktop: customMediaQuery(1024),
  tablet: customMediaQuery(768),
  phone: customMediaQuery(425),
}
