import { stdin, stdout } from 'process';
import * as readline from 'readline';

class CarNumber {
  private numbersSet: Set<number> = new Set();

  private readLine = readline.createInterface({ input: stdin, output: stdout });

  enterNumber() {
    this.readLine.question('Car number: ', (value: string) => {
      switch (value.toUpperCase()) {
        case 'СПИСОК':
          this.showAllNumbers();
          this.enterNumber();
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
    if(this.numbersSet.has(number)) {
			console.log('Есть');
		}else {
			this.numbersSet.add(number);
		}
  }

  showAllNumbers() {
    this.numbersSet.forEach(elem => console.log(elem));
  }
}

const numbers = new CarNumber();

numbers.enterNumber();
