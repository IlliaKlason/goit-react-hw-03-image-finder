import { Box } from 'components/Box';
import PropTypes from 'prop-types';

import SendIcon from '@mui/icons-material/Send';

import { ButtonStyled } from './ButtonLM.styled';

const ButtonLM = ({ title, onClick }) => {
  return (
    <Box display="flex" justifyContent="center">
      <ButtonStyled
        type="button"
        onClick={onClick}
        variant="contained"
        endIcon={<SendIcon />}
      >
        {title}
      </ButtonStyled>
    </Box>
  );
};

ButtonLM.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};
export default ButtonLM;
