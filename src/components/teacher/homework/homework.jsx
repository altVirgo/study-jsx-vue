import './homework.less';

import reportTeacherComponent from "../report/report.jsx";
import publicHomeworkComponent from "../publicHomework/publicHomework.jsx"

export default {
    name: 'homeworkTeacherComponent',
    components: { report: reportTeacherComponent, publicHomework: publicHomeworkComponent },
    data() {
        return {
            showPublic: true,
            publicList: [
                {
                    no: 11,
                    name: '2018上学期五月第一周模拟'
                },
                {
                    no: 11,
                    name: '2018上学期五月第一周模拟'
                },
                {
                    no: 11,
                    name: '2018上学期五月第一周模拟'
                },
                {
                    no: 11,
                    name: '2018上学期五月第一周模拟'
                },
                {
                    no: 11,
                    name: '2018上学期五月第一周模拟'
                },
                {
                    no: 11,
                    name: '2018上学期五月第一周模拟'
                },
                {
                    no: 11,
                    name: '2018上学期五月第一周模拟'
                }
            ],
            unpublicList: [{
                no: 11,
                name: '2018上学期五月第二周模拟'
            },
            {
                no: 11,
                name: '2018上学期五月第二周模拟'
            },
            {
                no: 11,
                name: '2018上学期五月第二周模拟'
            },
            {
                no: 11,
                name: '2018上学期五月第二周模拟'
            },
            {
                no: 11,
                name: '2018上学期五月第二周模拟'
            },
            {
                no: 11,
                name: '2018上学期五月第二周模拟'
            },
            {
                no: 11,
                name: '2018上学期五月第二周模拟'
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
                answer: ['A', 'B']
            }, {
                no: "3213243",
                topic: "20世纪26年代，就有人预言可能存在由4个氧原子组成的氧分子(O4)，但一直没有得到证实。最近，意大利一所大学的科学家使用普通氧分子和带正电的氧离子制造出了这种新型氧分子， 并用质谱仪探测到了它的存在。下列叙述中正确的是",
                options: [
                    "A、O4是一种新型的化合物 ",
                    "B、一个O4分子中含有2个O2分子",
                    "C、O4和O2的性质完全相同 ",
                    "D、O4和O2混合形成的是混合物"
                ],
                answer: ['A']
            }, {
                no: "3213212",
                topic: "美国铱星公司（忆破产）原计划发射77颗卫星，以实现全球卫星通讯，其要发射卫星的数目恰好与铱元素（Ir）的原子核外电子数目相等。下列关于铱元素的各种说法中正确的是",
                options: [
                    "A、分子是不断运动的",
                    "B、分子和原子都可以构成物质",
                    "C、分子式化学变化中的最小微粒",
                    "D、原子的种类和个数在化学变化的前后保持不变"
                ],
                answer: ['B']
            }, {
                no: "3223213",
                topic: "20世纪26年代，就有人预言可能存在由4个氧原子组成的氧分子(O4)，但一直没有得到证实。最近，意大利一所大学的科学家使用普通氧分子和带正电的氧离子制造出了这种新型氧分子， 并用质谱仪探测到了它的存在。下列叙述中正确的是",
                options: [
                    "A、O4是一种新型的化合物 ",
                    "B、一个O4分子中含有2个O2分子",
                    "C、O4和O2的性质完全相同 ",
                    "D、O4和O2混合形成的是混合物"
                ],
                answer: ['A']
            }, {
                no: "3213413",
                topic: "下列关于分子、原子的叙述错误的是",
                options: [
                    "A、分子是不断运动的",
                    "B、分子和原子都可以构成物质",
                    "C、分子式化学变化中的最小微粒",
                    "D、原子的种类和个数在化学变化的前后保持不变"
                ],
                answer: ['D']
            }],
            showContent: 0  // 0:作业列表   1:作业内容    2:作业报告  3:发布作业
        };
    },
    render(h) {
        return (
            <div>
                {

                    this.showContent === 0 && (
                        <div id="teacher-homework-wrap" >
                            <div class="main">
                                <div class="main-top">
                                    <div class="main-container">
                                        <p> 您已有3道私有作业题， 1134 道公共</p>
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
                                                <li onClick={() => { this.showPublic = true }} class={this.showPublic ? "active" : ""}>已发布</li>
                                                <li onClick={() => { this.showPublic = false }} class={this.showPublic ? "" : "active"}>未发布</li>
                                            </ul>
                                        </div>
                                        <div class="tab-content clearfix">
                                            {this.showPublic ? (
                                                <div class="public-list">
                                                    {this.publicList.map((ele, index) => {
                                                        return (
                                                            <div class="list-item">
                                                                <div class="item-name">{ele.name}</div>
                                                                <div class="item-operator">
                                                                    <span onClick={() => { this.showContent = 1 }}><i class="glyphicon glyphicon-eye-open"></i> 查看</span>
                                                                    <span class="disabled"><i class="glyphicon glyphicon-send"></i> 发布</span>
                                                                    <span onClick={() => { this.showContent = 2 }}><i class="glyphicon glyphicon-signal"></i> 作业报告</span>
                                                                    <span class="disabled"><i class="glyphicon glyphicon-trash"></i> 删除</span>
                                                                </div>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            ) : (
                                                    <div class="unpublic-list">
                                                        {this.unpublicList.map((ele, index) => {
                                                            return (
                                                                <div class="list-item">
                                                                    <div class="item-name">{ele.name}</div>
                                                                    <div class="item-operator">
                                                                        <span onClick={() => { this.showContent = 1 }}><i class="glyphicon glyphicon-eye-open" onClick={() => { this.$router.go("/teacher/library") }}></i> 查看</span>
                                                                        <span onClick={() => { this.showContent = 3 }}><i class="glyphicon glyphicon-send"></i> 发布</span>
                                                                        <span class="disabled"><i class="glyphicon glyphicon-signal"></i> 作业报告</span>
                                                                        <span onClick={() => { this.deleteHomework(index) }}><i class="glyphicon glyphicon-trash"></i> 删除</span>
                                                                    </div>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                )}
                                        </div>
                                    </div>
                                </div>
                            </div >
                        </div>
                    )
                }{
                    this.showContent === 1 && (
                        <div id="teacher-homework-scan-wrap" >
                            <div class="main">
                                <div class="main-wrap">
                                    <div class="main-container">
                                        {
                                            this.exercise.map((ele, index) => {
                                                return (<div class="card-wrap">
                                                    <div class="card-content">
                                                        <div class="exercise-topic">{ele.topic}</div>
                                                        <div class="exercise-options">
                                                            {
                                                                ele.options.map((ele, index) => {
                                                                    return <p>{ele}</p>
                                                                })
                                                            }
                                                        </div>
                                                        <div class="exercise-answer">
                                                            正确答案: {ele.answer.toString()}</div>
                                                    </div>
                                                    <div class="card-footer clearfix">
                                                        {/* <el-checkbox label="加入候选" >加入候选</el-checkbox> */}
                                                        <div class="operator-box">
                                                            {/* <span>编辑习题</span> */}
                                                            <span>删除习题</span>
                                                            {/* <span>分享习题</span> */}
                                                        </div>
                                                        <div class="exercise-no">题库编号:{ele.no}</div>
                                                    </div>
                                                </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>)

                }{
                    this.showContent === 2 && (<report />)

                }
                {
                    this.showContent === 3 && (<publicHomework getResult={(value) => { this.getPublicResult(value) }} />)
                }
            </div>
        )
    },
    methods: {
        deleteHomework(index) {
            this.$confirm('此操作将永久删除该作业, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.showPublic ? this.publicList.splice(index, 1) : this.unpublicList.splice(index, 1);
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
            });
        },
        getPublicResult(result) {
            if (result) {
                this.$message({
                    type: 'success',
                    message: '发布成功'
                });
            } else {
                this.$message({
                    type: 'warning',
                    message: '未成功发布'
                });
            }
            this.showContent = 0;
        }


    }
}
