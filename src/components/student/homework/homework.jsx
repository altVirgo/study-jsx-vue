import './homework.less';

// import reportTeacherComponent from "../report/report.jsx";
// import publicHomeworkComponent from "../publicHomework/publicHomework.jsx"

export default {
    name: 'homeworkStudentComponent',
    // components: { report: reportTeacherComponent, publicHomework: publicHomeworkComponent },
    data() {
        return {
            showIndex: 0,
            completedList: [{
                no: 11,
                name: '2018上学期五月第一周模拟已完成'
            },
            {
                no: 11,
                name: '2018上学期五月第一周模拟已完成'
            },
            {
                no: 11,
                name: '2018上学期五月第一周模拟已完成'
            },
            {
                no: 11,
                name: '2018上学期五月第一周模拟已完成'
            },
            {
                no: 11,
                name: '2018上学期五月第一周模拟已完成'
            },
            {
                no: 11,
                name: '2018上学期五月第一周模拟已完成'
            },
            {
                no: 11,
                name: '2018上学期五月第一周模拟已完成'
            }
            ],
            uncompletedList: [{
                no: 11,
                name: '2018上学期五月第二周模拟未完成'
            },
            {
                no: 11,
                name: '2018上学期五月第二周模拟未完成'
            },
            {
                no: 11,
                name: '2018上学期五月第二周模拟未完成'
            },
            {
                no: 11,
                name: '2018上学期五月第二周模拟未完成'
            },
            {
                no: 11,
                name: '2018上学期五月第二周模拟未完成'
            },
            {
                no: 11,
                name: '2018上学期五月第二周模拟未完成'
            },
            {
                no: 11,
                name: '2018上学期五月第二周模拟未完成'
            }],
            expired: [{
                no: 11,
                name: '2018上学期五月第二周模拟已过期'
            },
            {
                no: 11,
                name: '2018上学期五月第二周模拟已过期'
            },
            {
                no: 11,
                name: '2018上学期五月第二周模拟已过期'
            },
            {
                no: 11,
                name: '2018上学期五月第二周模拟已过期'
            },
            {
                no: 11,
                name: '2018上学期五月第二周模拟已过期'
            },
            {
                no: 11,
                name: '2018上学期五月第二周模拟已过期'
            },
            {
                no: 11,
                name: '2018上学期五月第二周模拟已过期'
            }],
            exercise: [{
                no: "3213213",
                topic: "下列关于分子、原子的叙述错误的是",
                options: [
                    "A、分子是不断运动的",
                    "B、分子和原子都可以构成物质",
                    "C、分子式化学变化中的最小微粒",
                    "D、原子的种类和个数在化学变化的前后保持不变"
                ],
                answer: []
            }, {
                no: "3213243",
                topic: "20世纪26年代，就有人预言可能存在由4个氧原子组成的氧分子(O4)，但一直没有得到证实。最近，意大利一所大学的科学家使用普通氧分子和带正电的氧离子制造出了这种新型氧分子， 并用质谱仪探测到了它的存在。下列叙述中正确的是",
                options: [
                    "A、O4是一种新型的化合物 ",
                    "B、一个O4分子中含有2个O2分子",
                    "C、O4和O2的性质完全相同 ",
                    "D、O4和O2混合形成的是混合物"
                ],
                answer: []
            }, {
                no: "3213212",
                topic: "美国铱星公司（忆破产）原计划发射77颗卫星，以实现全球卫星通讯，其要发射卫星的数目恰好与铱元素（Ir）的原子核外电子数目相等。下列关于铱元素的各种说法中正确的是",
                options: [
                    "A、分子是不断运动的",
                    "B、分子和原子都可以构成物质",
                    "C、分子式化学变化中的最小微粒",
                    "D、原子的种类和个数在化学变化的前后保持不变"
                ],
                answer: []
            }, {
                no: "3223213",
                topic: "20世纪26年代，就有人预言可能存在由4个氧原子组成的氧分子(O4)，但一直没有得到证实。最近，意大利一所大学的科学家使用普通氧分子和带正电的氧离子制造出了这种新型氧分子， 并用质谱仪探测到了它的存在。下列叙述中正确的是",
                options: [
                    "A、O4是一种新型的化合物 ",
                    "B、一个O4分子中含有2个O2分子",
                    "C、O4和O2的性质完全相同 ",
                    "D、O4和O2混合形成的是混合物"
                ],
                answer: []
            }, {
                no: "3213413",
                topic: "下列关于分子、原子的叙述错误的是",
                options: [
                    "A、分子是不断运动的",
                    "B、分子和原子都可以构成物质",
                    "C、分子式化学变化中的最小微粒",
                    "D、原子的种类和个数在化学变化的前后保持不变"
                ],
                answer: []
            }],
            showContent: false,  // 0:作业列表   1:作业报告  2:发布作业
            showInquiry: false
        };
    },
    render(h) {
        return (
            <div>
                <div id="student-homework-wrap" >
                    <div class="main">
                        {
                            !this.showContent && (
                                <div class="main-wrap">
                                    <div class="main-top">
                                        <div class="main-container">
                                            <p> 当前共计发布 6 套练习卷</p>
                                            <div class="clearfix search-wrap">
                                                <input type="text" placeholder="请输入关键字..." />
                                                <button class="btn btn-success btn-blue" type="button" >搜索</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="main-wrap">
                                        <div class="main-container">
                                            <div class="tab-index">
                                                <ul class="clearfix">
                                                    <li onClick={() => { this.showIndex = 0 }} class={this.showIndex === 0 ? "active" : ""}>已完成</li>
                                                    <li onClick={() => { this.showIndex = 1 }} class={this.showIndex === 1 ? "active" : ""}>未完成</li>
                                                    <li onClick={() => { this.showIndex = 2 }} class={this.showIndex === 2 ? "active" : ""}>已过期</li>
                                                </ul>
                                            </div>
                                            <div class="tab-content clearfix">
                                                {
                                                    // 已完成
                                                    this.showIndex === 0 && (
                                                        <div class="completed-list">
                                                            {this.completedList.map((ele, index) => {
                                                                return (
                                                                    <div class="list-item">
                                                                        <div class="item-name">{ele.name}</div>
                                                                        <div class="item-operator">
                                                                            <span class="btn-scan" onClick={() => { this.showContent = true }}><i class="glyphicon glyphicon-eye-open"></i> 查看</span>
                                                                            <span class="btn-start btn-disable"><i class="glyphicon glyphicon-edit"></i> 开始答题</span>
                                                                            <span class="btn-inquiry" onClick={() => { this.showInquiry = true }}><i class="glyphicon glyphicon-search"></i> 成绩查询</span>
                                                                        </div>
                                                                    </div>
                                                                );
                                                            })}
                                                        </div>
                                                    )}
                                                {
                                                    // 未完成
                                                    this.showIndex === 1 && (
                                                        <div class="uncompleted-list">
                                                            {this.uncompletedList.map((ele, index) => {
                                                                return (
                                                                    <div class="list-item">
                                                                        <div class="item-name">{ele.name}</div>
                                                                        <div class="item-operator">
                                                                            <span class="btn-scan  btn-disable"><i class="glyphicon glyphicon-eye-open" ></i> 查看</span>
                                                                            <span class="btn-start" onClick={() => { this.showContent = true }}><i class="glyphicon glyphicon-edit"></i> 开始答题</span>
                                                                            <span class="btn-inquiry  btn-disable"><i class="glyphicon glyphicon-search"></i> 成绩查询</span>
                                                                        </div>
                                                                    </div>
                                                                );
                                                            })}
                                                        </div>
                                                    )}
                                                {}
                                                {
                                                    // 已过期
                                                    this.showIndex === 2 && (
                                                        <div class="expired-list">
                                                            {this.expired.map((ele, index) => {
                                                                return (
                                                                    <div class="list-item">
                                                                        <div class="item-name">{ele.name}</div>
                                                                        <div class="item-operator">
                                                                            <span class="btn-scan" onClick={() => { this.showContent = true }}><i class="glyphicon glyphicon-eye-open" ></i> 查看</span>
                                                                            <span class="btn-start btn-disable"><i class="glyphicon glyphicon-edit"></i> 开始答题</span>
                                                                            <span class="btn-inquiry btn-disable"><i class="glyphicon glyphicon-search"></i> 成绩查询</span>
                                                                        </div>
                                                                    </div>
                                                                );
                                                            })}
                                                        </div>
                                                    )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }{
                            // 题列表
                            this.showContent && (
                                <div class="main-wrap question-list">
                                    <div class="main-top">
                                        <div class="main-container">
                                            <p> 化学作业201804031148
                                                <span class="pull-right">发布时间：2018-04-03 14:50:39</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="main-container">
                                        {
                                            this.exercise.map((ele, index) => {
                                                return (<div class="card-wrap">
                                                    <div class="card-content">
                                                        <div class="exercise-topic">{ele.topic}</div>
                                                        <div class="exercise-options">
                                                            <el-checkbox-group v-model={ele.answer} >
                                                                {
                                                                    ele.options.map((item, idx) => {
                                                                        return <p><el-checkbox label={item} disabled={this.showIndex === 0 || this.showIndex === 2} >{item}</el-checkbox></p>
                                                                    })
                                                                }
                                                            </el-checkbox-group>
                                                        </div>
                                                    </div>
                                                </div>
                                                )
                                            })
                                        }
                                        {this.showIndex === 1 && (
                                            <div class="card-wrap card-footer" >
                                                <button class="btn btn-success btn-blue" type="button" >提交作业</button>
                                                <span>已选三道题</span>
                                            </div>)
                                        }
                                    </div>

                                </div>
                            )
                        }
                    </div>
                </div >
                <el-dialog title="成绩查询" custom-class="inquiry-box" visible={this.showInquiry} {...{ on: { 'update:visible': (visible) => { this.showInquiry = visible } } }} width="400px">
                    <p>本次共答题2个,得分<span class="red">50</span>分!</p>
                    <p class="green"><span class="glyphicon glyphicon-ok-sign"></span> 正确: 1个</p>
                    <p class="red" ><span class="glyphicon glyphicon-remove-sign"></span> 错误: 1个</p>
                </el-dialog>
            </div>
        )
    },
    methods: {


    }
}
