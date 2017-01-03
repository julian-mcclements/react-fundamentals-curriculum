var React = require('react');

function Main (props) {
  return (
    <div>
      <h2>Main</h2>
      { props.children }
    </div>
  );
}

module.exports = Main;