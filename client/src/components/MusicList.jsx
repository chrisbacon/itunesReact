var React = require('react');

var Song = require('./Song.jsx');

var MusicList = React.createClass({

	render: function() {

		var songs = this.props.songs.map(function(song,index){

			return <Song key={index} rank={index} song={song}/>

		})

		return(
			<ul>
				{songs}
			</ul>

			)
	}

});

module.exports = MusicList;