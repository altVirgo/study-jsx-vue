import './personalCenter.less';

export default {
    name: 'personalCenterComponent',
    data() {
        return {
            userInfo: {
                name: "王思",
                img: require("../../../assets/images/user.jpg"),
                school: "北京市东城区实验中学"
            }
        };
    },

    render(h) {
        return (
            <div id="teacher-personal-center-wrap">
                <div class="main">
                    <div class="main-wrap">
                        <div class="main-container">
                            <div class="main-left">
                                <div class="card-wrap">
                                    <div class="card-content">
                                        <div class="user-info">
                                            <div class="user-img">
                                                <img src={this.userInfo.img} alt="" />
                                            </div>
                                            <p class="user-name">{this.userInfo.name}</p>
                                            <p>{this.userInfo.school}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-wrap menu-left">
                                    <div class="card-content">
                                        <ul class="">
                                            <li><router-link to="/teacher/center/notice">发布通知</router-link></li>
                                            <li><router-link to="/teacher/center/setting">个人设置</router-link></li>
                                            <li><router-link to="/start">退出</router-link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="main-right">
                                <router-view />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    },
    created() {
        // let ue = UE.getEditor('ueditor-wrap');
    },

    methods: {
    }

}
