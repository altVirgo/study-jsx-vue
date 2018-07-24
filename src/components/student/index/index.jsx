import './index.less';

export default {
    name: 'indexStudentComponent',
    data() {
        return {
        };
    },
    render(h) {
        return (
            <div id="student-index-wrap">
                <div class="main">
                    <div class="main-container">
                        <div class="logo">
                            <div class="solo">
                                快学汇V2.0全新开启
                                <p> 学生端</p>
                            </div>
                        </div>
                        <ul>
                            <li>
                                <p class="title">我的作业</p>
                                <span class="icon-exercise"></span>
                                <p>您已有 3 道私有作业题 公共作业题共计</p>
                            </li>
                            <li>
                                <p class="title">我的错题本</p>
                                <span class="icon-library"></span>
                                <p>您今天还没有出题</p>
                            </li>
                            <li>
                                <p class="title">我的通知</p>
                                <span class="icon-notice"></span>
                                <p>您今天还没有发布通知</p>
                            </li>
                            <li>
                                <p class="title">成绩查询</p>
                                <span class="icon-class"></span>
                                <p>您已有一个班级5个学生</p>
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
