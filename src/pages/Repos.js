import React from 'react';
import ampersandMixin from 'ampersand-react-mixin';
import ProgressBar from '../components/ProgressBar';

export default React.createClass({
  mixins: [ampersandMixin],

  render() {
    const { repos } = this.props;
    if(this.props.repos.length <= 0) {
      return <ProgressBar />;
    }

    return (
      <div class="container">
        <h2 class="repo-title">Repos page</h2>
        <ul class="repo-list">
          {
            repos.map( (repo) => {
              return(
                <li key={repo.id} class="repo-list__item">
                  <span class="mega-octicon octicon-repo"></span>
                  <a
                    class="repo-list__link"
                    href={repo.appUrl}>{repo.full_name}
                  </a>
                </li>
              );
            })
          }
        </ul>

      </div>
    );
  }
});
