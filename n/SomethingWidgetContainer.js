// components vs containers
	// talks to stores (container) SomethingWidgetContainer
	// renders markup (components) SomethingWidget

var SomethingContainer = React.createClass({
  mixin: [PureRenderMixin],

  computeState() {
	return {
		amount: SomethingContainer.getAccountBudget()
	};
  },

  render() {
  	return <SomethingWidget value={this.state.amount} />;
  }
});


// <SomethingWidget value={...} /?