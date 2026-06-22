// task # 03, lab # 11. using ternary conditional in reder based on props
//Author: S.M Yousuf
function Log(props) {

  return <h1>{props.logged ? "Welcome back!" : "please log in."}</h1>;

}

export default Log;