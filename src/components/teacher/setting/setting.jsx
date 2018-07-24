import './setting.less';

export default {
    name: 'settingComponent',
    data() {
        return {
            isShowBase: true,
            form: {
                email: '',
                tel: ''
            },
            userInfo: {
                name: "王思",
                img: require("../../../assets/images/user.jpg"),
                school: "北京市东城区实验中学",
                provincial: "",
                cities: "",
                counties: "",
                subject: ""
            },
            subject: [
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
        };
    },

    render(h) {
        return (
            <div id="teacher-center-setting-wrap">
                <div class="card-wrap">
                    <div class="card-title">个人设置</div>
                </div>
                <div class="card-wrap">
                    <div class="card-title">
                        <ul class="clearfix">
                            <li onClick={() => { this.isShowBase = true }} class={this.isShowBase ? "active" : ""}>基本信息</li>
                            <li onClick={() => { this.isShowBase = false }} class={!this.isShowBase ? "active" : ""}>账户安全</li>
                        </ul>
                    </div>
                    {this.isShowBase ?
                        <div class="card-content base-info">
                            <div class="user-info">
                                <div class="user-img">
                                    <img src={this.userInfo.img} alt="" />
                                    <p class="user-name">{this.userInfo.name}</p>
                                </div>
                            </div>
                            <el-form model={this.form}>
                                <el-form-item label="学校名称" >
                                    {this.userInfo.school}
                                </el-form-item>
                                <el-form-item label="重选学校" >
                                    <el-select v-model={this.provincial} placeholder="省份">
                                        {/* <el-option
                                            label="item.label"
                                            value="item.value">
                                        </el-option> */}
                                    </el-select>
                                    <el-select v-model={this.cities} placeholder="市/地区">
                                        {/* <el-option
                                            label="item.label"
                                            value="item.value">
                                        </el-option> */}
                                    </el-select>
                                    <el-select v-model={this.counties} placeholder="区/县">
                                        {/* <el-option
                                            label="item.label"
                                            value="item.value">
                                        </el-option> */}
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="科目" >
                                    <el-select v-model={this.userInfo.subject} placeholder="科目">
                                        {this.subject.map((ele, idx) => {
                                            return <el-option
                                                label={ele.label}
                                                value={ele.value}>
                                            </el-option>
                                        })}

                                    </el-select>
                                </el-form-item>
                                <el-form-item label="邮箱地址" >
                                    <input
                                        v-model={this.form.email}
                                        placeholder="邮箱地址"
                                        auto-complete="off" >
                                    </input>
                                </el-form-item>
                                <el-form-item label="手机号码" >
                                    <input
                                        v-model={this.form.tel}
                                        placeholder="11位手机号码"
                                        auto-complete="off" >
                                    </input>
                                </el-form-item>
                            </el-form>
                            <button class="btn btn-success btn-blue" type="button" onClick={this.publicHomework}>保存</button>
                            <button class="btn btn-default btn-gray" type="button" onClick={this.cancelPublicHomework}>取消</button>
                        </div>
                        :
                        <div class="card-content account-info">
                            <el-form model={this.form}>
                                <el-form-item label="旧 密 码" >
                                    <input
                                        v-model={this.form.oldPW}
                                        placeholder='请输入旧密码'
                                        auto-complete="off">
                                    </input>
                                </el-form-item>
                                <el-form-item label="新 密 码" >
                                    <input
                                        v-model={this.form.newPW}
                                        placeholder='请输入6-20位的新密码'
                                        auto-complete="off">
                                    </input>
                                </el-form-item>
                                <el-form-item label="确认密码" >
                                    <input
                                        v-model={this.form.confirmPW}
                                        placeholder="请再次输入6-20位的新密码"
                                        auto-complete="off" >
                                    </input>
                                </el-form-item>
                            </el-form>
                            <button class="btn btn-success btn-blue" type="button" onClick={this.publicHomework}>保存</button>
                            <button class="btn btn-default btn-gray" type="button" onClick={this.cancelPublicHomework}>取消</button>
                        </div>
                    }
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
