export const Squares = ({turn, onClick}) => {
  return (
    <div className="square" onClick={onClick}>{turn}</div>
  )
};

export default Squares;