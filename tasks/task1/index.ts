import { stdin, stdout } from 'process';
import * as readline from 'readline';

class CarNumber {
  private numbers: number[] = [];

  private readLine = readline.createInterface({ input: stdin, output: stdout });

  enterNumber() {
    this.readLine.question('Car number: ', (value: string) => {
      switch (value.toUpperCase()) {
        case 'СПИСОК':
          this.showAllNumbers();
					this.enterNumber()
          break;
        case 'СТОП':
          this.readLine.close();
          break;
        default:
          this.addNumber(+value);
          this.enterNumber();
          break;
      }
    });
  }

  addNumber(number: number) {
    this.numbers.push(number);
  }

  showAllNumbers() {
    this.numbers.forEach(elem => console.log(elem));
  }
}

const numbers = new CarNumber();

numbers.enterNumber();
