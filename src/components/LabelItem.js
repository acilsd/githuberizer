import React from 'react';
import ampersandMixin from 'ampersand-react-mixin';

export default React.createClass({
  mixins: [ampersandMixin],
  getInitialState() {
    const { name, color } = this.props.label;
    return { name, color };
  },

  handleDelete(e) {
    e.preventDefault();
    this.props.label.destroy();
  },

  handleEdit(e) {
    e.preventDefault();
    this.props.label.editing = true;
  },

  handleCancel(e) {
    e.preventDefault();
    const { label } = this.props;
    if(label.saved) {
      label.editing = false;
      this.setState(this.getInitialState());
    } else {
      label.destroy();
    }
  },

  handleChange(e) {
    this.setState({
      name: e.target.value
    });
  },

  handleColorChange(e) {
    this.setState({
      color: e.target.value.slice(1)
    });
  },

  handleSubmit(e) {
    e.preventDefault();
    const { label } = this.props;
    if(label.saved) {
      label.update(this.state);
    } else {
      label.save(this.state, {
        success: () => {
          label.saved = true;
        }
      });
    }
    label.editing = false;
  },

  render() {
    const { label } = this.props;
    const { color } = this.state;
    const cssColor = '#' + color;
    let content = null;

    if(label.editing) {
      content = (
        <form onSubmit={this.handleSubmit} class="label">
          <span
            style={{ backgroundColor: cssColor }}
            class="label-color avatar avatar-small avatar-rounded">&nbsp;
          </span>
          <input
            onChange={this.handleChange}
            value={this.state.name}
            name='name'
          />
          <input
            onChange={this.handleColorChange}
            value={cssColor}
            name='color'
          />
          <button type="submit" class="button button-small">Submit</button>
          <button
            onClick={this.handleCancel}
            type="button"
            class="button button-small">
            Cancel
          </button>
        </form>
      );
    } else {
      content = (
        <div class="label">
          <span
            class="label-color avatar-rounded"
            style={{ backgroundColor: cssColor }}>
            &nbsp;
          </span>
          <span>{ label.name }</span>
          <span onClick={this.handleEdit} class="octicon octicon-pencil label-icons"></span>
          <span onClick={this.handleDelete} class="octicon octicon-x label-icons"></span>
        </div>
      );
    }

    return (
      <div>
        { content }
      </div>
    );
  }
});
