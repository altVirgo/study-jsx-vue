import './region.less';

export default {
    name: 'regionComponent',
    data() {
        return {
        };
    },
    render(h) {
        return (
            <div id="region-wrap" class="full-screen">
                <header>
                    <div class="logo"><img src={require("../../assets/images/logo.png")} alt="快学网" /></div>
                </header>
                <div class="operator-box">
                    <div class="solo">让学习变得更简单</div>
                    <router-link to="/login" class="btn btn-default btn-login" role="button">登陆</router-link>
                    <router-link to="/region" class="btn btn-success btn-region" role="button">注册</router-link>
                    <a href="">下载APP</a>
                </div>
            </div>
        )
    }
}
