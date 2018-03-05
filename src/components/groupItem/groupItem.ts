/*
 * groupItem
 * @Author: hejinming <b84866466@gmail.com>
 * @Date: 2017-12-18 16:54:11
 * @since 1.0.0
 */

import Component from 'component'

export default class GroupItem extends Component {
    props = {
        gitem: {}
    }
    data = {
    }
    methods = {
        tap() {
            this.gitem.childname = `Child Random(${Math.random()})`
            console.log(`Clicked Group ${this.$parent.$index}. Item ${this.$index}, ID is ${this.gitem.childid}`)
        }
    }
}
