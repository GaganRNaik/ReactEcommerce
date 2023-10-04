import React from 'react'
import styled from 'styled-components';
const Trusted = () => {
  return (
    <Wrapper className="brand-section">
      <div className="container">
        <h3>Trusted By 1000+ Companies</h3>
        <div className="brand-section-slider">
          {/* my 1st img  */}
          <div className="slide">
            <img
              src="https://pbs.twimg.com/profile_images/1605297940242669568/q8-vPggS_400x400.jpg"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://img.freepik.com/premium-vector/blue-social-media-logo_197792-1759.jpg?w=360"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://media.licdn.com/dms/image/C4E0BAQGLoblYmJKpVA/company-logo_200_200/0/1616504874333?e=2147483647&v=beta&t=ZCnqqHPlqWTqDfVa_rAtL1iBjOwIID_cXXnLGoSy_Xc"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://yt3.googleusercontent.com/ytc/APkrFKZx6YRGkhtA_xM51CD_mYrqQiIgUec91isvdcrs-w=s900-c-k-c0x00ffffff-no-rj"
              alt="trusted-brands"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .brand-section {
    padding: 12rem 0 0 0;
  }
  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
  }

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .brand-section-slider {
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      margin-top: 3.2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      /* background-color: red; */
      text-align: center;
    }
  }
`;

export default Trusted