/** @format */

const type = {
  input: document.querySelector("#num"),
  btn: document.querySelector(".btn"),
  result: document.querySelector("#result"),
  randomNumber: document.querySelector("#randomNum"),
};

type.btn.addEventListener(
  "click",
  debounce(() => {
    timeout = setTimeout(() => {
      const randomNum = `${(Math.random() * 10).toFixed()}`;
      console.log(randomNum);
      let value = type.input.value;
      console.log(value);
      if (`${value}` === randomNum) {
        type.result.textContent = `The random number was ${value}. You guessed right. You win!`;
      } else {
        type.result.textContent = `The random number was not ${value}. You lost!`;
      }
      type.randomNumber.textContent = `The random number was : ${randomNum}`;
    }, 100);

    timeout;
  }, 1000)
);

function debounce(fn = () => {}, delay = 1000) {
  let timeout;

  return () => {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      fn();
    }, delay);
  };
}
