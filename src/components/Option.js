const Option = ({ onClick, children }) => {
  const btnCss = {
    padding: '.2em .6em',
    fontWeight: 'bold',
    border: '.2em solid black',
    borderRadius: '.3em',
    width: '7em',
  };
  return (
    <button style={btnCss} onClick={onClick}>
      {children}
    </button>
  );
};
export default Option;
