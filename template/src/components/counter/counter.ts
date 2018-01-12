/*
 * counter
 * @Author: hejinming <b84866466@gmail.com>
 * @Date: 2017-12-18 16:50:16
 * @since 1.0.0
 */

import Component from 'component'

export default class Counter extends Component {
    props = {
        num: {
            type: [Number, String],
            coerce: function (v) {
                return +v
            },
            default: 50
        }
    }

    data = {
    }
    events = {
        'index-broadcast': (...args) => {
            let $event = args[args.length - 1]
            console.log(`${this.$name} receive ${$event.name} from ${$event.source.$name}`)
        }
    }

    watch = {
        num(curVal, oldVal) {
            console.log(`旧值：${oldVal}，新值：${curVal}`)
        }
    }

    methods = {
        plus() {
            this.num = this.num + 1
            console.log(this.$name + ' plus tap')

            this.$emit('index-emit', 1, 2, 3)
        },
        minus() {
            this.num = this.num - 1
            console.log(this.$name + ' minus tap')
        }
    }
}
