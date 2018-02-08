declare module 'page' {
    import Base from 'common/base'
    export default Base
}

declare module 'component' {
    import Base from 'common/baseComponent'
    export default Base
}

declare module 'wepy' {
    import app from 'wepy/lib/app'
    import event from 'wepy/lib/event'
    import component from 'wepy/lib/component'
    import page from 'wepy/lib/page'
    import mixin from 'wepy/lib/mixin'
    import base from 'wepy/lib/base'
    import util from 'wepy/lib/util'

    export default {
        event: event,
        app: app,
        component: component,
        page: page,
        mixin: mixin,

        $createApp: base.$createApp,
        $createPage: base.$createPage,

        $isEmpty: util.$isEmpty,
        $isEqual: util.$isEqual,
        $isDeepEqual: util.$isDeepEqual,
        $has: util.$has,
        $extend: util.$extend,
        $isPlainObject: util.$isPlainObject,
        $copy: util.$copy,
    }
}

interface wx {

}
