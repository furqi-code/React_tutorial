export function Button({ children, ...props}) {
  // function clickHandler(){
  //     console.log(children + ' clicked') ;
  // }
  return (
    <button className="btn" {...props}>
      {children}
    </button>
  );
}
