import './wrong.less';

export default {
    name: 'wrongStudentComponent',
    data() {
        return {
            subject: {
                curSelect: '',
                list: [
                    {
                        label: '语文',
                        value: "语文"
                    },
                    {
                        label: '数学',
                        value: "数学"
                    }, {
                        label: '英语',
                        value: "英语"
                    },
                    {
                        label: '万恶高数',
                        value: "万恶高数"
                    }
                ]
            },
            exercise: [{
                no: "3213213",
                topic: "下列关于分子、原子的叙述错误的是",
                options: [
                    "A、分子是不断运动的",
                    "B、分子和原子都可以构成物质",
                    "C、分子式化学变化中的最小微粒",
                    "D、原子的种类和个数在化学变化的前后保持不变"
                ],
                answer:[]
            }, {
                no: "3213243",
                topic: "20世纪26年代，就有人预言可能存在由4个氧原子组成的氧分子(O4)，但一直没有得到证实。最近，意大利一所大学的科学家使用普通氧分子和带正电的氧离子制造出了这种新型氧分子， 并用质谱仪探测到了它的存在。下列叙述中正确的是",
                options: [
                    "A、O4是一种新型的化合物 ",
                    "B、一个O4分子中含有2个O2分子",
                    "C、O4和O2的性质完全相同 ",
                    "D、O4和O2混合形成的是混合物"
                ],
                answer:[]
            }, {
                no: "3213212",
                topic: "美国铱星公司（忆破产）原计划发射77颗卫星，以实现全球卫星通讯，其要发射卫星的数目恰好与铱元素（Ir）的原子核外电子数目相等。下列关于铱元素的各种说法中正确的是",
                options: [
                    "A、分子是不断运动的",
                    "B、分子和原子都可以构成物质",
                    "C、分子式化学变化中的最小微粒",
                    "D、原子的种类和个数在化学变化的前后保持不变"
                ],
                answer:[]
            }, {
                no: "3223213",
                topic: "20世纪26年代，就有人预言可能存在由4个氧原子组成的氧分子(O4)，但一直没有得到证实。最近，意大利一所大学的科学家使用普通氧分子和带正电的氧离子制造出了这种新型氧分子， 并用质谱仪探测到了它的存在。下列叙述中正确的是",
                options: [
                    "A、O4是一种新型的化合物 ",
                    "B、一个O4分子中含有2个O2分子",
                    "C、O4和O2的性质完全相同 ",
                    "D、O4和O2混合形成的是混合物"
                ],
                answer:[]
            }, {
                no: "3213413",
                topic: "下列关于分子、原子的叙述错误的是",
                options: [
                    "A、分子是不断运动的",
                    "B、分子和原子都可以构成物质",
                    "C、分子式化学变化中的最小微粒",
                    "D、原子的种类和个数在化学变化的前后保持不变"
                ],
                answer:[]
            }],
            checked: {
                isIndeterminate: false,
                checkAll: false
            },
            showContent: false
        };
    },
    render(h) {
        return (
            <div id="student-wrong-wrap">
                <div class="main">
                    {!this.showContent && (
                        <div class="main-wrap">
                            <div class="main-top">
                                <div class="main-container">
                                    <div class="clearfix select-wrap">
                                        <div class="select-box" style="width:120px;">
                                            <el-select v-model={this.subject.curSelect} filterable placeholder="选择科目" >
                                                {this.subject.list.map((ele) => {
                                                    return <el-option label={ele.label} value={ele.value} ></el-option>
                                                })}
                                            </el-select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="main-container">
                                {/* <el-checkbox-group v-model="checkedCities" onChange="handleCheckedCitiesChange"> */}
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
                                            </div>
                                            <div class="card-footer clearfix">
                                                <el-checkbox label="加入重做" >加入重做</el-checkbox>
                                                <div class="operator-box">
                                                    <span>从错题本移出</span>
                                                </div>
                                                <div class="exercise-no">题库编号:{ele.no}</div>
                                            </div>
                                        </div>
                                        )
                                    })}
                                {/* </el-checkbox-group> */}
                                <div class="card-wrap">
                                    <div class="card-content">
                                        <el-checkbox indeterminate={this.checked.isIndeterminate} v-model={this.checked.checkAll} >全选</el-checkbox>
                                        <button class="btn btn-success btn-blue" type="button" onClick={() => { this.showContent = true }}><span class="glyphicon glyphicon-download-alt"></span> 开始重做</button>
                                        <button class="btn btn-success btn-remove" >从错题本移出</button>
                                        <span> 已选3道</span>
                                        <el-pagination
                                            background
                                            layout="prev, pager, next"
                                            total={this.exercise.length}>
                                        </el-pagination>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {
                        // 题列表
                        this.showContent && (
                            <div class="main-wrap question-list">
                                <div class="main-top">
                                    <div class="main-container">
                                        <p> 错题重做
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
                                                                    return <p><el-checkbox label={item} >{item}</el-checkbox></p>
                                                                })
                                                            }
                                                        </el-checkbox-group>
                                                    </div>
                                                </div>
                                            </div>
                                            )
                                        })
                                    }
                                    <div class="card-wrap card-footer clearfix" >
                                        <button class="btn btn-success btn-blue" type="button" >提交作业</button>
                                        <span>已选三道题</span>
                                    </div>
                                </div>
                            </div>
                        )}
                </div>
            </div>
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
