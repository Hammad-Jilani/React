function Component3() {
  let date = new Date();
  return (
    <p className="lead">the current time is {date.toLocaleTimeString()}</p>
  );
}
export default Component3;
