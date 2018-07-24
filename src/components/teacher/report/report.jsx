import './report.less';

export default {
    name: 'reportTeacherComponent',
    data() {
        return {
            showIndex: 0,
            totalPerReport: [{
                class: '初中2013级2班',
                score: '90',
                time: '35',
                numComplete: '5',
                numPart: '2',
                numUncomplete: '3'
            }],
            totalReport: [{
                sort: 1,
                name: "小王",
                no: "23213",
                score: 98,
                percent: 98,
                status: "完成",
                time: "2018-04-03 15:50:39",
                costTime: "23min"

            }, {
                sort: 2,
                name: "小王",
                no: "23213",
                score: 98,
                percent: 98,
                status: "完成",
                time: "2018-04-03 15:50:39",
                costTime: "23min"

            }, {
                sort: 3,
                name: "小王",
                no: "23213",
                score: 98,
                percent: 98,
                status: "完成",
                time: "2018-04-03 15:50:39",
                costTime: "23min"
            }, {
                sort: 4,
                name: "小王",
                no: "23213",
                score: 98,
                percent: 98,
                status: "完成",
                time: "2018-04-03 15:50:39",
                costTime: "23min"
            }],
            mistake: [{
                no: "3213",
                selectedA: 2,
                selectedB: 5,
                selectedC: 4,
                selectedD: 6,
                correctNum: 12,
                wrongNum: 13,
                answer: "A",
                correctRate: "100%"
            }, {
                no: "3213",
                selectedA: 2,
                selectedB: 5,
                selectedC: 4,
                selectedD: 6,
                correctNum: 12,
                wrongNum: 13,
                answer: "A",
                correctRate: "100%"
            }],
            record: [{
                sort: 2,
                name: "王小二",
                score: 89,
                correntNum: "83901 83902 83903 83904 83905 83906 83907 83908 83909 83910",
                wrongNum: 3
            },{
                sort: 2,
                name: "王小二",
                score: 89,
                correntNum: 23,
                wrongNum: "83901 83902 83903 83904 83905"
            },{
                sort: 2,
                name: "王小二",
                score: 89,
                correntNum: 23,
                wrongNum: 3
            },{
                sort: 2,
                name: "王小二",
                score: 89,
                correntNum: 23,
                wrongNum: 3
            },{
                sort: 2,
                name: "王小二",
                score: 89,
                correntNum: 23,
                wrongNum: 3
            }]
        }
    },
    render(h) {
        return (
            <div id="teacher-report-wrap">
                <div class="main">
                    <div class="main-wrap">
                        <div class="main-container">
                            <div class="card-wrap">
                                <div class="card-title">作业报告</div>
                            </div>
                            <div class="card-wrap">
                                <div class="card-title">化学作业201804031148 <span class="icon-flag">已完成</span><span class="public-time">发布时间：2018-04-03 14:5</span></div>
                                <div class="card-content">
                                    <div class="tab-index">
                                        <ul class="clearfix">
                                            <li onClick={() => { this.showIndex = 0 }} class={this.showIndex === 0 ? "active" : ""}>总体成绩</li>
                                            <li onClick={() => { this.showIndex = 1 }} class={this.showIndex === 1 ? "active" : ""}>错误报告</li>
                                            <li onClick={() => { this.showIndex = 2 }} class={this.showIndex === 2 ? "active" : ""}>作答记录</li>
                                        </ul>
                                    </div>


                                    {
                                        /* 总体成绩 */
                                        this.showIndex === 0 &&
                                        <div class="tab-content">
                                            <div class="table">
                                                <el-table
                                                    data={this.totalPerReport}
                                                    style="width: 100%"
                                                    default-sort={{ prop: 'class', order: 'descending' }}
                                                >
                                                    <el-table-column prop="class" label="班级" width="180"></el-table-column>
                                                    <el-table-column prop="score" label="班级平均分（分）" width="180"></el-table-column>
                                                    <el-table-column prop="time" label="平均用时（分钟）" ></el-table-column>
                                                    <el-table-column prop="numComplete" label="完成人数（人）" ></el-table-column>
                                                    <el-table-column prop="numPart" label="部分完成人数（人）" ></el-table-column>
                                                    <el-table-column prop="numUncomplete" label="未完成人数（人）" ></el-table-column>
                                                </el-table>
                                            </div>
                                            <div class="table">
                                                <el-table
                                                    data={this.totalReport}
                                                    style="width: 100%"
                                                    default-sort={{ prop: 'sort', order: 'descending' }}
                                                >
                                                    <el-table-column prop="sort" label="名次" sortable></el-table-column>
                                                    <el-table-column prop="name" label="姓名" sortable></el-table-column>
                                                    <el-table-column prop="no" label="学号" sortable></el-table-column>
                                                    <el-table-column prop="score" label="成绩" sortable></el-table-column>
                                                    <el-table-column prop="percent" label="正确率" sortable></el-table-column>
                                                    <el-table-column prop="status" label="状态" sortable></el-table-column>
                                                    <el-table-column prop="time" label="完成时间" width="200" sortable></el-table-column>
                                                    <el-table-column prop="costTime" label="用时" sortable></el-table-column>
                                                    <el-table-column prop="operator" label="操作" ></el-table-column>
                                                </el-table>
                                            </div>
                                        </div>
                                    }
                                    {
                                        /* 错误报告 */
                                        this.showIndex === 1 && (
                                            <div class="tab-content">
                                                <div class="table">
                                                    <el-table
                                                        data={this.mistake}
                                                        style="width: 100%"
                                                        default-sort={{ prop: 'date', order: 'descending' }}
                                                    >
                                                        <el-table-column prop="no" label="题库编号" sortable width="180"></el-table-column>
                                                        <el-table-column prop="selectedA" label="选A人数" sortable width="180"></el-table-column>
                                                        <el-table-column prop="selectedB" label="选B人数" sortable></el-table-column>
                                                        <el-table-column prop="selectedC" label="选C人数" sortable></el-table-column>
                                                        <el-table-column prop="selectedD" label="选D人数" sortable></el-table-column>
                                                        <el-table-column prop="correctNum" label="答对人数" sortable></el-table-column>
                                                        <el-table-column prop="wrongNum" label="答错人数" sortable></el-table-column>
                                                        <el-table-column prop="answer" label="正确答案" sortable></el-table-column>
                                                        <el-table-column prop="correctRate" label="正确率" sortable></el-table-column>
                                                    </el-table>
                                                </div>
                                            </div>
                                        )
                                    }
                                    {
                                        /* 作答记录 */
                                        this.showIndex === 2 && (
                                            <div class="tab-content">
                                                <div class="table">
                                                    <el-table
                                                        data={this.record}
                                                        style="width: 100%"
                                                        default-sort={{ prop: 'date', order: 'descending' }}
                                                    >
                                                        <el-table-column prop="sort" label="名次" sortable width="180"></el-table-column>
                                                        <el-table-column prop="name" label="姓名" sortable width="180"></el-table-column>
                                                        <el-table-column prop="score" label="成绩" sortable></el-table-column>
                                                        <el-table-column prop="correntNum" label="正确（选择题）" sortable></el-table-column>
                                                        <el-table-column prop="wrongNum" label="错误（选择题）" sortable></el-table-column>
                                                    </el-table>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    },
    methods: {
        saveExercise() {

        },
        addExercise() {

        },
        handleCheckAllChange() {

        }
    }
}
