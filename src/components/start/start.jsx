import './start.less';

export default {
    name: 'startComponent',
    data() {
        return {
            showLoginForm: false,
            showRegionForm: false,
            form: {
                name: '',
                password: '',
                verify: ''
            },
            region: {
                type: 0,// 0 teacher, 1 student,
                name: '',
                schoolName: '',
                accounts: '',
                password: '',
                confirmPassword: '',
                email: '',
                tel: '',
            }
        };
    },
    render(h) {
        return (
            <div id="start-wrap" class="full-screen">
                <header>
                    <div class="logo"><img src={require("../../assets/images/logo.png")} alt="快学网" /></div>
                </header>
                {/* {this.showLoginForm.toString()},{this.showRegionForm.toString()},{this.form.name},{this.form.password} */}
                <div class="operator-box">
                    <div class="solo">让学习变得更简单</div>
                    <button class="btn btn-default btn-gray" type="button" onClick={this.startLoginFunc}>登陆</button>
                    <button class="btn btn-success btn-blue" type="button" onClick={() => { this.showRegionForm = true }}>注册</button>
                    <a href="" class="gray">下载APP</a>
                </div>
                {
                    // 用户登陆
                    (
                        this.showLoginForm &&
                        (
                            <el-dialog title="登陆" custom-class="login-box" visible={this.showLoginForm} {...{ on: { 'update:visible': (visible) => { this.showLoginForm = visible } } }} width="400px"
                                before-close={() => { this.showLoginForm = false; this.showRegionForm = false }}>
                                <el-form model={this.form}>
                                    <el-form-item label="用户名" >
                                        <input
                                            v-model={this.form.name}
                                            placeholder='请输入手机号'
                                            auto-complete="off">
                                        </input>
                                    </el-form-item>
                                    <el-form-item label="密&nbsp;&nbsp;&nbsp;码" >
                                        <input type="password"
                                            v-model={this.form.password}
                                            placeholder="请输入登录密码"
                                            auto-complete="off" >
                                        </input>
                                    </el-form-item>
                                    <el-form-item label="验证码">                                    
                                        <input
                                            v-model={this.form.verify}
                                            placeholder='验证码'
                                            auto-complete="off">
                                        </input>
                                        <a href="javascript:;" class="pull-right">发送验证码</a>
                                    </el-form-item>
                                    <div class="pull-left remember-me">记住我<el-checkbox ></el-checkbox></div>
                                    <div class="pull-right forget-pw">
                                        <span>忘记密码?</span>
                                        <a href="">找回密码</a>
                                    </div>
                                </el-form>
                                <button class="btn btn-success btn-blue" type="button" onClick={this.loginFunc}>确 定</button>
                                <p>还没有账号? <a href="javascript:;" onClick={() => { this.showRegionForm = true; this.showLoginForm = false }}>点击注册</a></p>
                            </el-dialog>
                        )
                    ) ||
                    // 用户注册
                    (
                        this.showRegionForm &&
                        (
                            <el-dialog title="注册" custom-class="region-box" visible={this.showRegionForm} {...{ on: { 'update:visible': (visible) => { this.showRegionForm = visible } } }}width="850px" before-close={() => { this.showLoginForm = false; this.showRegionForm = false }}>
                                <el-form model={this.form}>
                                    <div class="flex">
                                        <div class="flex-left">
                                            <div class={this.region.type === 0 ? "active teacher" : "teacher"} onClick={() => { this.region.type = 0 }}>
                                                <span>
                                                </span>
                                                <div> 我是老师</div>
                                            </div>
                                            <div class={this.region.type === 1 ? "student active" : "student"} onClick={() => { this.region.type = 1 }}>
                                                <span>
                                                </span>
                                                <div> 我是学生</div>
                                            </div>
                                        </div>
                                        <div class="flex-right">
                                            <el-form-item label="姓名" >
                                                <input v-model={this.form.name} auto-complete="off" placeholder="请输入手机号"></input>
                                            </el-form-item>
                                            <el-form-item label="学校名称" >
                                                <select name="" id="">
                                                    <option value="X大学">X大学</option>
                                                    <option value="XX大学">XX大学</option>
                                                    <option value="XXX大学">XXX大学</option>
                                                    <option value="XXXX大学">XXXX大学</option>
                                                </select>
                                            </el-form-item>
                                            <el-form-item label="科目" >
                                                <select name="" id="">
                                                    <option value="英语">英语</option>
                                                    <option value="数学">数学</option>
                                                    <option value="语文">语文</option>
                                                    <option value="万恶高数">万恶高数</option>
                                                </select>
                                            </el-form-item>
                                            <el-form-item label="设置密码" >
                                                <input v-model={this.form.password} auto-complete="off" placeholder="请输入6—20位密码"></input>
                                            </el-form-item>
                                            <el-form-item label="确认密码" >
                                                <input v-model={this.form.password} auto-complete="off" placeholder="请输入6—20位密码"></input>
                                            </el-form-item>
                                            <el-form-item label="邮箱地址" >
                                                <input v-model={this.form.password} auto-complete="off" placeholder="请输入有效邮箱，用于登陆和找回密码"></input>
                                            </el-form-item>
                                            <el-form-item label="手机号码" >
                                                <input v-model={this.form.password} auto-complete="off" placeholder="绑定手机号，用于登陆和找回密码"></input>
                                            </el-form-item>
                                            <button class="btn btn-success btn-blue" type="button" onClick={this.regionFunc}>注册</button>
                                            <span>已经拥有账号? <a href="javascript:;" onClick={() => { this.showRLoginForm = true; this.showRegionForm = false }}>点击登陆</a></span>
                                        </div>
                                    </div>
                                </el-form>

                            </el-dialog>
                        )
                    )
                }
            </div>
        )
    },
    methods: {
        startLoginFunc() {
            this.showLoginForm = true;
        },
        loginFunc() {
            this.showRegionForm = false;
            this.showLoginForm = false;
            // 到教师端
            // this.$router.push({
            //     path: '/teacher/index'
            // });

            // 到学生端
            this.$router.push({
                path: '/student/index'
            });
        },
        regionFunc() {
            this.showLoginForm = false;
            this.showRegionForm = false;
        }
    }
}
