import './notice.less';
// import studentCascadeInfoComponent from '../studentCascadeInfo/studentCascadeInfo.jsx'

export default {
    name: 'noticeStudentComponent',
    // components: { studentCascadeInfo: studentCascadeInfoComponent },
    data() {
        return {
            noticeList: [{
                title: "关于下周化学月考的通知",
                time: "2018-04-11 12:34",
                content: "这学期即将进入尾声，希望同学们不要松懈， 积极备战下周五的月考。 考试时间：下周五（4月20日）下午15:00",
                teacher: {
                    img: require("../../../assets/images/user.jpg"),
                    name: "小小黄",
                    school: "北京市东城区实验中学"
                }
            }, {
                title: "关于下周化学月考的通知",
                time: "2018-04-11 12:34",
                content: "这学期即将进入尾声，希望同学们不要松懈， 积极备战下周五的月考。 考试时间：下周五（4月20日）下午15:00",
                teacher: {
                    img: require("../../../assets/images/user.jpg"),
                    name: "小小黄",
                    school: "北京市东城区实验中学"
                }
            }, {
                title: "关于下周化学月考的通知",
                time: "2018-04-11 12:34",
                content: "这学期即将进入尾声，希望同学们不要松懈， 积极备战下周五的月考。 //n考试时间：下周五（4月20日）下午15:00",
                teacher: {
                    img: require("../../../assets/images/user.jpg"),
                    name: "小小黄",
                    school: "北京市东城区实验中学"
                }
            }, {
                title: "关于下周化学月考的通知",
                time: "2018-04-11 12:34",
                content: "这学期即将进入尾声，希望同学们不要松懈， 积极备战下周五的月考。 考试时间：下周五（4月20日）下午15:00",
                teacher: {
                    img: require("../../../assets/images/user.jpg"),
                    name: "小小黄",
                    school: "北京市东城区实验中学"
                }
            }]
        };
    },

    render(h) {
        return (
            <div id="student-center-notice-wrap">
                <div class="card-wrap">
                    <div class="card-title">我的通知</div>
                </div>
                <div class="card-wrap">
                    <div class="card-content  notice-info">
                        {
                            this.noticeList.map((ele, index) => {
                                return (<div class="notice-item">
                                    <div class="flex-left">
                                        <img src={ele.teacher.img} alt="" />
                                        <div class="teacher-info">
                                            {/* <span class="glyphicon glyphicon-triangle-left"></span> */}
                                            <img src={ele.teacher.img} alt="" />
                                            <p class="teacher-name">{ele.teacher.name}</p>
                                            <p class="teacher-school">{ele.teacher.school}</p>
                                        </div>
                                    </div>
                                    <div class="flex-right">
                                        <div class="notice-title">
                                            {ele.title}
                                            <span class="notice-time">{ele.time}</span>
                                        </div>
                                        <div class="notice-content">{ele.content}</div>
                                    </div>
                                </div>)
                            })
                        }
                        <div class="btn-more" onClick={this.lookMore}>查看更多</div>
                    </div>
                </div>
            </div>
        )
    },
    created() {

    },

    methods: {
        lookMore() {
            this.noticeList.push(this.noticeList[0]);
        }
    }

}
