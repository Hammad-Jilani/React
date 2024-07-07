function Random(){
  let number = Math.ceil(Math.random() * 100);
  return <h1 style={{'backgroundColor' : "brown",'color':'white'}}>The Random number is {number}</h1>
}
export default Random;