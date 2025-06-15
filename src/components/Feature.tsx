<think>
Okay, I need to generate the Feature.tsx component for the Garena Free Fire TH website. The user wants it to be production-ready, using modern React with TypeScript, semantic HTML, and responsive CSS.

First, I'll set up the component structure. Since it's a functional component, I'll use arrow functions. I'll import React and useState for any state management, though in this case, it's not needed yet.

Next, I'll create an interface for the props to ensure type safety. The Feature component will accept a title, description, and an optional isReversed prop to handle layout reversal.

For styling, I'll use a styled-component approach. I'll define a FeatureContainer with flexbox to arrange the content and image columns. The container should have a gap for spacing and padding for overall layout. I'll add a background color and rounded corners for a clean look.

The feature content will be in a flex column that takes up half the space. The title will be bold and larger, with the description in a lighter color. The button should stand out with a primary color and have a hover effect for interactivity.

The image container will hold the feature image. I'll use an img tag with an placeholder source for now, but in production, it should be replaced with the actual image path. The image should be responsive, taking the full width of its container and scaling nicely.

I'll include a reversed prop to conditionally reverse the flex direction. This allows the layout to switch the content and image columns based on the prop passed.

For responsiveness, I'll use media queries. On smaller screens, the flex direction will switch to a column layout, and padding will adjust for better mobile viewing.

Accessibility is important, so I'll ensure that the button has proper hover states and that images have alt text. I'll also use semantic HTML elements where possible.

Finally, I'll export the Feature component so it can be imported and used elsewhere in the project. I'll make sure the code is clean, well-commented, and follows best practices for readability and maintainability.
</think>

```typescript
import React from 'react';
import styled from 'styled-components';

interface FeatureProps {
  title: string;
  description: string;
  isReversed?: boolean;
}

const Feature: React.FC<FeatureProps> = ({ title, description, isReversed = false }) => {
  return (
    <FeatureContainer className="feature">
      <div className={`feature-content ${isReversed ? 'reversed' : ''}`}>
        <div className="feature-text">
          <h2 className="feature-title">{title}</h2>
          <p className="feature-description">{description}</p>
          <button className="feature-button">Learn More</button>
        </div>
        <div className="feature-image">
          <img src="/assets/images/feature-image.png" alt="Feature" />
        </div>
      </div>
    </FeatureContainer>
  );
};

const FeatureContainer = styled.div`
  .feature-content {
    display: flex;
    gap: 2rem;
    padding: 2rem 0;
    align-items: center;
    justify-content: space-between;
    background-color: #f8f9fa;
    border-radius: 8px;

    @media (max-width: 768px) {
      flex-direction: column;
      padding: 1rem 0;
    }
  }

  &.reversed {
    flex-direction: row-reverse;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  .feature-text {
    flex: 1;
    max-width: 500px;
  }

  .feature-title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: #2c3e50;
  }

  .feature-description {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #7f8c8d;
    margin-bottom: 1.5rem;
  }

  .feature-button {
    display: inline-block;
    padding: 0.8rem 1.5rem;
    background-color: #e74c3c;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #c0392b;
    }
  }

  .feature-image {
    flex: 1;
    max-width: 500px;
  }

  .feature-image img {
    width: 100%;
    height: auto;
    border-radius: 4px;
  }
`;

export default Feature;
```