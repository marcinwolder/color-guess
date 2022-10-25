const ColorDisplay = ({ text, color = 'red' }) => {
  const divCss = {
    position: 'relative',
    border: '.2em solid black',
    borderRadius: '.3em',
    height: '15em',
    width: '20em',
    backgroundColor: color,
  };
  const spanCss = {
    position: 'relative',
    display: 'block',
    textAlign: 'center',
    transform: 'translate(0, -50%)',
    top: '50%',
    fontSize: '2.5em',
    textShadow:
      '1px 0px 1px white, 0px 1px 1px white, -1px 0px 1px white, 0px -1px 1px white',
  };
  return (
    <div style={divCss}>
      <span style={spanCss}>Streak: {text}</span>
    </div>
  );
};
export default ColorDisplay;
