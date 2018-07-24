import './class.less';

export default {
    name: 'classTeacherComponent',
    data() {
        return {
        };
    },
    render(h) {
        return (
            <div id="teacher-class-wrap">
                <div class="main">
                    <div class="main-top">
                        <div class="main-container">
                            <p> 您已有3道私有作业题， 1134 道公共</p>
                            <div class="clearfix select-wrap">
                                <div class="select-box">
                                    <el-select v-model={this.library.curSelect} filterable placeholder="题库" onChange={(val) => { this.library.curSelect = val }}>
                                        {this.library.list.map((ele) => {
                                            return <el-option label={ele.label} value={ele.value} ></el-option>
                                        })}
                                    </el-select>
                                </div>
                                <div class="select-box" style="width:80px;">
                                    <el-select v-model={this.class.curSelect} filterable placeholder="年级" onChange={(val) => { this.class.curSelect = val }}>
                                        {this.class.list.map((ele) => {
                                            return <el-option label={ele.label} value={ele.value} ></el-option>
                                        })}
                                    </el-select>
                                </div>
                                <div class="select-box" style="width:100px;">
                                    <el-select v-model={this.KnowledgePoint1.curSelect} filterable placeholder="知识点一" onChange={(val) => { this.KnowledgePoint1.curSelect = val }}>
                                        {this.KnowledgePoint1.list.map((ele) => {
                                            return <el-option label={ele.label} value={ele.value} ></el-option>
                                        })}
                                    </el-select>
                                </div>
                                <div class="select-box" style="width:100px;">
                                    <el-select v-model={this.KnowledgePoint2.curSelect} filterable placeholder="知识点二" onChange={(val) => { this.KnowledgePoint2.curSelect = val }}>
                                        {this.KnowledgePoint2.list.map((ele) => {
                                            return <el-option label={ele.label} value={ele.value} ></el-option>
                                        })}
                                    </el-select>
                                </div>
                                <div class="select-box">
                                    <el-select v-model={this.type.curSelect} filterable placeholder="习题类型" onChange={(val) => { this.type.curSelect = val }}>
                                        {this.library.list.map((ele) => {
                                            return <el-option label={ele.label} value={ele.value} ></el-option>
                                        })}
                                    </el-select>
                                </div>
                                <div class="select-box" style="width:80px;">
                                    <el-select v-model={this.level.curSelect} filterable placeholder="难度" onChange={(val) => { this.level.curSelect = val }}>
                                        {this.level.list.map((ele) => {
                                            return <el-option label={ele.label} value={ele.value} ></el-option>
                                        })}
                                    </el-select>
                                </div>
                                <div class="select-box custom-select-box" style="width:140px;">
                                    <el-select v-model={this.customLabel.curSelect} filterable placeholder="自定义标签" onChange={(val) => { this.customLabel.curSelect = val }}>
                                        {this.customLabel.list.map((ele) => {
                                            return <el-option label={ele.label} value={ele.value} ></el-option>
                                        })}
                                    </el-select>
                                </div>
                                <div class="add-exercise" onClick={this.addExercise}>+</div>
                            </div>
                        </div>
                    </div>
                    班级管理
                </div >
            </div >
        )
    },
    methods: {

    }
}
