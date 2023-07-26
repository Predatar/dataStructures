import { stdin, stdout } from 'process';
import * as readline from 'readline';

class CarNumber {
  private numbers: number[] = [];

  private readLine = readline.createInterface({ input: stdin, output: stdout });

  enterNumber() {
    this.readLine.question('Car number | Position: ', (value: string) => {
      switch (value.toUpperCase()) {
        case 'СПИСОК':
          this.showAllNumbers();
          break;
        case 'СТОП':
          this.readLine.close();
          break;
        default:
          this.addNumber(value);
          this.enterNumber();
          break;
      }
    });
  }

  addNumber(value: string) {
    const mas = value.split(' | ');
    if (+mas[1] == 0) {
      this.numbers.unshift(+mas[0]);
    } else if (+mas[1] > this.numbers.length - 1) {
      this.numbers.push(+mas[0]);
    } else {
      this.numbers.splice(+mas[1], 0, +mas[0]);
    }
    this.enterNumber();
  }

  showAllNumbers() {
    this.numbers.forEach(elem => console.log(elem));
    this.enterNumber();
  }
}

const numbers = new CarNumber();

numbers.enterNumber();
