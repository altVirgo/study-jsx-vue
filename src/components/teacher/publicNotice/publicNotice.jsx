import './publicNotice.less';
import studentCascadeInfoComponent from '../studentCascadeInfo/studentCascadeInfo.jsx'

export default {
    name: 'publicNoticeComponent',
    components: { studentCascadeInfo: studentCascadeInfoComponent },
    data() {
        return {
            form: {
                title: '',
                content: ''
            },
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

    render(h) {
        return (
            <div id="teacher-center-notice-wrap">
                <div class="card-wrap">
                    <div class="card-title">发布通知</div>
                </div>
                <div class="card-wrap">
                    <div class="card-title">通知内容</div>
                    <div class="card-content  notice-info">
                        <el-form model={this.form}>
                            <el-form-item label="标题" >
                                <input
                                    v-model={this.form.title}
                                    placeholder='请输入通知标题'
                                    auto-complete="off">
                                </input>
                            </el-form-item>
                            <el-form-item label="内容" >
                                <textarea
                                    v-model={this.form.content}
                                    placeholder="请输入通知正文"
                                    auto-complete="off" >
                                </textarea>
                            </el-form-item>
                        </el-form>
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
                        <button class="btn btn-success btn-blue" type="button" onClick={this.publicHomework}>发布通知</button>
                        <button class="btn btn-default btn-gray" type="button" onClick={this.cancelPublicHomework}>取消</button>
                    </div>
                </div>
            </div>
        )
    },
    created() {

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
