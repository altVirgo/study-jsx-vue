import './library.less';

export default {
    name: 'libraryTeacherComponent',
    data() {
        return {
            library: {
                curSelect: '',
                list: [
                    {
                        label: "题库一",
                        value: "题库一"
                    }, {
                        label: "题库二",
                        value: "题库二"
                    }, {
                        label: "题库三",
                        value: "题库三"
                    }, {
                        label: "题库四",
                        value: "题库五"
                    }, {
                        label: "题库六",
                        value: "题库六"
                    }, {
                        label: "题库七",
                        value: "题库七"
                    }
                ]
            },
            class: {
                curSelect: '',
                list: [
                    {
                        label: "一年级",
                        value: "一年级"
                    }, {
                        label: "二年级",
                        value: "二年级"
                    }, {
                        label: "三年级",
                        value: "三年级"
                    }, {
                        label: "四年级",
                        value: "四年级"
                    }, {
                        label: "五年级",
                        value: "五年级"
                    }, {
                        label: "六年级",
                        value: "六年级"
                    }
                ]
            },
            KnowledgePoint1: {
                curSelect: '',
                list: [
                    {
                        label: "知识点一1",
                        value: "知识点一1"
                    }, {
                        label: "知识点一2",
                        value: "知识点一2"
                    }, {
                        label: "知识点一3",
                        value: "知识点一3"
                    }, {
                        label: "知识点一4",
                        value: "知识点一4"
                    }, {
                        label: "知识点一5",
                        value: "知识点一5"
                    }, {
                        label: "知识点一6",
                        value: "知识点一6"
                    }
                ]
            },
            KnowledgePoint2: {
                curSelect: '',
                list: [
                    {
                        label: "知识点二1",
                        value: "知识点二1"
                    }, {
                        label: "知识点二2",
                        value: "知识点二2"
                    }, {
                        label: "知识点二3",
                        value: "知识点二3"
                    }, {
                        label: "知识点二4",
                        value: "知识点二4"
                    }, {
                        label: "知识点二5",
                        value: "知识点二5"
                    }, {
                        label: "知识点二6",
                        value: "知识点二6"
                    }
                ]
            },
            type: {
                curSelect: '',
                list: [
                    {
                        label: "题库一",
                        value: "题库一"
                    }, {
                        label: "题库二",
                        value: "题库二"
                    }, {
                        label: "题库三",
                        value: "题库三"
                    }, {
                        label: "题库四",
                        value: "题库五"
                    }, {
                        label: "题库六",
                        value: "题库六"
                    }, {
                        label: "题库七",
                        value: "题库七"
                    }
                ]
            },
            level: {
                curSelect: '',
                list: [
                    {
                        label: "非常难",
                        value: "非常难"
                    }, {
                        label: "较难",
                        value: "较难"
                    }, {
                        label: "一般",
                        value: "一般"
                    }, {
                        label: "简单",
                        value: "简单"
                    }, {
                        label: "非常简单",
                        value: "非常简单"
                    }
                ]
            },
            customLabel: {
                curSelect: '',
                list: [
                    {
                        label: "自定义标签一",
                        value: "自定义标签一"
                    }, {
                        label: "自定义标签二",
                        value: "自定义标签二"
                    }, {
                        label: "自定义标签三",
                        value: "自定义标签三"
                    }, {
                        label: "自定义标签四",
                        value: "自定义标签四"
                    }, {
                        label: "自定义标签五",
                        value: "自定义标签五"
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
            checked: {
                isIndeterminate: false,
                checkAll: false
            }

        };
    },
    render(h) {
        return (
            <div id="teacher-library-wrap">
                <div class="main">
                    <div class="main-top">
                        <div class="main-container">
                            <p> 您已有3道私有作业题， 1134 道公共</p>
                            <div class="clearfix search-wrap">
                                <input type="text" placeholder="请输入关键字..." />
                                <button class="btn btn-success btn-blue" type="button" >搜索</button>
                            </div>
                            <div class="clearfix select-wrap">
                                <div class="select-box" style="width:120px;">
                                    <el-select v-model={this.library.curSelect} filterable placeholder="题库" >
                                        {this.library.list.map((ele) => {
                                            return <el-option label={ele.label} value={ele.value} ></el-option>
                                        })}
                                    </el-select>
                                </div>
                                <div class="select-box" style="width:100px;">
                                    <el-select v-model={this.class.curSelect} filterable placeholder="年级" >
                                        {this.class.list.map((ele) => {
                                            return <el-option label={ele.label} value={ele.value} ></el-option>
                                        })}
                                    </el-select>
                                </div>
                                <div class="select-box" style="width:120px;">
                                    <el-select v-model={this.KnowledgePoint1.curSelect} filterable placeholder="知识点一" >
                                        {this.KnowledgePoint1.list.map((ele) => {
                                            return <el-option label={ele.label} value={ele.value} ></el-option>
                                        })}
                                    </el-select>
                                </div>
                                <div class="select-box" style="width:120px;">
                                    <el-select v-model={this.KnowledgePoint2.curSelect} filterable placeholder="知识点二" >
                                        {this.KnowledgePoint2.list.map((ele) => {
                                            return <el-option label={ele.label} value={ele.value} ></el-option>
                                        })}
                                    </el-select>
                                </div>
                                <div class="select-box" style="width:100px;">
                                    <el-select v-model={this.type.curSelect} filterable placeholder="习题类型" >
                                        {this.library.list.map((ele) => {
                                            return <el-option label={ele.label} value={ele.value} ></el-option>
                                        })}
                                    </el-select>
                                </div>
                                <div class="select-box" style="width:100px;">
                                    <el-select v-model={this.level.curSelect} filterable placeholder="难度" >
                                        {this.level.list.map((ele) => {
                                            return <el-option label={ele.label} value={ele.value} ></el-option>
                                        })}
                                    </el-select>
                                </div>
                                <div class="select-box custom-select-box" style="width:140px;">
                                    <el-select v-model={this.customLabel.curSelect} filterable placeholder="自定义标签" >
                                        {this.customLabel.list.map((ele) => {
                                            return <el-option label={ele.label} value={ele.value} ></el-option>
                                        })}
                                    </el-select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="main-wrap">
                        <div class="main-container">
                            <p class="total-info">共计筛选出3道习题</p>
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
                                            <div class="exercise-answer">
                                                正确答案: {ele.answer.toString()}</div>
                                        </div>
                                        <div class="card-footer clearfix">
                                            <el-checkbox label="加入候选" >加入候选</el-checkbox>
                                            <div class="operator-box">
                                                <span onClick={() => { this.$router.push({ path: "/teacher/exercise", name: "exercise" }) }}>编辑习题</span>
                                                <span onClick={() => { this.exercise.splice(index, 1) }}>删除习题</span>
                                                <span>分享习题</span>
                                            </div>
                                            <div class="exercise-no">题库编号:{ele.no}</div>
                                        </div>
                                    </div>
                                    )
                                })
                            }
                            {/* </el-checkbox-group> */}
                            <div class="card-wrap">
                                <div class="card-content">
                                    <el-checkbox indeterminate={this.checked.isIndeterminate} v-model={this.checked.checkAll}>全选</el-checkbox>
                                    <button class="btn btn-success btn-blue" type="button" ><span class="glyphicon glyphicon-download-alt"></span> 生成作业</button>
                                    <span> 已选3道</span>
                                    <el-pagination
                                        background
                                        layout="prev, pager, next"
                                        total={this.exercise.length}>
                                    </el-pagination>
                                </div>
                            </div>
                        </div>
                    </div >
                </div >
            </div >
        )
    },
    methods: {
        saveExercise() {

        },
        addExercise() {

        }
    }
}
