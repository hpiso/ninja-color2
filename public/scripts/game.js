var colors = [
    {code:'#7E4D76'},
    {code:'#3DC9B3'},
    {code:'#fff'},
    {code:'#000'},
];

var GameBox = React.createClass({

    getInitialState: function() {

        //10 items initialization
        var items = [];
        for (var i=0; i < 10; i++) {
            items.push(
                {class: "btn btn-success", color: this.props.colors[this.randomNumber()]}
            )
        }

        var btns = [];
        for (var i=0; i < this.props.colors.length; i++) {
            btns.push(
                {class: "btn btn-success", color: this.props.colors[i]}
            )
        }

        return {
            items:items,
            btns:btns
        };
    },

    randomNumber: function(){
        return Math.floor((Math.random() * this.props.colors.length) + 0);
    },

    handleMatchingClick: function() {

        var newArray = React.addons.update(this.state.items, {$splice: [[0, 1]]});

        this.setState({
            items: React.addons.update(newArray,
                {$push: [this.state.btns[this.randomNumber()]]}
            ),
        });
    },

    render: function() {
        return (
            <div>
                <ItemList      items={this.state.items} />
                <BtnActionList onMatchingClick={this.handleMatchingClick} btns={this.state.btns} current={this.state.items[0]} />
            </div>
        )
    }
});

var ItemList = React.createClass({
    render: function() {
        var itemsDisplay = this.props.items.map(function(item, i) {
            return (
                <a className={item.class} style={{backgroundColor: item.color.code}} key={i}>
                    Item
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
        if (this.props.current.color.code == btnObject.color.code) {
            this.setState({score: this.state.score + 1 });
            this.props.onMatchingClick()
        } else {
            this.setState({score: this.state.score - 1 });
        }
    },

    render: function() {
        var btnActions = this.props.btns.map(function(btnAction, i) {

            return (
                <a className={btnAction.class} style={{backgroundColor: btnAction.color.code}} onClick={this.handleClick.bind(null, btnAction)} key={i}>
                    CLICK
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
  <GameBox colors={colors} />,
  document.getElementById('game')
);
