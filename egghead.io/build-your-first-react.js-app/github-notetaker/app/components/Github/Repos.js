var React = require('react');

var Repos = React.createClass({
  render: function(){
    return(
      <div>
        <p> REPOS </p>
        Repos: {this.props.repos}
      </div>
    )
  }
})

module.exports = Repos;
