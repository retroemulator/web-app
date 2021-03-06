import React from 'react';
import Button from '@atlaskit/button';
import createCustomTheme from '../../utils/themes/createCustomTheme';
import './HomePageButton.css';

const buttonTheme = {
  primary: {
    height: 'auto',
    padding: '2rem',
    background: {
      default: '#3F51B5',
      hover: '#5C6BC0',
      active: '#5C6BC0',
    },
    boxShadow: {
      default: `0 8px 0 0 #303F9F`,
      hover: `0 8px 0 0 #303F9F`,
      active: '0 0 0 0',
    },
    transform: {
      default: 'initial',
      active: 'translateY(6px)',
    },
    transition: {
      default:
        'background 0.1s ease-out, box-shadow 0.1s cubic-bezier(0.47, 0.03, 0.49, 1.38) transform:0.1s',
      active:
        'background 0s ease-out, box-shadow 0s cubic-bezier(0.47, 0.03, 0.49, 1.38) transform:0s',
    },
  },
};

// TODO: rename this to be a generic large button
export default function HomePageButton(props) {
  const { icon, title, description } = props;
  return (
    <Button
      {...props}
      appearance="primary"
      iconBefore={icon}
      theme={createCustomTheme(buttonTheme)}>
      <div className="HomePageButton-text-group">
        {title && <div className="HomePageButton-title">{title}</div>}
        {description && <div className="HomePageButton-description">{description}</div>}
      </div>
    </Button>
  );
}
