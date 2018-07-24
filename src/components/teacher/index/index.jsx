import './index.less';

export default {
    name: 'indexTeacherComponent',
    data() {
        return {
        };
    },
    render(h) {
        return (
            <div id="teacher-index-wrap">
                <div class="main">
                    <div class="main-container">
                        <div class="logo">
                            <div class="solo">
                                快学汇V2.0全新开启
                                <p> 教师端</p>
                            </div>
                        </div>
                        <ul>
                            <li>
                                <router-link to="/teacher/exercise">
                                    <p class="title">我的习题</p>
                                    <span class="icon-exercise"></span>
                                    <p>您已有 3 道私有作业题 公共作业题共计</p>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/teacher/library">
                                    <p class="title">选题组卷</p>
                                    <span class="icon-library"></span>
                                    <p>您今天还没有出题</p>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/teacher/center/notice">
                                    <p class="title">发布通知</p>
                                    <span class="icon-notice"></span>
                                    <p>您今天还没有发布通知</p>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/teacher/class">
                                    <p class="title">班级管理</p>
                                    <span class="icon-class"></span>
                                    <p>您已有一个班级5个学生</p>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>

                <footer>
                    <p>Copyright@2018 版权所有 京ICP备 15046643 号 </p>
                    <p>Copyright@2018 版权所有 京ICP备 15046643 号 北京市公安局海淀分局备案号：1101081948 </p>
                    <p>本站常年法律顾问：杜海涛律师 北京南环律师事务所</p>
                </footer>
            </div>
        )
    },
    methods: {

    }
}
