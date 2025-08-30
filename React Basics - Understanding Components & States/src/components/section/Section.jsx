export function Section({
  children,
  WrapperName = "div",
  title = "Section",
  ...props
}) {
  //   const WrapperName = wrapperName;
console.log('SECTION RENDERED')
  return (
    <WrapperName {...props}>
      <h1 class="display-4 fw-bold text-body-emphasis">{title}</h1>
      {children}
    </WrapperName>
  );
}
