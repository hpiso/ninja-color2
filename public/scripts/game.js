var btns = [
    {id: 1, btn: "btn btn-primary", value: "Primary"},
    {id: 2, btn: "btn btn-success", value: "Success"}
];

var items = [
    {id: 2, btn: "btn btn-primary", value: "Primary"},
    {id: 3, btn: "btn btn-success", value: "Success"},
    {id: 4, btn: "btn btn-warning", value: "Warning"},
];

var colors = {
    backgroundColor: '#7E4D76',
};


var GameBox = React.createClass({
    render: function() {
        return (
            <div>
                <ItemList items={this.props.items} />
                <BtnActionList btns={this.props.btns} />
            </div>
        )
    }
});

var ItemList = React.createClass({
    render: function() {
        var itemsDisplay = this.props.items.map(function(item) {
            return (
                <a className={item.btn}  key={item.id}>
                    {item.value}
                </a>
            );
        }, this);

        return (
            <div>
                {itemsDisplay}
            </div>
        )
    }
});

var BtnActionList = React.createClass({
    getInitialState: function () {
        return { score: 0 };
    },
    handleClick: function () {
        if (this.state.score < 10) {
            this.setState({score: this.state.score + 1 });
        }
    },

    render: function() {
        var btnActions = this.props.btns.map(function(btnAction) {
            return (
                <a className={btnAction.btn} style={colors} onClick={this.handleClick} key={btnAction.id}>
                    {btnAction.value}
                </a>
            );
        }, this);

        return (
            <div>
                {btnActions}
                <h3>Score : {this.state.score}</h3>
            </div>
        )
    }
});

ReactDOM.render(
  <GameBox btns={btns} items={items} />,
  document.getElementById('game')
);
