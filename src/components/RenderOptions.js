import Option from './Option';

const RenderOptions = ({
  optionsArr,
  indexOfTrue,
  handleCorrectAns,
  handleFalseAns,
}) => {
  const divStyle = {
    width: '100%',
    padding: '.2em',
    display: 'flex',
    justifyContent: 'space-around',
  };
  const options = optionsArr.map((color, i) => {
    if (i === indexOfTrue)
      return (
        <Option onClick={handleCorrectAns} key={i}>
          {color}
        </Option>
      );
    return (
      <Option onClick={handleFalseAns} key={i}>
        {color}
      </Option>
    );
  });
  return <div style={divStyle}> {options}</div>;
};
export default RenderOptions;
