import { IconImgStyled, IconsDivStyled } from '../styles/IconsCountdownStyles';
import facebook from '../images/icon-facebook.svg';
import pinterest from '../images/icon-pinterest.svg';
import instagram from '../images/icon-instagram.svg';

export const Icons = () => {
  return (
    <IconsDivStyled>
      <IconImgStyled src={facebook} alt="facebook" />
      <IconImgStyled src={pinterest} alt="pinterest" />
      <IconImgStyled src={instagram} alt="instagram" />
    </IconsDivStyled>
  );
};