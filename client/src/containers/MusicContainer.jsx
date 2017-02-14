var React = require('react');

var MusicList = require('../components/MusicList.jsx');

var MusicContainer = React.createClass({

	getInitialState: function() {
		return {songs: []}
	},

	componentDidMount: function() {
		var url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json"
		var request = new XMLHttpRequest();
		request.open('GET', url);
        request.onload = function() {
            if (request.status === 200) {
                var data = JSON.parse(request.responseText);
                this.setState({songs: data.feed.entry});
                console.log(data.feed.entry);
            }
        }.bind(this)
        request.send(null);

	},

	render: function() {
		return(
			<div>
				<h2>UK Top 20</h2>
				<MusicList songs = {this.state.songs}/>
			</div>


			)
	}

});

module.exports = MusicContainer;