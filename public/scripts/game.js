var datas = [
    {id: 1, btn: "btn btn-primary", value: "Primary"},
    {id: 2, btn: "btn btn-success", value: "Success"}
];


var GameBox = React.createClass({
    render: function() {
        return (
            <div>
                <BtnActionList datas={this.props.datas} />
            </div>
        )
    }
});

var ItemList = React.createClass({
    render: function() {

    }
});

var Item = React.createClass({
    render: function() {

    }
});

var BtnActionList = React.createClass({
    render: function() {
        var btnActions = this.props.datas.map(function(btnAction) {
            return (
                <a className={btnAction.btn} key={btnAction.id} style="">
                    {btnAction.value}
                </a>
            );
        });

        return (
            <div>
                {btnActions}
            </div>
        )
    }
});

ReactDOM.render(
  <GameBox datas={datas} />,
  document.getElementById('game')
);
