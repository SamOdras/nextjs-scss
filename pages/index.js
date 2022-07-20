import { useState } from 'react';
import styled from 'styled-components';

// Components
import Collapsible from 'components/CourseDescription/Collapsible';
import ModalCheckout from 'components/CourseDescription/ModalCheckout';

// Icons
import ICONS from 'utils/icons';


const DummyCollapseDesc = ` This course is ideal for anyone whose bedroom is currently in clutter. Particularly, this home organization course is for: 
<ul>
  <li>Busy executives</li>
  <li>Homeowners, house husbands, and housewives</li>
  <li>Students and flatmates</li>
  <li>Participants in need of an effective system for bedroom organization</li>
  <li>Anyone who is curious about bedroom organization</li>
  <li>Life explorers. Inquisitive minds who are searching for transformation</li>
</ul>
`
// Customer Testimonial
const CustomerTestimonial = styled.div`
  display: flex;
  gap: 2rem;
  position: relative;
  min-height: 23.2rem;
  width: 100%;

  margin-top: 3.2rem;
  margin-bottom: 3.6rem;

  box-shadow: 0px 3rem 4rem 0 rgba(173, 173, 173, 0.2);
  background-color: white;
  border-radius: 1rem;
  padding: 4.6rem 3.6rem 3.4rem 4.4rem;

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: ${({ active=0 }) => active ? active * 20 : 7}%;
    border-width: 1.5rem;
    border-style: solid;
    border-color: white transparent transparent transparent;
  }
`;
const TestimonialQuote = styled.div`
  font-weight: 800;
  font-size: 7.2rem;
  color: rgba(6, 107, 251, 1);
`;

const TestimonialText = styled.div `
  font-size: 1.8rem;
  font-weight: 400;
  color: var(--color-primary-blue-dark);
  padding-top: 2.4rem;
  line-height: 3.2rem;
`;

// Customer Avatar
const CustomerAvatar = styled.div`
  background-image: url(${({ src }) => src});
  background-position: center;
  background-size: cover;
  height: 5.6rem;
  width: 5.6rem;
  border-radius: 50%;
`
// Card Horizontal 
const CardHorizontalImg = styled.div`
  grid-column: 1/2;
  width: 100%;
  height: 24.6rem;
  border-radius: 1rem;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center;
`
const CardHorizontalAvatar = styled.div`
  background-image: url(${({ src }) => src});
  background-position: center;
  background-size: cover;
  height: 3.2rem;
  width: 3.2rem;
  border-radius: 50%;
`

const CardCheckoutImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 23.9rem;
  background-size: cover;
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 14.58%, rgba(56, 56, 56, 0.84) 100%), url(${({ src }) => src});
  border-radius: 1.2rem;

  cursor: pointer;
  margin-bottom: 1.6rem;
`

const CourseDescription = () => {
  const [customerActive, setCustomerActive] = useState(2);
  const [openModalCheckout, setOpenModalCheckout] = useState(false);

  return (
    <>
      <div className="course-description">
        <div className="course-description__overview">
          <div className="title-1">Bedroom Organization</div>
          <div className="title-2">Description</div>
          <div style={{marginBottom:'6rem'}}>
            This course is designed to help participants appreciate the value of an organized bedroom through related concepts, 
            key theories,misconceptions and challenges, benefits, sound recommendations from research, and best practices. 
            The material has been researched at The Institute for Life Management Science, within its Center for Home Organization Science. 
            The course consists of 14 sections with 105 content modules. 
            The 2-hour core content is accompanied by interesting and engaging activities during the pre-course and post-course learning to give learners an exceptional, 
            optimized learning experience.
          </div>
          <Collapsible title="Perequisite" description={DummyCollapseDesc}/>
          <Collapsible isOpen={true} title="Target Learners" description={DummyCollapseDesc}/>
          <Collapsible title="Expected Outcomes" description={DummyCollapseDesc}/>
          <Collapsible title="Course Outline" description={DummyCollapseDesc}/>
        </div>
      
        <div className="course-description__testimonial">
          <div className="title-2">Testimonials</div>
          <CustomerTestimonial active={customerActive}>
            <TestimonialQuote>“</TestimonialQuote>
            <TestimonialText>
              This course helped me reflect on how the chaos in my bedroom increased my level of stress. At the end of it, 
              I was able to put into practice the recommendations and feel the difference. Romina Costa
            </TestimonialText>
          </CustomerTestimonial>
          <div className="customer-wrapper">
            <div className="customer" onClick={() => setCustomerActive(0)}>
                <CustomerAvatar src="/dummy-avatar-img-1.png"/>
                {customerActive === 0 && (
                  <div className="details">
                    <div className="bold">Jane Cooper</div>
                    <div className="light">Udemy</div>
                  </div>
                )}
            </div>
            <div className="customer" onClick={() => setCustomerActive(1)}>
              <CustomerAvatar src="/dummy-avatar-img-2.png"/>
              {customerActive === 1 && (
                <div className="details">
                  <div className="bold">Jane Cooper</div>
                  <div className="light">Udemy</div>
                </div>
              )}
            </div>
            <div className="customer" onClick={() => setCustomerActive(2)}>
              <CustomerAvatar src="/dummy-avatar-img-3.png"/>
              {customerActive === 2 && (
                <div className="details">
                  <div className="bold">Jane Cooper</div>
                  <div className="light">Udemy</div>
                </div>
              )}
            </div>
            <div className="customer" onClick={() => setCustomerActive(3)}>
              <CustomerAvatar src="/dummy-avatar-img-4.png"/>
              {customerActive === 3 && (
                <div className="details">
                  <div className="bold">Jane Cooper</div>
                  <div className="light">Udemy</div>
                </div>
              )}
            </div>
            <div className="customer" onClick={() => setCustomerActive(4)}>
              <CustomerAvatar src="/dummy-avatar-img-5.png"/>
              {customerActive === 4 && (
                <div className="details">
                  <div className="bold">Jane Cooper</div>
                  <div className="light">Udemy</div>
                </div>
              )}
            </div>
          </div>
        </div>
      
        <div className="course-description__recomended">
          <div className="title-2">Recomended Courses</div>

          <div className="card-horizontal description-recomended">
            <CardHorizontalImg src="/dummy-img-card.jpeg"/>
            <div className="description-recomended__details">
              <div className="title-2">Declutering</div>
              <div className="description">
                Agile practice/ scrum methodology has been widely spoken as being one or the best form of approach to developing products  as against a waterfall approach.
              </div>
              <div className="informations">
                <div className="author">
                  <CardHorizontalAvatar src="/dummy-img-avatar.jpeg"/>
                  <span>Temioluwa Makinwa</span>
                </div>
                <div className="price">$200</div>
              </div>
              <button className="button button-outline">More Info</button>
            </div>
          </div>

          <div className="card-horizontal description-recomended">
              <CardHorizontalImg src="/dummy-img-card-2.jpeg"/>
              <div className="description-recomended__details">
                <div className="title-2">Procastination</div>
                <div className="description">
                  Agile practice/ scrum methodology has been widely spoken as being one or the best form of approach to developing products  as against a waterfall approach.
                </div>
                <div className="informations">
                  <div className="author">
                    <CardHorizontalAvatar src="/dummy-img-avatar.jpeg"/>
                    <span>Temioluwa Makinwa</span>
                  </div>
                  <div className="price">$200</div>
                </div>
                <button className="button button-outline">More Info</button>
            </div>
          </div>

          <div className="show-more">Show More</div>
        </div>

        <div className="course-description__checkout">
          {/* Modal */}
          {openModalCheckout && <ModalCheckout setOpen={setOpenModalCheckout} open={openModalCheckout}/>}
          
          {/* Card */}
          <div className="card-floating description-checkout">
            <CardCheckoutImage src="/dummy-img-video.png">
              <img src={ICONS.playButton} alt="icon-button"/>
            </CardCheckoutImage>
            <div className="price">$45</div>
            <div className="description-checkout__details">
              <div className="informations">
                <div className="light">Category:</div>
                <div className="bold">Home Organization Science Labs</div>
              </div>
              <div className="informations">
                <div className="light">Course Level:</div>
                <div className="bold">Introductory</div>
              </div>
              <div className="informations">
                <div className="light">Senior Researcher Name:</div>
                <div className="bold">Fanny Syawbriyanti</div>
              </div>
              <div className="informations">
                <div className="light">Duration / Length:</div>
                <div className="bold">8 hours, 51 minutes</div>
              </div>
              <div className="informations">
                <div className="light">Course Content:</div>
                <div className="bold">68 videos, 17 resources</div>
              </div>
              <div className="informations">
                <div className="light">Certificate Awarded:</div>
                <div className="bold">Badges</div>
              </div>
            </div>
            <button onClick={() => setOpenModalCheckout(true)} className="button button-contained">Add to cart</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CourseDescription;