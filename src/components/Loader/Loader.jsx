import { FidgetSpinner } from 'react-loader-spinner';
import { BackdropStyled } from 'components/Modal/Modal.styled';

const Loader = () => {
  return (
    <BackdropStyled>
      <FidgetSpinner
        visible={true}
        height="400"
        width="400"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
        ballColors={['#ff0000', '#00ff00', '#0011ff']}
        backgroundColor="#0000ff"
      />
    </BackdropStyled>
  );
};
export default Loader;
