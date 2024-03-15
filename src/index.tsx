import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Index } from './pages/index/index';
import { ErrorPage } from './pages/error-page/error-page';
import { UserManage } from './pages/user-manage/user-manage';
import { Login } from './pages/login/login';
import { Menu } from './pages/menu/menu';
import { ModifyMenu } from './pages/modify-menu/modify-menu';
import { InfoModify } from './pages/info-modify/info-modify';
import { PasswordModify } from './pages/password-modify/password-modify';
import { MeetingRoomManage } from './pages/meeting-room-manage/meeting-room-manage';
import { BookingManage } from './pages/booking-manage/booking-manage';
import { Statistics } from './pages/statistics/statistics';

const routes = [
  {
    path: '/',
    element: <Index></Index>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Menu />,
        children: [
          {
            path: '/',
            element: <MeetingRoomManage/>
        },
        {
            path: 'user_manage',
            element: <UserManage/>
        },
        {
            path: 'meeting_room_manage',
            element: <MeetingRoomManage/>
        },
        {
            path: 'booking_manage',
            element: <BookingManage/>
        },
        {
            path: 'statistics',
            element: <Statistics/>
        }
        ]
      },
      {
        path: "/user",
        element: <ModifyMenu></ModifyMenu>,
        children: [
          {
            path: 'info_modify',
            element: <InfoModify/>
          },
          {
            path: 'password_modify',
            element: <PasswordModify/>
          },
        ]
    },
    ]
  },
  {
    path: 'login',
    element: <Login/>
  }
]
 
export const router = createBrowserRouter(routes)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(<RouterProvider router={router} />)
