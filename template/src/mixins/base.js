/*
 * 全局基类
 * page 与 component 的公共属性及方法
 */
import wepy from 'wepy'
import constant from '@/common/constant'

export default class Base extends wepy.mixin {
    data = {
        constant: constant,
        // 全局 data
        globalData: wepy.$instance.globalData
    }

    methods = {
        // 打电话
        callPhone(phoneNumber) {
            wx.makePhoneCall({
                phoneNumber
            })
        },
        // 路由跳转
        go(url, success, fail, complete) {
            wx.navigateTo({
                url,
                success,
                fail,
                complete
            })
        },
    }

    // 动态设置当前页面的标题。
    setTitle(title, success, fail, complete) {
        wx.setNavigationBarTitle({
            title,
            success,
            fail,
            complete
        })
    }
}
