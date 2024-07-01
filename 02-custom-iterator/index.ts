// pattern from Microsoft
// 40min
// ReactiveX  = iterator + observer + functional programming

// observer - push нотификации (я хочу подписаться и слушать)
// iterator - распределение во времени

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Iteration_protocols

class CustomIterator {
    private cursor = 0;
    private value: number = 0;

    constructor(private arr: number[], private divisor = 1) {
    }

    public next() {
        while (this.cursor < this.arr.length) {
            this.value = this.arr[this.cursor++];
            if (this.value % this.divisor === 0) {
                return {
                    done: false,
                    value: this.value
                }
            }
        }
        return {
            done: true,
            value: this.value
        }
    }

    [Symbol.iterator]() {
        return {
            next: this.next.bind(this)
        }
    }
}

const consumer = new CustomIterator([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
//
// console.log(consumer.next());
// console.log(consumer.next());
// console.log(consumer.next());
// console.log(consumer.next());
// console.log(consumer.next());

for (let item of consumer) {
    console.log('iterator1', item);
} 

Array.from(consumer).forEach( value => {
    console.log('iterator2',value)
});
