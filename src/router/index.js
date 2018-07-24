import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'

import startComponent from '@/components/start/start.jsx'
import regionComponent from '@/components/region/region.jsx'
import loginComponent from '@/components/login/login.jsx'

import headerTeacherComponent from '@/components/teacher/header/header.jsx'
import indexTeacherComponent from '@/components/teacher/index/index.jsx'
import exerciseTeacherComponent from '@/components/teacher/exercise/exercise.jsx'
import libraryTeacherComponent from '@/components/teacher/library/library.jsx'
import homeworkTeacherComponent from '@/components/teacher/homework/homework.jsx'
import classTeacherComponent from '@/components/teacher/class/class.jsx'
import personalCenterComponent from '@/components/teacher/personalCenter/personalCenter.jsx'
import publicNoticeComponent from '@/components/teacher/publicNotice/publicNotice.jsx'
import settingComponent from '@/components/teacher/setting/setting.jsx'

import headerStudentComponent from '@/components/student/header/header.jsx'
import indexStudentComponent from '@/components/student/index/index.jsx'
import homeworkStudentComponent from '@/components/student/homework/homework.jsx'
import wrongStudentComponent from '@/components/student/wrong/wrong.jsx'
import inquiryStudentComponent from '@/components/student/inquiry/inquiry.jsx'
import personalCenterStudentComponent from '@/components/student/personalCenter/personalCenter.jsx'
import noticeStudentComponent from '@/components/student/notice/notice.jsx'
import settingStudentComponent from '@/components/student/setting/setting.jsx'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  }, {
    path: '/start',
    name: 'start',
    component: startComponent
  }, {
    path: '/region',
    name: 'region',
    component: regionComponent
  }, {
    path: '/login',
    name: 'login',
    component: loginComponent
  }, {
    path: '/teacher',
    name: 'teacher',
    component: headerTeacherComponent,
    children: [
      {
        path: '/',
        name: 'index',
        redirect: './index'
      },
      {
        path: '/teacher/index',
        name: 'index',
        component: indexTeacherComponent
      },
      {
        path: '/teacher/exercise',
        name: 'exercise',
        component: exerciseTeacherComponent
      },
      {
        path: '/teacher/library',
        name: 'library',
        component: libraryTeacherComponent
      },
      {
        path: '/teacher/homework',
        name: 'homework',
        component: homeworkTeacherComponent
      },
      {
        path: '/teacher/class',
        name: 'class',
        component: classTeacherComponent
      },
      {
        path: '/teacher/center',
        name: 'center',
        component: personalCenterComponent,
        children: [
          {
            path: '/teacher/center/notice',
            name: 'class',
            component: publicNoticeComponent
          },
          {
            path: '/teacher/center/setting',
            name: 'setting',
            component: settingComponent
          }
        ]
      }
    ]
  }, {
    path: '/student',
    name: 'student',
    component: headerStudentComponent,
    children: [
      {
        path: '/',
        name: 'index',
        redirect: './index'
      },
      {
        path: '/student/index',
        name: 'index',
        component: indexStudentComponent
      },
      {
        path: '/student/homework',
        name: 'homework',
        component: homeworkStudentComponent
      },
      {
        path: '/student/wrong',
        name: 'wrong',
        component: wrongStudentComponent
      },
      {
        path: '/student/inquiry',
        name: 'inquiry',
        component: inquiryStudentComponent
      },
      {
        path: '/student/center',
        name: 'center',
        component: personalCenterStudentComponent,
        children: [
          {
            path: '/student/center/notice',
            name: 'class',
            component: noticeStudentComponent
          },
          {
            path: '/student/center/setting',
            name: 'setting',
            component: settingStudentComponent
          }
        ]
      }
    ]
  }
  ]
})
