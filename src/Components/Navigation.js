export const Navigation = ({ href, label }) => {
  return (
    <li className="nav-item">
      <a className="nav-link" aria-content="page" href={href}>
        {label}
      </a>
    </li>
  );
};
