import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Recommended</h1>
      <p>Total digestible nutrients (T.D.N) is more than 70%,Added with "Yeast Culture" to stabilize the rumen ecosystem,Cattle feed with 20% protein (11-12% By Pass Protein) and 3.5% fat.</p>
      <FeatureButton>Order Now</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;