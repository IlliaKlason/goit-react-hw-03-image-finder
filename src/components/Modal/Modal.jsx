import { BackdropStyled, ModalStyled } from './Modal.styled';
import { createPortal } from 'react-dom';
import { Component } from 'react';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  render() {
    const { src, alt } = this.props;
    return createPortal(
      <BackdropStyled onClick={e => this.closeModal(e)}>
        <ModalStyled>
          <img src={src} alt={alt} loading="lazy" />
        </ModalStyled>
      </BackdropStyled>,
      modalRoot
    );
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') return this.props.modalToggle();
  };

  closeModal = e => {
    if (e.target === e.currentTarget) this.props.modalToggle();
  };
}

Modal.propTypes = {
  modalToggle: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Modal;
