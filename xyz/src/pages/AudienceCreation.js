import React, { useState } from 'react';
import AudienceForm from '../components/AudienceForm';

const AudienceCreation = () => {
  const [audienceSize, setAudienceSize] = useState(0);

  return (
    <div>
      <h1>Audience Creation Page</h1>
      <AudienceForm setAudienceSize={setAudienceSize} />
      <h3>Calculated Audience Size: {audienceSize}</h3>
    </div>
  );
};

export default AudienceCreation;
