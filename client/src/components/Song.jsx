var React = require('react');


var Song = function(props) {
	return(
		<li>
			{props.song.title.label}
		</li>
	)
}

module.exports = Song;