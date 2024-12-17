import React from 'react';
import PropTypes from 'prop-types';

const StyleButton = ({ title, className = '', href, target = '_self', ...props }) => {
  const commonClasses = `cursor-pointer w-full max-w-[184px] sm:w-[150px] h-[48px] flex items-center justify-center gap-4 text-[1.125em] font-extrabold tracking-widest text-black bg-white border-2 border-black rounded-[0.75rem] shadow-[0_8px_0_#000] transform skew-x-[-10deg] transition-all ease-in-out duration-100 filter drop-shadow-[0_15px_20px_#654dff63] active:tracking-normal active:translate-y-2 active:shadow-none ${className}`;

  return (
    <div className="">
      {href ? (
        <a
          href={href}
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
          className={commonClasses}
          {...props}
        >
          {title}
        </a>
      ) : (
        <button className={commonClasses} {...props}>
          {title}
        </button>
      )}
    </div>
  );
};

StyleButton.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.string,
};

export default StyleButton;
