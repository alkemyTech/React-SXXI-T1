export const AnchorTag = ({ anchorClass = "", href, text }) => {
  return (
    <a
      className={anchorClass}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {text}
    </a>
  );
};
