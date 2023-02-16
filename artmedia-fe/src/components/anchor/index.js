import { useNavigate } from 'react-router-dom';

const Anchor = ({ to, target, rel,label }) => {
  const navigate = useNavigate();

  const navigateTo = (event) => {
    event.preventDefault();
    navigate(to);
  };

  return (
    <a target={target} rel={rel} onClick={navigateTo}>
      {label}
    </a>
  );
};

export default Anchor;