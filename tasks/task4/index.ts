import { stdin, stdout } from 'process';
import * as readline from 'readline';

class CarNumber {
  private numbersMap: Map<number, string> = new Map();

  private readLine = readline.createInterface({ input: stdin, output: stdout });

  enterNumber() {
    this.readLine.question('Car number | User name: ', (value: string) => {
      switch (value.toUpperCase()) {
        case 'СПИСОК':
          this.showAllNumbers();
          this.enterNumber();
          break;
        case 'АВТОМОБИЛИ':
          this.showCarNumber();
          this.enterNumber();
          break;
        case 'ВЛАДЕЛЬЦЫ':
          this.showCarUser();
          this.enterNumber();
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

  addNumber(number: string) {
    const mas = number.split(' | ');
    this.numbersMap.set(+mas[0], mas[1]);
  }

  changeUser(number: string) {
    const mas = number.split(' | ');
    this.numbersMap.set(+mas[0], mas[1]);
  }

  showAllNumbers() {
    this.numbersMap.forEach((value, key) => console.log(key, value));
  }

  showCarNumber() {
    for (const key of this.numbersMap.keys()) {
      console.log(key);
    }
  }

  showCarUser() {
    const mas = [];
    for (const user of this.numbersMap.values()) {
      mas.push(user);
    }
    const resMas = this.removeDuplicates(mas);
    resMas.forEach(elem => console.log(elem));
  }

  private removeDuplicates(arr: string[]) {
    const uniqueElements: { [key: string]: boolean } = {};
    const resultArr = [];

    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (!uniqueElements[element]) {
        resultArr.push(element);
        uniqueElements[element] = true;
      }
    }

    return resultArr;
  }
}

const numbers = new CarNumber();

numbers.enterNumber();
