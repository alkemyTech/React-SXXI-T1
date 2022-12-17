export const OverlayToolTips = ({ children, initialTextToolTIp = "Ir a ", strongTextToolTip = "" }) => {
  return (
    <div title={`${initialTextToolTIp} ${strongTextToolTip}`} className="m-0 p-0">
      {children}
    </div>
  );
};
