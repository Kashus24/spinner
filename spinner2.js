const spinChar = ['\r|','\r/','\r-','\r\\','\r|','\r/','\r-','\r\\','\r| \n'];

let timer = 100;

for (let spin of spinChar) {
  setTimeout(() => {
    process.stdout.write(spin);
}, 
timer);
timer += 200;
}

/*
setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
  process.stdout.write('\r\\   ');
}, 700);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 900);

setTimeout(() => {
  process.stdout.write('\r\/   ');
}, 1100);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 1300);

setTimeout(() => {
  process.stdout.write('\r\\   ');
}, 1500);

setTimeout(() => {

  process.stdout.write('\r\|   '); 
}, 1700);
*/
