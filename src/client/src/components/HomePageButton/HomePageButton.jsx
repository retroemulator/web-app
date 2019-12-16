import React from 'react';
import Button from '@atlaskit/button';
import './HomePageButton.css';

function HomePageButton(props) {
  const { icon, title, description } = props;
  return (
    <Button
      {...props}
      appearance="primary"
      iconBefore={icon}
      theme={(currentTheme, themeProps) => {
        const styles = currentTheme(themeProps);
        return {
          buttonStyles: {
            ...styles.buttonStyles,
            height: 'auto',
            padding: '2rem',
          },
          ...styles.spinnerStyles
        };
      }}>
      <div className="HomePageButton-text-group">
        {title && <div className="HomePageButton-title">{title}</div>}
        {description && <div className="HomePageButton-description">{description}</div>}
      </div>
    </Button>
  );
}

export default HomePageButton;
