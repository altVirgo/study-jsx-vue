import './publicHomework.less';
import studentCascadeInfoComponent from '../studentCascadeInfo/studentCascadeInfo.jsx'

export default {
    name: 'publicHomeworkComponent',
    components: { studentCascadeInfo: studentCascadeInfoComponent },
    data() {
        return {
            startTime: '',
            endTime: '',
            recipient: [[]],
            studentInfo: [
                {
                    school: "大学",
                    class: [
                        {
                            name: "大一年级一班",
                            student: ["王思111", "周奥", "喻巧玲", "伍琴"]
                        },
                        {
                            name: "大一年级二班",
                            student: ["王思111", "周奥", "喻巧玲", "伍琴"]
                        }
                    ]
                }, {
                    school: "高中",
                    class: [
                        {
                            name: "高一年级一班",
                            student: ["王思211", "周奥", "喻巧玲", "伍琴"]
                        },
                        {
                            name: "高一年级二班",
                            student: ["王思222", "周奥", "喻巧玲", "伍琴"]
                        }
                    ]
                }, {
                    school: "初中",
                    class: [
                        {
                            name: "初一年级一班",
                            student: ["王思311", "周奥", "喻巧玲", "伍琴"]
                        },
                        {
                            name: "初一年级二班",
                            student: ["王思322", "周奥", "喻巧玲", "伍琴"]
                        }
                    ]
                },
                {
                    school: "小学",
                    class: [
                        {
                            name: "小一年级一班",
                            student: ["王思411", "周奥", "喻巧玲", "伍琴"]
                        },
                        {
                            name: "小一年级二班",
                            student: ["王思422", "周奥", "喻巧玲", "伍琴"]
                        }
                    ]
                }
            ]
        };
    },
    props: {
        getResult: Function
    },

    render(h) {
        return (
            <div id="teacher-punlic-homework-wrap">
                <div class="main">
                    <div class="main-wrap">
                        <div class="main-container">
                            <div class="card-wrap">
                                <div class="card-title">发布作业</div>
                            </div>
                            <div class="card-wrap">
                                <div class="card-title">化学作业201804031148 <span class="icon-flag unpublic">未发布</span></div>
                                <div class="card-content">
                                    <form class="form-inline">
                                        <div class="form-group">
                                            <label for="exampleInputName2" class="require">开始时间</label>
                                            <el-date-picker name="startTime" v-model={this.startTime} type="date" placeholder="选择日期"  ></el-date-picker>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail2" class="require">结束时间</label>
                                            <el-date-picker name="startTime" v-model={this.endTime} type="date" placeholder="选择日期"></el-date-picker>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="card-wrap">
                                <div class="card-title">收件人</div>
                                <div class="card-content">
                                    {this.recipient.map((ele, idx) => {
                                        if (idx === this.recipient.length - 1) {
                                            return (<div class="row">
                                                <studentCascadeInfo dataInfo={this.studentInfo} require change={this.changeStudent} />
                                                <div class="addRecipient" onClick={() => { this.recipient.push([]) }}>
                                                    <span>+</span>添加班级／成员
                                                </div>
                                            </div>)
                                        } else {
                                            return (<div class="row">
                                                <studentCascadeInfo dataInfo={this.studentInfo} require change={this.changeStudent} />
                                            </div>)
                                        }
                                    })}
                                    <button class="btn btn-success btn-blue" type="button" onClick={this.publicHomework}>发布作业</button>
                                    <button class="btn btn-default btn-gray" type="button" onClick={this.cancelPublicHomework}>取消</button>
                                </div>
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
        changeStudent() {

        },
        publicHomework() {
            this.getResult(true);
        },
        cancelPublicHomework() {
            this.getResult(false);
        }
    }

}
