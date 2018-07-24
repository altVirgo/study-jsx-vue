import './exercise.less';

export default {
    name: 'exerciseTeacherComponent',
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
            answer: {
                cur: [],
                list: [{
                    label: "A",
                    value: "A"
                }, {
                    label: "B",
                    value: "B"
                }, {
                    label: "C",
                    value: "C"
                }, {
                    label: "D",
                    value: "D"
                }]
            }
        };
    },

    render(h) {
        return (
            <div id="teacher-exercise-wrap">
                <div class="main">
                    <div class="main-top">
                        <div class="main-container">
                            <p> 您已有3道私有作业题， 1134 道公共</p>
                            <div class="clearfix select-wrap">
                                <div class="select-box">
                                    <el-select v-model={this.library.curSelect} filterable placeholder="题库" >
                                        {this.library.list.map((ele) => {
                                            return <el-option label={ele.label} value={ele.value} ></el-option>
                                        })}
                                    </el-select>
                                </div>
                                <div class="select-box" style="width:80px;">
                                    <el-select v-model={this.class.curSelect} filterable placeholder="年级" >
                                        {this.class.list.map((ele) => {
                                            return <el-option label={ele.label} value={ele.value} ></el-option>
                                        })}
                                    </el-select>
                                </div>
                                <div class="select-box" style="width:100px;">
                                    <el-select v-model={this.KnowledgePoint1.curSelect} filterable placeholder="知识点一" >
                                        {this.KnowledgePoint1.list.map((ele) => {
                                            return <el-option label={ele.label} value={ele.value} ></el-option>
                                        })}
                                    </el-select>
                                </div>
                                <div class="select-box" style="width:100px;">
                                    <el-select v-model={this.KnowledgePoint2.curSelect} filterable placeholder="知识点二" >
                                        {this.KnowledgePoint2.list.map((ele) => {
                                            return <el-option label={ele.label} value={ele.value} ></el-option>
                                        })}
                                    </el-select>
                                </div>
                                <div class="select-box">
                                    <el-select v-model={this.type.curSelect} filterable placeholder="习题类型" >
                                        {this.library.list.map((ele) => {
                                            return <el-option label={ele.label} value={ele.value} ></el-option>
                                        })}
                                    </el-select>
                                </div>
                                <div class="select-box" style="width:80px;">
                                    <el-select v-model={this.level.curSelect} filterable placeholder="难度">
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
                                <div class="add-exercise" onClick={this.addExercise}>+</div>
                            </div>
                        </div>
                    </div>
                    <div class="main-wrap">
                        <div class="main-container">
                            <div class="card-wrap">
                                <div class="card-title">练习题题目</div>
                                <div class="card-content">
                                    <script id="ueditor-wrap" name="content" type="text/plain" style="width:1160px; height:500px;"></script>
                                    <div class="answer-box">
                                        <p>请选择正确答案:</p>
                                        <p>
                                            <el-checkbox-group v-model={this.answer.cur} >
                                                {this.answer.list.map((ele) => {
                                                    return <el-checkbox label={ele.label}>{ele.value}</el-checkbox>
                                                })}
                                            </el-checkbox-group>
                                        </p>
                                        <button class="btn btn-success btn-blue" type="button" onClick={this.saveExercise}>创建题目</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        )
    },
    created() {
        // let ue = UE.getEditor('ueditor-wrap');
    },
    methods: {
        saveExercise() {

        },
        addExercise(){

        }
    }

}
