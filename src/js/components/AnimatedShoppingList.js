import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default React.createClass({
  getInitialState() {
    return {
      items: [
        { id: 1, name: 'Milk' },
        { id: 2, name: 'Yoghurt' },
        { id: 3, name: 'Orange Juice' }
      ]
    };
  },

  handleChange(evt) {
    if(evt.key === 'Enter') {
      // create a new item
      let newItem = { id: Date.now(), name: evt.target.value };
      // create a new array with the old items + the new item
      let newItems = this.state.items.concat(newItem);
      // clear text field
      evt.target.value = '';
      // set new state
      this.setState({
        items: newItems
      });
    }
  },

  handleRemove(i) {
    // create a new array without the clicked item
    let newItems = this.state.items;
    // remove the selected item
    newItems.splice(i, 1);
    // set state
    this.setState({
      items: newItems
    });
  },

  render() {
    let shoppingItems = this.state.items.map((item, i) => (
      <div key={item.id} className="item"
           onClick={this.handleRemove.bind(this, i)}>
        {item.name}
      </div>
    ));

    return (
      <div>
        <ReactCSSTransitionGroup transitionName="example"
                                 transitionEnterTimeout={300}
                                 transitionLeaveTimeout={300}>
          {shoppingItems}
        </ReactCSSTransitionGroup>
        <input type="text" value={this.state.newItem} onKeyDown={this.handleChange} />
      </div>
    );
  }
});
