import React from 'react';
import Spinner from '@atlaskit/spinner';
import './Spinner.css';

export default function SpinnerWrapper() {
  return (
    <div className="Spinner">
      <Spinner size="xlarge" />
    </div>
  );
}
