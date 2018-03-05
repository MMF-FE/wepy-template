/*
 * 组件基类
 */
import wepy from 'wepy'
import BaseMixin from '@/mixins/base'

export default class Base extends wepy.component {
    mixins = [ BaseMixin ]
}
