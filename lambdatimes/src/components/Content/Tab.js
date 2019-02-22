import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop,
      if they match, the className should be: 'tab active-tab',
      if it is not it should just be 'tab'*/
  const { tab, selectTabHandler, selectedTab } = props;
  return (
    <div
      className={selectedTab === tab && 'active-tab'}
      onClick={() => {
        /* Replace this dummy click handler function with your selectTabHandler function from props
         you'll need to pass the `tab` in as an argument to this handler. */

        selectTabHandler(tab);
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  tab: PropTypes.string.isRequired,
  selectTabHandler: PropTypes.func.isRequired,
  selectedTab: PropTypes.string.isRequired
};

export default Tab;
