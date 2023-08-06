
// const main = () => {
//     celsiusInput.addEventListener('input', celsiusToFaAndKe);
//     fahrenheitInput.addEventListener('input', fahrenheitToCeAndKe);
//     kelvinInput.addEventListener('input', kelvinToCeAndFa);
//   };
  
//   main();
// main = () => {
// document.write("hi");
// };


var reply_click = function()
{
    document.write("Button clicked, id "+this.id+", text"+this.innerHTML);
}
document.getElementById('1').onclick = reply_click;
document.getElementById('2').onclick = reply_click;
document.getElementById('3').onclick = reply_click;
