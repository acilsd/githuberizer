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

  render() {
    const { repo, labels } = this.props;
    if(this.props.repo.length <= 0 ) {
      return <ProgressBar />;
    }

    return (
      <div class="container">
        <div class="repo-header">
          <h1 class="repo-title--detail">{repo.full_name}</h1>
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
