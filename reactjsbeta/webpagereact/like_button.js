'use strict';

function LikeButton() {
  const [liked, setLiked] = React.useState(false);

  if (liked) {
    return 'You liked this!';
  }

  return <button onClick={() => setLiked(true)}>Like</button>;
}

ReactDOM.render(
  React.createElement(LikeButton),
  document.getElementById('component-goes-here')
);

ReactDOM.render(
  React.createElement(LikeButton),
  document.getElementById('component-goes-here-too')
);

ReactDOM.render(
  React.createElement(LikeButton),
  document.getElementById('component-goes-here-too-again')
);
