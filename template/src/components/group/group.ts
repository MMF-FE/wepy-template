/*
 * group
 * @Author: hejinming <b84866466@gmail.com>
 * @Date: 2017-12-18 16:52:27
 * @since 1.0.0
 */

import Component from 'component'
import GroupItem from '../groupItem/groupItem'

export default class Group extends Component {
    props = {
        grouplist: {},
        index: {}
    }
    a = 11
    components = {
        groupitem: GroupItem
    }
    methods = {
        tap() {
            this.grouplist.name = `Parent Random(${Math.random()})`
            console.log(`Clicked Group ${this.$index}, ID is ${this.grouplist.id}`)
        }
    }
}
