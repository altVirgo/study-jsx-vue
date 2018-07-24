import './header.less';

export default {
    name: 'headerStudentComponent',
    data() {
        return {
            userInfo: {
                name: "王思",
                img: require("../../../assets/images/user.jpg")
            },
            isDrop: false
        };
    },
    render(h) {
        return (
            <div id="student-wrap">
                <header>
                    <div class="main-container">
                        <div class="logo pull-left"><img src={require("../../../assets/images/logo.png")} alt="快学网" /></div>
                        <ul class="clearfix">
                            <li><router-link to="/student/index">首页</router-link></li>
                            <li><router-link to="/student/homework" nativeOnClick={() => { this.$router.go(0); }}>我的作业</router-link></li>
                            <li><router-link to="/student/wrong" nativeOnClick={() => { this.$router.go(0); }}>我的错题本</router-link></li>
                            <li><router-link to="/student/center/notice">我的通知</router-link></li>
                            <li><router-link to="/student/inquiry">成绩查询</router-link></li>
                        </ul>
                        <div class="user-info" >
                            <div onClick={() => { this.toggleDrop() }}>
                                <span class="user-pic">
                                    <img src={this.userInfo.img} alt="" />
                                </span>
                                <span class="user-name">{this.userInfo.name}</span>
                                <span class={this.isDrop ? "arrow glyphicon glyphicon-triangle-bottom active" : "arrow glyphicon glyphicon-triangle-bottom"}>
                                </span>
                            </div>
                            <div class={this.isDrop ? "drop-wrap active" : "drop-wrap"}>
                                <ul>

                                    <li><router-link to="/student/center/notice" nativeOnClick={() => { this.isDrop = false; }}>发布通知</router-link></li>
                                    <li><router-link to="/student/center/setting" nativeOnClick={() => { this.isDrop = false; }}>个人设置</router-link></li>
                                    <li><router-link to="/start">退出</router-link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </header>
                <router-view />
            </div>
        )
    },
    methods: {
        toggleDrop() {
            this.isDrop = !this.isDrop;
        }
    }
}
