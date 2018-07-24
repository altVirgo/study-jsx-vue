import './inquiry.less';

// import reportTeacherComponent from "../report/report.jsx";
// import publicHomeworkComponent from "../publicHomework/publicHomework.jsx"

export default {
    name: 'inquiryStudentComponent',
    // components: { report: reportTeacherComponent, publicHomework: publicHomeworkComponent },
    data() {
        return {
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
            ]
        };
    },
    render(h) {
        return (
            <div id="student-inquiry-wrap" >
                <div class="main">
                    <div class="main-wrap">
                        <div class="main-top">
                            <div class="main-container">
                                <p> 您已有3道私有作业题， 1134 道公共</p>
                                <div class="clearfix search-wrap">
                                    <input type="text" placeholder="请输入关键字..." />
                                    <button class="btn btn-success btn-blue" type="button" >搜索</button>
                                </div>
                            </div>
                        </div>
                        <div class="main-container">
                            {this.publicList.map((ele, index) => {
                                return (
                                    <div class="list-item">
                                        <div class="item-name">{ele.name}</div>
                                        <div class="item-operator">
                                            <span>得分：74分</span>
                                            <span>正确：22个</span>
                                            <span>错误：8个</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div >
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
