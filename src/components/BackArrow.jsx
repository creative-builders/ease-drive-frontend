import arrow from '/src/assets/images/arrow-left.png';
import { useNavigate } from 'react-router-dom';

const BackArrow = ({ extendedStyles = "", onClick }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      handleGoBack();
    }
  };

  return (
    <div
      className={`inline-flex items-center gap-2 z-0 md:z-10 absolute left-6 cursor-pointer ${extendedStyles}`}
      onClick={handleClick}
    >
      <img className="h-6 w-6" src={arrow} alt="Back Arrow" />
      <span className="text-[12px] not-italic font-normal leading-normal">back</span>
    </div>
  );
};

export default BackArrow;
