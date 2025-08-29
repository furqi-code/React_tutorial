export function Button({ children, clickHandler , title}) {
  // function clickHandler(){
  //     console.log(children + ' clicked') ;
  // }
  return (
    <button onClick={clickHandler} className="btnn">
      {children}
    </button>
  );
}
