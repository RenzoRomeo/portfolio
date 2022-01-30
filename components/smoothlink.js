import { Link } from 'react-scroll';

const SmoothLink = ({ children, section, ...props }) => (
  <Link to={section} smooth={true} duration={700} offset={-55} {...props}>
    {children}
  </Link>
);

export default SmoothLink;
