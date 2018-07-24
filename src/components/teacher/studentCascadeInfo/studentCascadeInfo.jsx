import './studentCascadeInfo.less';

export default {
    name: 'studentCascadeInfoComponent',
    data() {
        return {
            cur: {
                school: 0,
                class: 0,
                student: Array,
                checkList: []
            }
        };
    },
    props: {
        dataInfo: Array,
        require: false
    },
    render(h) {
        return (
            <div id="student-cascade-wrap">
                {this.require ? <label class="require"></label> : ""}
                <div class="school-box">
                    <el-select v-model={this.cur.school} placeholder="请选择" onChange={(value, i) => { console.log(value, i) }}>
                        {
                            this.dataInfo.map((ele, idx) => {
                                return <el-option label={ele.school} value={idx} ></el-option>
                            })
                        }
                    </el-select>
                </div>
                <div class="class-box">
                    <el-select v-model={this.cur.class} placeholder="请选择">
                        {
                            this.dataInfo[this.cur.school].class.map((ele, idx) => {
                                return <el-option label={ele.name} value={idx} ></el-option>
                            })
                        }
                    </el-select>
                </div>
                <div class="student-box">
                    <el-popover
                        width="400"
                        trigger="click">
                        <el-checkbox-group v-model={this.cur.checkList}>
                            {this.dataInfo[this.cur.school].class[this.cur.class].student.map((ele, idx) => {
                                return <el-checkbox label={ele} style="margin:0 10px 10px"></el-checkbox>
                            })}
                        </el-checkbox-group>
                        <el-button slot="reference">已选 {this.cur.checkList.length}人</el-button>
                    </el-popover>
                </div>
            </div >
        )
    },
    methods: {

    }
}
