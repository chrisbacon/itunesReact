var React = require('react');


var Song = function(props) {
	return(
		<li>
			{props.rank + 1}: {props.song.title.label}
		</li>
	)
}

module.exports = Song;