/*
 * list
 * @Author: hejinming <b84866466@gmail.com>
 * @Date: 2017-12-18 16:55:17
 * @since 1.0.0
 */

import Component from 'component'

export default class List extends Component {
    data = {
        list: [
            {
                id: '0',
                title: 'loading'
            }
        ]
    }

    events = {
        'index-broadcast': (...args) => {
            let $event = args[args.length - 1]
            console.log(`${this.$name} receive ${$event.name} from ${$event.source.name}`)
        }
    }

    methods = {
        tap() {
            // this.num = this.num + 1
            console.log(this.$name + ' tap')
        },
        add() {
            let len = this.list.length
            this.list.push({ id: len + 1, title: 'title_' + len })
        }
    }

    onLoad() {
    }
}
