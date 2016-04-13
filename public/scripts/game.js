var btns = [
    {id: 1, btn: "btn btn-primary", color:{backgroundColor: '#fff'}, value: "white"},
    {id: 2, btn: "btn btn-success", color:{backgroundColor: '#000'}, value: "Black"}
];

var GameBox = React.createClass({

    getInitialState: function() {

        var items = [
            {id: 3, btn: "btn btn-success", color:{backgroundColor: '#fff'}, value: "White"},
            {id: 4, btn: "btn btn-warning", color:{backgroundColor: '#000'}, value: "Black"},
        ];

        return {items:items};
    },

    randomNumber: function(){
        return Math.floor((Math.random() * this.state.items.length) + 0);
    },

    handleMatchingClick: function() {

        var rand = this.randomNumber();
        console.log(rand);

        var test = [
            {id: 4, btn: "btn btn-success", color:{backgroundColor: '#fff'}, value: "YIPIIIII"},
            {id: 5, btn: "btn btn-warning", color:{backgroundColor: '#000'}, value: "YIPIIIII2"},
        ];

        var newArray = React.addons.update(this.state.items, {$splice: [[0, 1]]}); // => [1, 2, 3, 4]

        this.setState({
            items: React.addons.update(newArray,
                {$push: test} // todo push a random item
            ),
        });
    },

    render: function() {
        return (
            <div>
                <ItemList      items={this.state.items} />
                <BtnActionList onMatchingClick={this.handleMatchingClick} btns={this.props.btns} current={this.state.items[0]} />
            </div>
        )
    }
});

var ItemList = React.createClass({
    render: function() {
        var itemsDisplay = this.props.items.map(function(item, i) {
            return (
                <a className={item.btn} style={item.color} key={i}>
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
        return {
            score: 0,
        };
    },
    handleClick: function (btnObject) {
        if (this.props.current.color.backgroundColor == btnObject.color.backgroundColor) {
            this.setState({score: this.state.score + 1 });
            this.props.onMatchingClick()
        }
    },

    render: function() {
        var btnActions = this.props.btns.map(function(btnAction, i) {
            return (
                <a className={btnAction.btn} style={btnAction.color} onClick={this.handleClick.bind(null, btnAction)} key={i}>
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
  <GameBox btns={btns} />,
  document.getElementById('game')
);
