import React from 'react';
import ampersandMixin from 'ampersand-react-mixin';
import LabelItem from '../components/LabelItem';
import ProgressBar from '../components/ProgressBar';

export default React.createClass({
  mixins: [ampersandMixin],

  handleNew() {
    this.props.labels.add({
      name: '',
      color: '',
      editing: true,
      saved: false
    }, {at: 0});
  },

  componentWillUnmount() {
    this.setState({ labels: this.props.labels });
  },

  render() {
    const { repo, labels } = this.props;
    const link = `https://github.com/${repo.full_name}`;
    if(this.props.repo.length <= 0 ) {
      return <ProgressBar />;
    }

    return (
      <div class="container">
        <div class="repo-header">
          <h1 class="repo-title--detail">
            <a href={link} target="_blank">{repo.full_name}</a>
          </h1>
          <a class="button button--back" href="/repos">Back</a>
        </div>
        <p>
          <button
            onClick={this.handleNew}
            class="button button--new">
            New label
          </button>
        </p>
        <ul>
          {
            labels.map( (label) => {
              return (
                <LabelItem label={label} key={label.name}/>
              );
            })
          }
        </ul>
      </div>
    );
  }
});
