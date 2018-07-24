import './header.less';

export default {
    name: 'headerTeacherComponent',
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
            <div id="teacher-wrap">
                <header>
                    <div class="main-container">
                        <div class="logo pull-left"><img src={require("../../../assets/images/logo.png")} alt="快学网" /></div>
                        <ul class="clearfix">
                            <li><router-link to="/teacher/index">首页</router-link></li>
                            <li><router-link to="/teacher/exercise">我的习题</router-link></li>
                            <li><router-link to="/teacher/library">我的题库</router-link></li>
                            <li><router-link to="/teacher/homework" nativeOnClick={() => { this.$router.go(0); }}>我的作业</router-link></li>
                            <li><router-link to="/teacher/class">班级管理</router-link></li>
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
                                    <li><router-link to="/teacher/center/notice" nativeOnClick={() => { this.isDrop = false; }}>发布通知</router-link></li>
                                    <li><router-link to="/teacher/center/setting" nativeOnClick={() => { this.isDrop = false; }}>个人设置</router-link></li>
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
