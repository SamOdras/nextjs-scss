import ModalWrapper from 'components/ModalWrapper';

import styled from 'styled-components';

const CardHorizontalImg = styled.div`
  grid-column: 1/2;
  width: 100%;
  height: 13.7rem;
  border-radius: 1rem;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center;
`

const ModalCheckout = (props) => {
  return (
    <ModalWrapper {...props}>
      <div className="description-wrapper-modal">
        <div className="description-wrapper-modal__header">
          <div className="content">
            <div className="title">Added to cart</div>
            <div className="quantity">1 Item</div>
          </div>
        </div>
        <div className="description-wrapper-modal__content">
          <div className="card-horizontal-2 card-floating description-inside-modal">
            <CardHorizontalImg src="/dummy-img-card.jpeg"/>
            <div className="details">
              <div className="title-2">Bedroom Organization</div>
              <div className="price">$ 200</div>
              <div className="title-3">Descriptions :</div>
              <div className="description">
                This course is designed to help participants appreciate the value of an organized bedroom through related concepts, 
                key theories,misconceptions and challenges, benefits, sound recommendations from research, and best practices. 
              </div>
            </div>
          </div>
        </div>
        <div className="description-wrapper-modal__footer">
          <button className="button button-outline">Go to courses</button>
          <button className="button button-contained">Checkout</button>
        </div>
      </div>
    </ModalWrapper>
  )
}

export default ModalCheckout;